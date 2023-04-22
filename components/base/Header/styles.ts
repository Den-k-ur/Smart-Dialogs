import styled from 'styled-components';

import { Theme } from 'theme/index';

import Logo from './images/logo.svg';
import MobileLogo from './images/mobileLogo.svg';

export const StyledLogo = styled(Logo)`
  @media screen and (max-width: ${Theme.sizes.md}) {
    display: none;
  }
`;

export const StyledMobileLogo = styled(MobileLogo)`
  display: none;
  @media screen and (max-width: ${Theme.sizes.md}) {
    display: inline-block;
  }
`;

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
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 60px;
  align-items: center;
  @media screen and (max-width: ${Theme.sizes.md}) {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
`;

export const NavAndSignIn = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

export const HeaderStyles = styled.div`
  display: flex;
  flex: 1 0 auto;
  gap: 143px;
  @media screen and (max-width: ${Theme.sizes.lg}) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    align-items: center;
  }
`;
