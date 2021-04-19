import styled from 'styled-components';
import { BREAKPOINT, COLOR } from '../../utils/constants';

export const StyledButtonGroup = styled.div`
  background-color: ${COLOR.BIG_STONE};
  border-radius: 1.875rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: ${COLOR.BIG_STONE};
  border: none;
  border-radius: 1.875rem;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  padding: 1rem;
  text-transform: capitalize;

  @media (min-width: ${BREAKPOINT.MD}) {
    font-size: 1.25rem;
    padding: 1rem 2rem;
  }

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
      left: -10px;

      @media (min-width: ${BREAKPOINT.MD}) {
        left: -5px;
      }
    }

    &:after {
      right: -10px;

      @media (min-width: ${BREAKPOINT.MD}) {
        right: -10px;
      }
    }
  }

  &:focus {
    outline: 0; // TODO fix for accessibility
  }

  &.is-active {
    background-color: ${COLOR.BLUEBERRY};
    font-weight: 600;
    position: relative;
    z-index: 1;
  }
`;
