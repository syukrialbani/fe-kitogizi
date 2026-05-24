type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  return (
    <div className="process-steps">
      {steps.map((step, index) => (
        <article className="process-step" key={step.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  );
};

export default ProcessSteps;
