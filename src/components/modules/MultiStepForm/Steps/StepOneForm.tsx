import * as React from 'react';

import { Heading } from 'common/typography';
import { MultiStepForm, useMultiStepForm } from 'modules/MultiStepForm';

export const StepOneForm = () => {
  const onSubmitStep = () => {};

  return (
    <MultiStepForm.FormContainer onSubmitStep={onSubmitStep}>
      <Heading>Step 1</Heading>
    </MultiStepForm.FormContainer>
  );
};
