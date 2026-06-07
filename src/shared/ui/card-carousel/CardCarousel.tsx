import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import type { CSSProperties, PointerEvent, ReactNode, TransitionEvent } from 'react';
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';

type CarouselDirection = 'next' | 'prev';

type LoopItem<T> = {
  cloneId: string;
  isClone: boolean;
  item: T;
  originalIndex: number;
};

export type CardCarouselRenderMeta = {
  activeIndex: number;
  index: number;
  isCenter: boolean;
  isClone: boolean;
  isVisible: boolean;
  slotIndex: number;
};

type CardCarouselProps<T> = {
  ariaLabel: string;
  className?: string;
  controlsLabel?: string;
  dotsLabel?: string;
  getKey: (item: T, index: number) => string;
  items: T[];
  mobileVisibleCount?: number;
  nextLabel?: string;
  previousLabel?: string;
  renderItem: (item: T, meta: CardCarouselRenderMeta) => ReactNode;
  showControls?: boolean;
  showDots?: boolean;
  visibleCount?: number;
};

const normalizeIndex = (index: number, total: number) => ((index % total) + total) % total;
const mobileCarouselQuery = '(max-width: 700px)';
const dragThresholdRatio = 0.16;
const maxDragThreshold = 92;

const subscribeToMobileCarousel = (callback: () => void) => {
  const query = window.matchMedia(mobileCarouselQuery);

  query.addEventListener('change', callback);

  return () => query.removeEventListener('change', callback);
};

const getMobileCarouselSnapshot = () => window.matchMedia(mobileCarouselQuery).matches;
const getMobileCarouselServerSnapshot = () => false;

export const CardCarousel = <T,>({
  ariaLabel,
  className = '',
  controlsLabel = 'Navigasi carousel',
  dotsLabel = 'Pilih slide',
  getKey,
  items,
  mobileVisibleCount,
  nextLabel = 'Slide berikutnya',
  previousLabel = 'Slide sebelumnya',
  renderItem,
  showControls = true,
  showDots = true,
  visibleCount = 3,
}: CardCarouselProps<T>) => {
  const itemCount = items.length;
  const isMobileCarousel = useSyncExternalStore(
    subscribeToMobileCarousel,
    getMobileCarouselSnapshot,
    getMobileCarouselServerSnapshot
  );
  const safeDesktopVisibleCount = Math.max(1, Math.min(visibleCount, Math.max(itemCount, 1)));
  const safeMobileVisibleCount = Math.max(
    1,
    Math.min(mobileVisibleCount ?? safeDesktopVisibleCount, Math.max(itemCount, 1))
  );
  const currentVisibleCount = isMobileCarousel ? safeMobileVisibleCount : safeDesktopVisibleCount;
  const canSlide = itemCount > currentVisibleCount;
  const canLoop = itemCount > 1;
  const cloneCount = canLoop ? Math.max(safeDesktopVisibleCount, safeMobileVisibleCount) : 0;
  const [position, setPosition] = useState(cloneCount);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const dragStartX = useRef(0);
  const dragViewportWidth = useRef(0);

  useEffect(() => {
    if (transitionEnabled) {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => setTransitionEnabled(true));
    return () => window.cancelAnimationFrame(frameId);
  }, [transitionEnabled]);

  const loopItems = useMemo<LoopItem<T>[]>(() => {
    if (itemCount === 0) {
      return [];
    }

    const normalItems = items.map((item, originalIndex) => ({
      cloneId: 'item',
      isClone: false,
      item,
      originalIndex,
    }));

    if (!canLoop) {
      return normalItems;
    }

    const beforeItems = Array.from({ length: cloneCount }, (_, index) => {
      const originalIndex = normalizeIndex(itemCount - cloneCount + index, itemCount);

      return {
        cloneId: `before-${index}`,
        isClone: true,
        item: items[originalIndex],
        originalIndex,
      };
    });

    const afterItems = Array.from({ length: cloneCount }, (_, index) => {
      const originalIndex = normalizeIndex(index, itemCount);

      return {
        cloneId: `after-${index}`,
        isClone: true,
        item: items[originalIndex],
        originalIndex,
      };
    });

    return [...beforeItems, ...normalItems, ...afterItems];
  }, [canLoop, cloneCount, itemCount, items]);

  if (itemCount === 0) {
    return null;
  }

  const activeIndex = canSlide ? normalizeIndex(position - cloneCount, itemCount) : position;
  const centerSlot = Math.floor(currentVisibleCount / 2);

  const move = (direction: CarouselDirection) => {
    if (!canSlide || isAnimating) {
      return;
    }

    setIsAnimating(true);
    setTransitionEnabled(true);
    setDragOffset(0);
    setPosition((currentPosition) => currentPosition + (direction === 'next' ? 1 : -1));
  };

  const goTo = (nextIndex: number) => {
    if (!canSlide || isAnimating || nextIndex === activeIndex) {
      return;
    }

    const forwardDistance = normalizeIndex(nextIndex - activeIndex, itemCount);
    const backwardDistance = normalizeIndex(activeIndex - nextIndex, itemCount);
    const offset = forwardDistance <= backwardDistance ? forwardDistance : -backwardDistance;

    setIsAnimating(true);
    setTransitionEnabled(true);
    setDragOffset(0);
    setPosition((currentPosition) => currentPosition + offset);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== 'transform' || !canLoop) {
      return;
    }

    setIsAnimating(false);
    setPosition((currentPosition) => {
      const normalizedPosition = cloneCount + normalizeIndex(currentPosition - cloneCount, itemCount);

      if (normalizedPosition !== currentPosition) {
        setTransitionEnabled(false);
      }

      return normalizedPosition;
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!canSlide || isAnimating) {
      return;
    }

    dragStartX.current = event.clientX;
    dragViewportWidth.current = event.currentTarget.getBoundingClientRect().width;
    setIsDragging(true);
    setTransitionEnabled(false);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    setDragOffset(event.clientX - dragStartX.current);
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    const threshold = Math.min(dragViewportWidth.current * dragThresholdRatio, maxDragThreshold);
    const shouldGoNext = dragOffset < -threshold;
    const shouldGoPrev = dragOffset > threshold;

    setIsDragging(false);
    setTransitionEnabled(true);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (shouldGoNext || shouldGoPrev) {
      setIsAnimating(true);
      setDragOffset(0);
      setPosition((currentPosition) => currentPosition + (shouldGoNext ? 1 : -1));
      return;
    }

    setDragOffset(0);
  };

  const classes = ['card-carousel', isDragging ? 'is-dragging' : '', className].filter(Boolean).join(' ');
  const carouselStyle = {
    '--carousel-mobile-visible': safeMobileVisibleCount,
    '--carousel-position': position,
    '--carousel-drag-offset': `${dragOffset}px`,
    '--carousel-visible': safeDesktopVisibleCount,
  } as CSSProperties;

  return (
    <div className={classes} aria-label={ariaLabel} aria-roledescription="carousel" style={carouselStyle}>
      <div
        className="card-carousel-viewport"
        onDragStart={(event) => event.preventDefault()}
        onPointerCancel={finishDrag}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
      >
        <div
          className={`card-carousel-track ${transitionEnabled ? 'is-animated' : 'is-resetting'}`}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopItems.map((loopItem, loopIndex) => {
            const slotIndex = loopIndex - position;
            const isVisible = slotIndex >= 0 && slotIndex < currentVisibleCount;
            const isCenter = isVisible && slotIndex === centerSlot;
            const meta = {
              activeIndex,
              index: loopItem.originalIndex,
              isCenter,
              isClone: loopItem.isClone,
              isVisible,
              slotIndex,
            };

            return (
              <div
                className="card-carousel-slide"
                key={`${getKey(loopItem.item, loopItem.originalIndex)}-${loopItem.cloneId}-${loopIndex}`}
                role="group"
                aria-hidden={!isVisible}
              >
                {renderItem(loopItem.item, meta)}
              </div>
            );
          })}
        </div>
      </div>

      {showControls || showDots ? (
        <div className="card-carousel-controls" aria-label={controlsLabel}>
          {showControls ? (
            <button
              type="button"
              className="card-carousel-nav"
              aria-label={previousLabel}
              disabled={!canSlide || isAnimating}
              onClick={() => move('prev')}
            >
              <ArrowBackRoundedIcon aria-hidden="true" />
            </button>
          ) : null}

          {showDots ? (
            <div className="card-carousel-dots" aria-label={dotsLabel}>
              {items.map((item, index) => (
                <button
                  type="button"
                  key={getKey(item, index)}
                  className={`card-carousel-dot ${index === activeIndex ? 'is-active' : ''}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  aria-label={`Tampilkan slide ${index + 1}`}
                  disabled={!canSlide || isAnimating}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          ) : null}

          {showControls ? (
            <button
              type="button"
              className="card-carousel-nav"
              aria-label={nextLabel}
              disabled={!canSlide || isAnimating}
              onClick={() => move('next')}
            >
              <ArrowForwardRoundedIcon aria-hidden="true" />
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default CardCarousel;
