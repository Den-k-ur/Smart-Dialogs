import React, { FC } from 'react';

import { Typography } from 'base/Typography';

import { CheckBoxLabel, StyledCheckbox } from './styles';

type CheckBoxTypes = {
  label: string;
};

export const Checkbox: FC<CheckBoxTypes> = ({ label }) => {
  return (
    <CheckBoxLabel htmlFor="checkbox">
      <StyledCheckbox name="checkbox" />
      <Typography variant="style7">{label}</Typography>
    </CheckBoxLabel>
  );
};
