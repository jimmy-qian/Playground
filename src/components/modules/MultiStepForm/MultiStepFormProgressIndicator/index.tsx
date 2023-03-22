import * as React from 'react';

import { useMultiStepForm } from '..';
import { Container, Indicator } from './styled';

export const MultiStepFormProgressIndicator = () => {
  const { formState } = useMultiStepForm();

  return (
    <Container>
      {Array(formState.amountSteps)
        .fill(0)
        .map((_, index) => {
          const isActive = formState.currStep === index;
          const isComplete = formState.currStep > index;

          return <Indicator key={index} {...{ isActive, isComplete }} />;
        })}
    </Container>
  );
};
