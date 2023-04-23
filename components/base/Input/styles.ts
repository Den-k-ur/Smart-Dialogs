import styled from 'styled-components';

import { Theme } from 'theme';

export const StyledInput = styled.input`
  max-width: 408px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${Theme.colors.gray};
  border-radius: 10px;
`;

export const StyledPasswordInput = styled(StyledInput)`
  padding: 12px 56px 12px 16px;
`;

export const InputAndIcon = styled.div`
  display: flex;
`;
