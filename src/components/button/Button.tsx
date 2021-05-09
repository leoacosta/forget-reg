import { StyledButtonGroup, StyledButton } from './Button.styled';

const Button = ({ data, handleOnClick, defaultValue }: any) => (
  <StyledButtonGroup>
    {data.map((el: any, index: number) => {
      const { label, suffix } = el;
      return (
        <StyledButton
          key={index}
          className={defaultValue === label ? `is-active` : ``}
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
