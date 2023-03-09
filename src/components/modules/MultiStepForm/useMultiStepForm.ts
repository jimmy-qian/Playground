import * as React from 'react';

import { MultiStepFormContext } from './multiStepFormContext';

export const useMultiStepForm = () => {
  const contextMultiStepForm = React.useContext(MultiStepFormContext);

  if (!contextMultiStepForm) {
    throw new Error('Components should be rendered inside the MultiStepForm.Provider component');
  }

  return contextMultiStepForm;
};
