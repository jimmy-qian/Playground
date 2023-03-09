import * as React from 'react';

import { MultiStepFormContext } from './MultiStepFormProvider';

export const useMultiStepForm = () => {
  const contextMultiStepForm = React.useContext(MultiStepFormContext);

  if (!contextMultiStepForm) {
    throw new Error('Components should be rendered inside the MultiStepForm.Provider component');
  }

  return contextMultiStepForm;
};
