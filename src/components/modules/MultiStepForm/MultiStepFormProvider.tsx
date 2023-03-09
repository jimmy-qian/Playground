import * as React from 'react';

export const MultiStepFormContext = React.createContext<MultiStepFormContextValuesType | null>(
  null,
);

type MultiStepFormContextValuesType = {
  amountSteps: number;
  incrementStep: () => void;
  decrementStep: () => void;
  currStep: number;
  setCurrStep: (value: number) => void;
  isSubmittable: boolean;
  setIsSubmittable: (value: boolean) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
};

const INITIAL_STEP = 1;

export const MultiStepFormProvider = ({ children, configs }: MultiStepFormProviderProps) => {
  const [isSubmittable, setIsSubmittable] = React.useState(true);
  const [currStep, setCurrStep] = React.useState(INITIAL_STEP);

  const { amountSteps } = configs;
  const isFirstStep = currStep === INITIAL_STEP;
  const isLastStep = currStep === amountSteps;

  const incrementStep = () => {
    if (isLastStep) return;

    setCurrStep((currStep) => currStep + 1);
  };

  const decrementStep = () => {
    if (isFirstStep) return;

    setCurrStep((currStep) => currStep - 1);
  };

  return (
    <MultiStepFormContext.Provider
      value={{
        currStep,
        amountSteps,
        incrementStep,
        decrementStep,
        setCurrStep,
        isSubmittable,
        setIsSubmittable,
        isFirstStep,
        isLastStep,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

type MultiStepFormProviderProps = {
  children: JSX.Element;
  configs: MultiStepFormConfigsType;
};

export type MultiStepFormConfigsType = {
  amountSteps: number;
};
