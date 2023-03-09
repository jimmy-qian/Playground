import * as React from 'react';

import { useMultiStepForm } from '../useMultiStepForm';
import { Container, Indicator } from './styled';

export const MultiStepFormStepsIndicator = () => {
  const { currStep, amountSteps } = useMultiStepForm();

  return (
    <Container>
      {Array(amountSteps)
        .fill(0)
        .map((_, index) => {
          const isActive = currStep === index + 1;
          const isComplete = currStep > index + 1;

          return <Indicator key={index} {...{ isActive, isComplete }} />;
        })}
    </Container>
  );
};
