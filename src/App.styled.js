import styled from 'styled-components';

export const StyledApp = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .date-picker {
    border: 1px solid #4baef7;
    border-radius: 60px; /* move to constant */
    background-color: #173146;
    color: white;
    font-family: sans-serif;
    font-size: 1rem;
    width: 100%;
    padding: 1.25rem 2rem;
  }

  .react-datepicker-popper {
    z-index: 2 !important;
  }

  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block;
  }

  input::-webkit-input-placeholder {
    color: white;
  }
`;

export const StyledRow = styled.div`
  /* border: 2px solid green; */
  margin-bottom: 4.375rem;
  max-width: 500px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledCalculator = styled.div`
  /* min-width: 580px; */
`;

export const StyledResult = styled.div`
  border: 1px solid #314453;
  border-radius: 10rem;
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1;
    margin: 0;

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
  margin-bottom: 1.25rem;
`;

export const StyledLink = styled.a`
  background-color: #4baef7;
  border: none;
  border-radius: 2rem; /* move to constant */
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1rem 2rem;
  text-decoration: none;
`;
