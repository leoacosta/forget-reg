import styled from 'styled-components';
import { BREAKPOINT, COLOR } from './utils/constants';

export const StyledApp = styled.main`
  height: 100vh;
  padding: 2rem 1.5rem;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const StyledRow = styled.div`
  margin-bottom: 4.375rem;
  max-width: 530px;
`;

export const StyledFlex = styled.div`
  display: flex;
`;

export const StyledCalculator = styled.div`
  /* placeholder... */
`;

export const StyledDatePicker = styled.div`
  &:first-child {
    margin-right: 1rem;
  }

  &:last-child {
    margin-left: 1rem;
  }

  .date-picker {
    border: 1px solid ${COLOR.BLUEBERRY};
    border-radius: 3.75rem;
    background-color: ${COLOR.BIG_STONE};
    color: white;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    padding: 1.25rem 2rem;

    @media (min-width: ${BREAKPOINT.MD}) {
      font-size: 1.25rem;
    }
  }

  .react-datepicker-popper {
    z-index: 2 !important;
  }

  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block;
  }

  .react-datepicker__triangle {
    left: 50% !important;
  }

  .react-datepicker__close-icon::after {
    align-items: center;
    background-color: hsl(205deg 91% 63% / 65%);
    display: flex;
    font-size: 1.25rem;
    height: 26px;
    justify-content: center;
    width: 26px;
    margin-right: 0.625rem;
  }
`;

export const StyledResult = styled.div`
  border: 1px solid #314453;
  border-radius: 10rem;
  padding: 1rem 1rem 1rem 1.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    margin: 0;

    @media (min-width: ${BREAKPOINT.MD}) {
      font-size: 3rem;
    }

    &:before {
      content: '$';
    }
  }

  span {
    font-size: 1rem;
  }
`;

export const StyledHeading3 = styled.h3`
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin-bottom: 1.25rem;
`;

export const StyledLink = styled.a`
  background-color: ${COLOR.BLUEBERRY};
  border: none;
  border-radius: 2rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
  text-decoration: none;

  @media (min-width: ${BREAKPOINT.MD}) {
    font-size: 1.25rem;
    padding: 1rem 2rem;
  }
`;
