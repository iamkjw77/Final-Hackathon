import styled, { css } from 'styled-components';
import classNames from 'classnames';

const buttonColor = css`
  background-color: #228be6;
  color: #f8f9fa;

  &:hover {
    background: #57a5e9;
  }
`;

const ButtonBlock = styled.button`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  border: 0;
  outline: 0;
  padding: 10px 30px;
  border-radius: 30px;
  background-color: ${({ color }) => color};

  &.small {
    font-size: 13px;
  }

  &.medium {
    font-size: 16px;
  }

  &.large {
    font-size: 20px;
  }

  &.blue {
    ${buttonColor}
  }
  &.pink {
    ${buttonColor}
  }
  &.gray {
    ${buttonColor}
  }
`;

const Button = ({ size, color, outline, fullWidth, children, ...rest }) => {
  return (
    <ButtonBlock
      className={classNames(size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </ButtonBlock>
  );
};

Button.defaultProps = {
  size: 'medium',
  color: 'gray',
};

export default Button;
