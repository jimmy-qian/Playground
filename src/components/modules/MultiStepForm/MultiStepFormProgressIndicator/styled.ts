import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Indicator = styled.span<IndicatorProps>(
  ({ isActive, isCompleted }) => css`
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background-color: #e6e6e6;
    transition: 0.2s ease;

    ${isActive &&
    css`
      width: 24px;
      background-color: #a3e31b;
    `}

    ${isCompleted &&
    css`
      background-color: #80bc00;
    `};
  `,
);

type IndicatorProps = {
  isCompleted?: boolean;
  isActive?: boolean;
};
