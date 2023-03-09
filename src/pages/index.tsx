import * as i from 'types';

import { Heading } from 'common/typography';
import { Container } from 'modules/Home';
import { MultiStepForm } from 'modules/MultiStepForm';
import { MultiStepFormConfigsType } from 'modules/MultiStepForm/multiStepFormContext';

const CONFIGS: MultiStepFormConfigsType = {
  amountSteps: 3,
};

const HomePage: i.NextPageComponent = () => {
  return (
    <MultiStepForm.Provider configs={CONFIGS}>
      <Container>
        <MultiStepForm.Step step={1}>
          <Heading>Step 1</Heading>
        </MultiStepForm.Step>
        <MultiStepForm.Step step={2}>
          <Heading>Step 2</Heading>
        </MultiStepForm.Step>
        <MultiStepForm.Step step={3}>
          <Heading>Step 3</Heading>
        </MultiStepForm.Step>
      </Container>
    </MultiStepForm.Provider>
  );
};

export default HomePage;
