import styled from 'styled-components';

import { Theme } from 'theme/theme';

type NavLinkTypes = {
  page: string;
  path: string;
};

export const StyledLink = styled.a<NavLinkTypes>`
  color: #000;
  :after {
    display: ${(props) => (props.page === props.path && props.page !== '/' ? 'block' : 'none')};
    content: ' ';
    width: 100%;
    border-top: 1px solid ${Theme.colors.darkBlue};
  }
  :hover {
    color: ${Theme.colors.darkBlue};
  }
`;
