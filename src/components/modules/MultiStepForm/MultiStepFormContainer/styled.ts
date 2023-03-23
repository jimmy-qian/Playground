import styled from 'styled-components';

import { media } from 'styles/utils';
import { Button } from 'common';

export const FormContainer = styled.form`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  max-height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const StyledButton = styled(Button)`
  min-width: 80px;
  height: auto;
  padding: 16px 8px;
  position: absolute;
  top: 12px;
  left: 12px;
  cursor: pointer;

  ${media.desktop`
    top: 40px;
    left: 48px;
  `};
`;
