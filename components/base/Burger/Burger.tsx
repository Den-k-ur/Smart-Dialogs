import React, { FC } from 'react';

import { CloseIconContainer, StyledBurger, StyledCloseIcon } from './styles';

type BurgerTypes = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const Burger: FC<BurgerTypes> = ({ open, setOpen }) => {
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <CloseIconContainer open={open} onClick={() => setOpen(false)}>
        <StyledCloseIcon open={open} />
      </CloseIconContainer>
    </>
  );
};
