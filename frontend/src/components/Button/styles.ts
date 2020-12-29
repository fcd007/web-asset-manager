import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #0b447c;
  color: #f4ede8;

  font-weight: 500;

  border-radius: 10px;
  border: 0;

  margin-top: 16px;
  padding: 0 16px;
  height: 56px;

  width: 100%;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#679dbb')};
  }
`;
