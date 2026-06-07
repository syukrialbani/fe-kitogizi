import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import FamilyRestroomRoundedIcon from '@mui/icons-material/FamilyRestroomRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import type { CSSProperties } from 'react';
import schoolSceneImage from '../../../assets/school-cooking-session.jpg';
import { whatsappHref } from '../../../shared/config/site';
import { schoolNeeds, schoolPackages } from '../../../shared/data/siteContent';
import { ActionLink } from '../../../shared/ui/action-link/ActionLink';
import { FinalCTA } from '../../../shared/ui/final-cta/FinalCTA';
import { PageHero } from '../../../shared/ui/page-hero/PageHero';
import { SectionHeader } from '../../../shared/ui/section-header/SectionHeader';
import { SchoolHeroVisual } from '../../../widgets/hero-visuals';

const needIcons = [MenuBookRoundedIcon, TipsAndUpdatesRoundedIcon, FamilyRestroomRoundedIcon];
const programIcons = [MenuBookRoundedIcon, LunchDiningRoundedIcon, FamilyRestroomRoundedIcon];
const schoolProofs = ['Age-friendly activity', 'Parent education', 'Habit challenge'];
const insightRows = [
  {
    title: 'Siswa',
    description: 'Materi dibuat ringan, visual, dan mudah dihubungkan dengan keseharian.',
    icon: GroupsRoundedIcon,
  },
  {
    title: 'Sekolah',
    description: 'Program bisa masuk sebagai aktivasi, campaign, atau pendampingan berkala.',
    icon: MenuBookRoundedIcon,
  },
  {
    title: 'Orang tua',
    description: 'Insight sederhana membantu kebiasaan sehat ikut berlanjut di rumah.',
    icon: FamilyRestroomRoundedIcon,
  },
];

export const SchoolWellnessPage = () => {
  const recommendedProgram = schoolPackages.find((item) => item.recommended) ?? schoolPackages[0];
  const supportingPrograms = schoolPackages.filter((item) => item.title !== recommendedProgram.title);

  return (
    <>
      <PageHero
        variant="school"
        eyebrow="School Wellness Program"
        title="Membangun Kebiasaan Sehat Sejak Dini"
        description="Kitogizi membantu sekolah menghadirkan program wellness yang interaktif, edukatif, dan relevan untuk mendukung kesehatan, fokus belajar, dan kualitas hidup siswa."
        actions={
          <>
            <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
              Diskusikan Program Sekolah
            </ActionLink>
            <ActionLink href="#paket-sekolah" variant="secondary">
              Lihat Program
            </ActionLink>
          </>
        }
        meta={
          <div className="hero-proof-grid school-hero-proof">
            {schoolProofs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        }
        visual={<SchoolHeroVisual />}
      />

      <section className="section school-flow-section">
        <div className="container school-flow-layout">
          <div className="school-flow-copy">
            <SectionHeader
              eyebrow="Lingkungan Sehat"
              title="Kebiasaan Sehat Dimulai dari Lingkungan yang Tepat"
              description="Siswa bisa mencoba langkah kecil, lalu didukung oleh sekolah dan rumah."
            />
            <div className="school-flow-note">
              <strong>Dari kelas ke rutinitas harian.</strong>
              <p>Setiap sesi diarahkan menjadi pengalaman singkat yang bisa diingat, dipraktikkan, dan dibicarakan kembali bersama guru maupun orang tua.</p>
            </div>
          </div>
          <div className="school-need-flow">
            {schoolNeeds.map((need, index) => {
              const Icon = needIcons[index];
              return (
                <article key={need.title} className="school-need-row">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{need.title}</h3>
                    <p>{need.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="paket-sekolah" className="section school-program-section">
        <div className="container school-program-shell">
          <div className="school-program-head">
            <SectionHeader
              eyebrow="Program Sekolah"
              title="Pilih intensitas program sesuai kebutuhan sekolah."
              description="Mulai dari sesi awareness yang ringan sampai partnership berkala untuk membangun budaya sehat di lingkungan sekolah."
            />
            <div className="school-program-tags" aria-label="Format program sekolah">
              <span>Awareness</span>
              <span>Challenge</span>
              <span>Partnership</span>
            </div>
          </div>
          <div className="school-program-layout">
            <article className="school-featured-program">
              <img src={schoolSceneImage} alt="" />
              <div className="school-featured-program-content">
                <span>{recommendedProgram.tier}</span>
                <strong>{recommendedProgram.title}</strong>
                <p>{recommendedProgram.description}</p>
                <div className="school-deliverable-cloud">
                  {recommendedProgram.deliverables.map((deliverable) => (
                    <small key={deliverable}>{deliverable}</small>
                  ))}
                </div>
                <p className="school-fit-note">{recommendedProgram.fit}</p>
                <ActionLink href={whatsappHref} target="_blank" icon="whatsapp">
                  Diskusikan Program
                </ActionLink>
              </div>
            </article>
            <div className="school-program-stack">
              {supportingPrograms.map((program, index) => {
                const Icon = programIcons[index] ?? LunchDiningRoundedIcon;
                return (
                  <article key={program.title} className="school-program-mini">
                    <div>
                      <Icon aria-hidden="true" />
                      <span>{program.tier}</span>
                    </div>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <div className="school-deliverable-line">
                      {program.deliverables.slice(0, 3).map((deliverable) => (
                        <small key={deliverable}>{deliverable}</small>
                      ))}
                    </div>
                    <p className="school-fit-note">{program.fit}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section school-insight-section">
        <div className="container school-insight-layout">
          <div className="school-insight-report">
            <div className="school-report-header">
              <InsightsRoundedIcon aria-hidden="true" />
              <div>
                <span>Student Wellness Insight</span>
                <strong>Habit snapshot</strong>
              </div>
            </div>
            <div className="school-report-bars" aria-label="Contoh area insight wellness siswa">
              <div>
                <span>Pola makan</span>
                <strong>72%</strong>
                <i style={{ '--bar-size': '72%' } as CSSProperties} />
              </div>
              <div>
                <span>Aktivitas harian</span>
                <strong>64%</strong>
                <i style={{ '--bar-size': '64%' } as CSSProperties} />
              </div>
              <div>
                <span>Home habit</span>
                <strong>58%</strong>
                <i style={{ '--bar-size': '58%' } as CSSProperties} />
              </div>
            </div>
            <p>Contoh visual insight untuk membantu sekolah dan orang tua membaca kebiasaan siswa secara sederhana.</p>
          </div>
          <div className="school-parent-copy">
            <SectionHeader
              eyebrow="Kolaborasi Orang Tua"
              title="Kebiasaan sehat lebih kuat saat kelas, sekolah, dan rumah bergerak bersama."
              description="Program dapat dilengkapi Student Wellness Insight Report dan parent education agar pesan sehat tidak berhenti di sesi, tetapi ikut terbawa ke rutinitas rumah."
            />
            <div className="school-parent-path">
              {insightRows.map((row) => {
                const Icon = row.icon;
                return (
                  <article key={row.title}>
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{row.title}</h3>
                      <p>{row.description}</p>
                    </div>
                    <CheckCircleRoundedIcon aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Diskusikan program untuk sekolah Anda"
        description="Kitogizi siap membantu sekolah menghadirkan program wellness yang relevan, interaktif, dan sesuai dengan kebutuhan siswa."
        primaryLabel="Konsultasi Program Sekolah"
      />
    </>
  );
};

export default SchoolWellnessPage;
