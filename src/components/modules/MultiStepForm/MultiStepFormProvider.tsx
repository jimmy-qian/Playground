import * as React from 'react';

import { MultiStepForm } from '.';

export const MultiStepFormContext = React.createContext<MultiStepFormContextValuesType | null>(
  null,
);

type MultiStepFormContextValuesType = {
  formState: FormState;
  updateFormState: (value: Partial<FormState>) => void;
  incrementStep: () => void;
  decrementStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
};

const INITIAL_STEP = 0;

export const MultiStepFormProvider = ({ steps }: MultiStepFormProviderProps) => {
  const [formState, setFormState] = React.useState<FormState>({
    currStep: INITIAL_STEP,
    amountSteps: steps.length,
    onSubmitCurrentStep: undefined,
    isSubmittable: false,
    isProcessing: false,
  });

  const isFirstStep = formState.currStep === INITIAL_STEP;
  const isLastStep = formState.currStep === formState.amountSteps;
  const currStepConfig = steps.find((step) => step.order === formState.currStep) || steps[0];

  React.useEffect(() => {
    if (formState.isProcessing) {
      setFormState((currFormState) => ({
        ...currFormState,
        isSubmittable: false,
      }));
    }
  }, [formState.isProcessing]);

  React.useEffect(() => {
    if (!currStepConfig) return;

    updateFormState({ isSubmittable: currStepConfig.isSkippable });
  }, [currStepConfig]);

  const updateFormState = (newFormState: Partial<FormState>) => {
    setFormState((currFormState) => ({ ...currFormState, ...newFormState }));
  };

  const incrementStep = () => {
    if (formState.currStep === formState.amountSteps - 1) return;

    setFormState((currFormState) => ({
      ...currFormState,
      currStep: currFormState.currStep + 1,
    }));
  };

  const decrementStep = () => {
    if (formState.currStep === INITIAL_STEP) return;

    setFormState((currFormState) => ({
      ...currFormState,
      currStep: currFormState.currStep - 1,
    }));
  };

  return (
    <MultiStepFormContext.Provider
      value={{
        formState,
        updateFormState,
        incrementStep,
        decrementStep,
        isFirstStep,
        isLastStep,
      }}
    >
      {currStepConfig.component}
      <MultiStepForm.Controller />
    </MultiStepFormContext.Provider>
  );
};

type MultiStepFormProviderProps = {
  steps: Step[];
};

type FormState = {
  currStep: number;
  amountSteps: number;
  onSubmitCurrentStep: (() => void) | undefined;
  isSubmittable: boolean;
  isProcessing: boolean;
};

export type Step = {
  order: number;
  isSkippable?: boolean;
  component: JSX.Element;
};
