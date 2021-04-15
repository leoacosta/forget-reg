import styled from 'styled-components';

export const StyledButtonGroup = styled.div`
  margin: 2rem 0;
`;

export const StyledButton = styled.button`
  background-color: #173146;
  border: none;
  border-radius: 2rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 1rem 2rem;

  &:focus {
    outline: 0; // TODO fix for accessibility
  }

  &.is-active {
    background-color: #4baef7;
  }
`;
