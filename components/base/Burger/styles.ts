import styled from 'styled-components';

import { Theme } from 'theme/theme';

type BurgerTypes = {
  open: boolean;
};
export const StyledBurger = styled.button<BurgerTypes>`
  display: none;
  @media screen and (max-width: ${Theme.sizes.md}) {
    position: absolute;
    top: 6%;
    right: 3%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${Theme.colors.black};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
      :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }
      :nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) => (open ? 'translateX(20px)' : 'translate(0)')};
      }
      :nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;
