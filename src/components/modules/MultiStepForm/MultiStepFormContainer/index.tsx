import * as React from 'react';

import { Heading } from 'common/typography';

import { useMultiStepForm } from '..';
import { MultiStepForm } from '..';
import { ContentContainer, FormContainer, StyledButton } from './styled';

export const MultiStepFormContainer = ({
  children,
  title,
  isStepValid = false,
  onSubmitStep,
}: MultiStepFormContainerProps) => {
  const { formState, updateFormState, decrementStep, isFirstStep } = useMultiStepForm();

  React.useEffect(() => {
    updateFormState({ isSubmittable: isStepValid });
  }, [isStepValid]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formState.isSubmittable || typeof onSubmitStep === 'undefined') return;

    onSubmitStep();
  };

  return (
    <FormContainer {...{ onSubmit }}>
      {!isFirstStep && <StyledButton onClick={decrementStep}>Back</StyledButton>}
      <ContentContainer>
        {title && <Heading as="h4">{title}</Heading>}
        {children}
      </ContentContainer>
      {/* TODO: Move this out of each step to prevent remounting */}
      <MultiStepForm.Controller />
    </FormContainer>
  );
};

type MultiStepFormContainerProps = {
  children: JSX.Element | JSX.Element[];
  title?: string;
  isStepValid?: boolean;
  onSubmitStep: () => void;
};
