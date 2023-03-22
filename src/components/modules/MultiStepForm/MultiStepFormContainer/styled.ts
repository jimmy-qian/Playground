import styled from 'styled-components';

import { media } from 'styles/utils';

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

export const StyledButton = styled.button`
  position: absolute;
  top: 12px;
  left: 0px;
  cursor: pointer;

  ${media.desktop`
    top: 40px;
    left: 48px;
  `};
`;
