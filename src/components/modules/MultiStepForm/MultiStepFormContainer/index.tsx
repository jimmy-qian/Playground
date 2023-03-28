import * as React from 'react';

import { Heading } from 'common/typography';

import { useMultiStepForm } from '..';
import { ContentContainer, FormContainer, StyledButton } from './styled';

export const MultiStepFormContainer = ({
  children,
  title,
  isStepValid = false,
  onSubmitStep,
}: MultiStepFormContainerProps) => {
  const { updateFormState, decrementStep, isFirstStep } = useMultiStepForm();

  React.useEffect(() => {
    updateFormState({ isSubmittable: isStepValid });
  }, [isStepValid]);

  React.useEffect(() => {
    if (!onSubmitStep) return;

    updateFormState({ onSubmitCurrentStep: onSubmitStep });
  }, [onSubmitStep]);

  return (
    <FormContainer>
      {!isFirstStep && <StyledButton onClick={decrementStep}>Back</StyledButton>}
      <ContentContainer>
        {title && <Heading as="h4">{title}</Heading>}
        {children}
      </ContentContainer>
    </FormContainer>
  );
};

type MultiStepFormContainerProps = {
  children: JSX.Element | JSX.Element[];
  title?: string;
  isStepValid?: boolean;
  onSubmitStep: () => void;
};
