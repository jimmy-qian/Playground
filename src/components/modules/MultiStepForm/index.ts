import { MultiStepFormController } from './MultiStepFormController';
import { MultiStepFormStep } from './MultiStepFormStep';
import { MultiStepFormProvider } from './multiStepFormContext';

export * from './useMultiStepForm';

export const MultiStepForm = {
  Provider: MultiStepFormProvider,
  Step: MultiStepFormStep,
  Controller: MultiStepFormController,
};
