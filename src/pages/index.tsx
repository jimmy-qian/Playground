import * as i from 'types';

import { Container } from 'modules/Home';
import { MultiStepForm } from 'modules/MultiStepForm';
import { Step } from 'modules/MultiStepForm/MultiStepFormProvider';
import { StepOneForm, StepThreeForm, StepTwoForm } from 'modules/MultiStepForm/Steps';

const STEPS: Step[] = [
  {
    order: 0,
    component: <StepOneForm />,
  },
  {
    order: 1,
    component: <StepTwoForm />,
  },
  {
    order: 2,
    component: <StepThreeForm />,
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
