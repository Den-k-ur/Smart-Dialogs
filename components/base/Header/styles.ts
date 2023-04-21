import styled from 'styled-components';

import { Theme } from 'theme/index';

type MenuTypes = {
  isOpen: boolean;
};

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  justify-content: center;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    flex-direction: column;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  padding-top: 45px;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    flex-direction: column;
  }
`;

export const StyledNav = styled.nav<MenuTypes>`
  display: flex;
  gap: 60px;
  align-items: center;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
`;

export const NavAndSignIn = styled.div`
  display: flex;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  gap: 147px;
`;

export const HeaderStyles = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
