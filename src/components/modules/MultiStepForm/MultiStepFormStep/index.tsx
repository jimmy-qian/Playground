import * as React from 'react';

import { MultiStepForm } from '..';
import { useMultiStepForm } from '../useMultiStepForm';
import { Container } from './styled';

export const MultiStepFormStep = ({ children, step }: MultiStepFormStepProps) => {
  const { currStep } = useMultiStepForm();

  if (currStep !== step) return null;

  return (
    <Container>
      {children}
      <MultiStepForm.Controller />
    </Container>
  );
};

type MultiStepFormStepProps = {
  children: JSX.Element;
  step: number;
};
