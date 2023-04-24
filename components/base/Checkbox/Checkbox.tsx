import React, { FC } from 'react';

import { Typography } from 'base/Typography';

import { CheckBoxLabel, StyledCheckbox } from './styles';

type CheckBoxTypes = {
  label: string;
  onChange?: () => void;
};

export const Checkbox: FC<CheckBoxTypes> = ({ label, onChange }) => {
  return (
    <CheckBoxLabel htmlFor="checkbox">
      <StyledCheckbox onChange={onChange} name="checkbox" />
      <Typography variant="style7">{label}</Typography>
    </CheckBoxLabel>
  );
};
