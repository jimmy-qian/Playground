import * as React from 'react';

import { Heading } from 'common/typography';
import { MultiStepForm, useMultiStepForm } from 'modules/MultiStepForm';

export const StepTwoForm = () => {
  const { incrementStep } = useMultiStepForm();

  const onSubmitStep = () => {
    incrementStep();
  };

  return (
    <MultiStepForm.FormContainer onSubmitStep={onSubmitStep}>
      <Heading>Step 2</Heading>
    </MultiStepForm.FormContainer>
  );
};
