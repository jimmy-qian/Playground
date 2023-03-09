import * as React from 'react';

import { Button } from 'common';

import { MultiStepForm } from '..';
import { useMultiStepForm } from '../useMultiStepForm';
import { Container } from './styled';

export const MultiStepFormController = () => {
  const { incrementStep, decrementStep, isSubmittable, isFirstStep, isLastStep } =
    useMultiStepForm();

  const onClickNavigation = (mode: 'PREV' | 'NEXT') => {
    switch (mode) {
      case 'PREV':
        return decrementStep();
      case 'NEXT':
        return incrementStep();
      default:
        return;
    }
  };

  return (
    <Container>
      <Button
        onClick={() => onClickNavigation('PREV')}
        isDisabled={isFirstStep}
        disabled={isFirstStep}
      >
        Back
      </Button>
      <MultiStepForm.StepsIndicator />
      <Button
        onClick={() => onClickNavigation('NEXT')}
        isDisabled={isLastStep || !isSubmittable}
        disabled={isLastStep || !isSubmittable}
      >
        Next
      </Button>
    </Container>
  );
};
