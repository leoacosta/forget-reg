import styled from 'styled-components';

export const StyledButtonGroup = styled.div`
  margin: 2rem 0;
  background-color: #173146;
  border-radius: 1.875rem;
`;

export const StyledButton = styled.button`
  background-color: #173146;
  border: none;
  border-radius: 1.875rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 1rem 2rem;

  &:nth-child(2) {
    position: relative;

    &:before,
    &:after {
      content: '';
      width: 1px;
      height: 50%;
      background-color: hsl(60deg 4% 89% / 25%);
      position: absolute;
      top: 25%;
    }

    &:before {
      left: -5px;
    }

    &:after {
      right: -5px;
    }
  }

  &:focus {
    outline: 0; // TODO fix for accessibility
  }

  &.is-active {
    background-color: #4baef7;
    position: relative;
    z-index: 1;
  }
`;
