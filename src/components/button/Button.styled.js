import styled from 'styled-components';

export const StyledButtonGroup = styled.div`
  background-color: #173146;
  border-radius: 1.875rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: #173146;
  border: none;
  border-radius: 1.875rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;
  font-family: 'Poppins', sans-serif;
  padding: 1rem 2rem;
  text-transform: capitalize;

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
    font-weight: 600;
    position: relative;
    z-index: 1;
  }
`;
