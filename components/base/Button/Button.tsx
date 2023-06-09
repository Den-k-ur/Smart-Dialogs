import styled from 'styled-components';

import { Theme } from 'theme/index';

type ButtonStyles = {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
};

const buttonSizes = {
  small: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '500',
  },
  medium: {
    padding: '16px 60px',
    fontSize: '20px',
    fontWeight: '600',
  },
  large: {
    padding: '12px 179px',
    fontSize: '16px',
    fontWeight: '500',
  },
};

export const Button = styled.button<ButtonStyles>`
  background-color: ${(props) =>
    props.variant === 'primary' ? Theme.colors.darkBlue : Theme.colors.white};
  color: ${(props) => (props.variant === 'primary' ? Theme.colors.white : Theme.colors.darkBlue)};
  padding: ${(props) => buttonSizes[props.size].padding};
  border: ${(props) =>
    props.variant === 'secondary' ? `1px solid ${Theme.colors.darkBlue}` : 'none'};
  border-radius: 10px;
  cursor: pointer;
  font-weight: ${(props) => buttonSizes[props.size].fontWeight};
  font-size: ${(props) => buttonSizes[props.size].fontSize};
  :hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? Theme.colors.hoverBlue : Theme.colors.LavenderMist};
    color: ${(props) => (props.variant === 'primary' ? Theme.colors.white : Theme.colors.darkBlue)};
  }
  :disabled {
    cursor: auto;
    background-color: ${Theme.colors.gray};
    border-color: ${Theme.colors.gray};
  }
`;
