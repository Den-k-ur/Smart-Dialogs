import React, { FC } from 'react';

import { Typography } from 'base/Typography';

import { Indicator, Input, Label, StyledLabel } from './styles';

type CheckBoxTypes = {
  label: string;
  onChange?: () => void;
  id: string;
  disabled?: boolean;
  value?: string;
  name: string;
  checked: boolean;
};

export const Checkbox: FC<CheckBoxTypes> = ({
  label,
  onChange,
  id,
  disabled,
  value,
  name,
  checked,
}) => {
  return (
    <Label htmlFor={id} disabled={disabled || false}>
      <StyledLabel variant="style7">{label}</StyledLabel>
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator checked={checked} />
    </Label>
  );
};
