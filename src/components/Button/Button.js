import { darken, lighten } from 'polished';
import styled from 'styled-components';
import theme from 'styles/theme';

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
  background-color: ${({ color }) => theme[color]['background-color']};
  width: ${({ fullWidth }) => (fullWidth ? '50%' : '200px')};
  color: ${({ color }) => theme[color].color};

  &:hover {
    background: ${({ color }) =>
      lighten(0.1, theme[color]['background-color'])};
    color: ${({ color }) => darken(0.1, theme[color]['background-color'])};
    border: ${({ color }) => `1px solid ${color}`};
  }
  &.small {
    font-size: 13px;
  }

  &.medium {
    font-size: 16px;
  }

  &.large {
    font-size: 20px;
  }
`;

const Button = ({ size, color, children, ...rest }) => {
  return (
    <ButtonBlock color={color} {...rest}>
      {children}
    </ButtonBlock>
  );
};

Button.defaultProps = {
  size: 'medium',
  color: 'gray',
};

export default Button;
