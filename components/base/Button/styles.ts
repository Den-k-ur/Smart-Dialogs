import styled from 'styled-components';

import { Theme } from 'theme/index';

type ButtonTypes = {
  variant: 'primary' | 'secondary';
};

export const StyledButton = styled.button<ButtonTypes>`
  background-color: ${(props) =>
    props.variant === 'primary' ? Theme.colors.darkBlue : Theme.colors.white};
  color: ${(props) => (props.variant === 'primary' ? Theme.colors.white : Theme.colors.darkBlue)};
  padding: 12px 24px;
  border: 1px solid ${Theme.colors.darkBlue};
  border-radius: 10px;
  cursor: pointer;
`;
