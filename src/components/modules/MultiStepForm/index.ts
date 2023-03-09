import { MultiStepFormController } from './MultiStepFormController';
import { MultiStepFormProvider } from './MultiStepFormProvider';
import { MultiStepFormStep } from './MultiStepFormStep';

export * from './useMultiStepForm';

export const MultiStepForm = {
  Provider: MultiStepFormProvider,
  Step: MultiStepFormStep,
  Controller: MultiStepFormController,
};
