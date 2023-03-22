import * as React from 'react';

import { Button } from 'common/interaction';

import { useMultiStepForm } from '..';
import { MultiStepForm } from '..';
import { Container } from './styled';

export const MultiStepFormController = () => {
  const { formState, isLastStep } = useMultiStepForm();

  return (
    <Container>
      <MultiStepForm.ProgressIndicator />
      <Button
        type="submit"
        isLoading={formState.isProcessing}
        isDisabled={!formState.isSubmittable}
      >
        {isLastStep ? 'Complete' : 'Next'}
      </Button>
    </Container>
  );
};
