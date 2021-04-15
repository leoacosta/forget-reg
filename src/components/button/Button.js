/* eslint-disable react/prop-types */
import { StyledButtonGroup, StyledButton } from './Button.styled';

const Button = ({ data, handleOnClick, defaultValue }) => (
  <StyledButtonGroup>
    {data.map((el, index) => {
      const { label, suffix } = el;
      return (
        <StyledButton
          key={index}
          className={defaultValue === label ? `is-active` : ''}
          type="button"
          value={label}
          defaultValue={defaultValue}
          onClick={(event) => {
            handleOnClick(event, suffix);
          }}
        >
          {label}
        </StyledButton>
      );
    })}
  </StyledButtonGroup>
);

export default Button;
