import * as i from 'types';

import { Container } from 'modules/Home';
import { MultiStepForm } from 'modules/MultiStepForm';
import { Step } from 'modules/MultiStepForm/MultiStepFormProvider';
import { StepOneForm, StepTwoForm } from 'modules/MultiStepForm/Steps';

const STEPS: Step[] = [
  {
    order: 0,
    isSkippable: true,
    component: <StepOneForm />,
  },
  {
    order: 1,
    component: <StepTwoForm />,
  },
];

const HomePage: i.NextPageComponent = () => {
  return (
    <Container>
      <MultiStepForm.Root steps={STEPS} />
    </Container>
  );
};

export default HomePage;
