import * as React from 'react';

import { FormContainer } from 'common/form';

import { useMultiStepForm } from '../useMultiStepForm';
import { Container } from './styled';

export const MultiStepFormStep = ({ children, step, isConfirmNeeded }: MultiStepFormStepProps) => {
  const { currStep, isAnimated } = useMultiStepForm();

  React.useEffect(() => {
    if (isConfirmNeeded && currStep === step) {
      window.addEventListener('beforeunload', onUnloadPage);
    }

    return () => window.removeEventListener('beforeunload', onUnloadPage);
  }, [isConfirmNeeded]);

  const onUnloadPage = (e: BeforeUnloadEvent) => {
    e.returnValue = 'Are you sure you want to exit the page?';
  };

  if (currStep !== step) return null;

  return <Container {...{ isAnimated }}>{children}</Container>;
};

type MultiStepFormStepProps = {
  children: JSX.Element;
  step: number;
  isConfirmNeeded?: boolean;
};
