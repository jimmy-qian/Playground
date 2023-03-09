import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Indicator = styled.span<IndicatorProps>`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: #e6e6e6;
  transition: 0.2s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      width: 24px;
      background-color: #a3e31b;
    `}

  ${({ isComplete }) =>
    isComplete &&
    css`
      background-color: #80bc00;
    `};
`;

type IndicatorProps = {
  isComplete?: boolean;
  isActive?: boolean;
};
