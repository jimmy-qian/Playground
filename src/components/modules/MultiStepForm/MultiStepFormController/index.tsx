import * as React from 'react';

import { Button } from 'common/interaction';

import { useMultiStepForm } from '..';
import { MultiStepForm } from '..';
import { Container } from './styled';

export const MultiStepFormController = () => {
  const { formState, incrementStep, isLastStep } = useMultiStepForm();

  const onClickSubmit = () => {
    if (!formState.onSubmitCurrentStep) return;

    formState.onSubmitCurrentStep();
    incrementStep();
  };

  return (
    <Container>
      <MultiStepForm.ProgressIndicator />
      <Button
        type="button"
        onClick={onClickSubmit}
        isLoading={formState.isProcessing}
        isDisabled={!formState.isSubmittable}
      >
        {isLastStep ? 'Complete' : 'Next'}
      </Button>
    </Container>
  );
};
