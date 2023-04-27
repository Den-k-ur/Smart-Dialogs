import styled from 'styled-components';

import { Theme } from 'theme/theme';

import CloseIcon from './images/close-cross.svg';

type BurgerTypes = {
  open: boolean;
};
export const StyledBurger = styled.button<BurgerTypes>`
  display: none;
  @media screen and (max-width: ${Theme.sizes.md}) {
    position: relative;
    order: 3;
    right: 20px;
    display: ${(props) => (props.open ? 'none' : 'flex')};
    flex-direction: column;
    gap: 5px;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 32px;
      height: 4px;
      background-color: ${Theme.colors.black};
      border-radius: 10px;
      position: relative;
      transform-origin: 1px;
    }
  }
`;

export const StyledCloseIcon = styled(CloseIcon)<BurgerTypes>`
  position: fixed;
  display: none;
  display: ${(props) => (props.open ? 'block' : 'none')};
  @media screen and (max-width: ${Theme.sizes.md}) {
    z-index: 300;
    right: 20px;
  }
`;

export const CloseIconContainer = styled(StyledCloseIcon)<BurgerTypes>`
  display: ${(props) => (props.open ? 'block' : 'none')};
`;
