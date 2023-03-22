import * as React from 'react';

import { Heading } from 'common/typography';
import { MultiStepForm, useMultiStepForm } from 'modules/MultiStepForm';

export const StepThreeForm = () => {
  const { incrementStep } = useMultiStepForm();

  const onSubmitStep = () => {
    incrementStep();
  };

  return (
    <MultiStepForm.FormContainer onSubmitStep={onSubmitStep}>
      <Heading>Step 3</Heading>
    </MultiStepForm.FormContainer>
  );
};