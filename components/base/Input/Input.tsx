import styled from 'styled-components';

import { Theme } from 'theme/theme';

export const Input = styled.input`
  max-width: 408px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${Theme.colors.gray};
  border-radius: 10px;
`;
