import { MultiStepFormContainer } from './MultiStepFormContainer';
import { MultiStepFormController } from './MultiStepFormController';
import { MultiStepFormProgressIndicator } from './MultiStepFormProgressIndicator';
import { MultiStepFormProvider } from './MultiStepFormProvider';

export * from './useMultiStepForm';

export const MultiStepForm = {
  Root: MultiStepFormProvider,
  FormContainer: MultiStepFormContainer,
  Controller: MultiStepFormController,
  ProgressIndicator: MultiStepFormProgressIndicator,
};
