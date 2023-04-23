import styled from 'styled-components';

import { Theme } from 'theme/theme';

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  background-color: ${Theme.colors.white};
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${Theme.colors.gray};
  :checked {
    background-color: ${Theme.colors.darkBlue};
    ::before {
      content: '\\2714';
      position: absolute;
      color: ${Theme.colors.white};
      margin-left: 4px;
      margin-top: 2px;
    }
  }
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  gap: 5px;
`;
