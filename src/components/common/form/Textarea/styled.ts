import styled from 'styled-components';

import { InputFieldCss } from '../Input/styled';

export const StyledTextarea = styled.input<TextareaProps>`
  ${InputFieldCss};
`;

type TextareaProps = {
  error?: boolean;
  as?: 'textarea';
};
