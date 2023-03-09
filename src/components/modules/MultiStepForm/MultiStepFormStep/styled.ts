import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ isAnimated }) =>
    isAnimated &&
    css`
      animation: ${FadeIn} 0.4s ease forwards;
    `}
`;

type ContainerProps = {
  isAnimated?: boolean;
};

export const FadeIn = keyframes`
  from {
    transform: translateY(3vh);
    opacity: 0;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;
