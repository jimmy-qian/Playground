import * as React from 'react';

import { useMultiStepForm } from '../useMultiStepForm';
import { Container } from './styled';

export const MultiStepFormStep = ({ children, step }: MultiStepFormStepProps) => {
  const { currStep } = useMultiStepForm();

  if (currStep !== step) return null;

  return <Container>{children}</Container>;
};

type MultiStepFormStepProps = {
  children: JSX.Element;
  step: number;
};
