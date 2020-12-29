/* eslint-disable import/extensions */
import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-size: 18px;

  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  color: #666360;
  background: #eff5f8;
  border: 2px solid #0b447c;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

    ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

    input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #23c23;

    &::placeholder {
      color: #1e2f38;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    color: #fff;
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
