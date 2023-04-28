import styled from 'styled-components';

import { Button } from 'base/Button';
import Logo from 'public/logo.svg';

import { Theme } from 'theme/index';

import MobileLogo from './images/mobileLogo.svg';

type DropDownTypes = {
  isOpen: boolean;
};

export const StyledLogo = styled(Logo)`
  cursor: pointer;
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
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${Theme.sizes.md}) {
    justify-content: flex-end;
    align-items: center;
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
  @media screen and (max-width: ${Theme.sizes.xl}) {
    gap: 40px;
  }
`;

export const StyledButton = styled(Button)`
  @media screen and (max-width: ${Theme.sizes.md}) {
    order: 4;
  }
`;

export const UserMenuButton = styled(Button)`
  position: relative;
  background-color: inherit;
  display: flex;
  gap: 8px;
  color: ${Theme.colors.darkBlue};
  padding: 0;
  text-decoration: underline;
  :hover {
    color: ${Theme.colors.hoverBlue};
    background-color: inherit;
  }
`;

export const DropDownContent = styled.div<DropDownTypes>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.LavenderMist};
  border-radius: 6px;
  top: 40px;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  cursor: auto;
  height: 100px;
  z-index: 1;
`;

export const ExitButton = styled(UserMenuButton)`
  text-decoration: none;
`;
