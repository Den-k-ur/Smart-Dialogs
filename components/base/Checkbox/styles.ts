import styled, { keyframes } from 'styled-components';

import { Typography } from 'base/Typography';

import { Theme } from 'theme/theme';

type LabelTypes = {
  disabled: boolean;
};

type CheckBoxTypes = {
  checked: boolean;
};

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label<LabelTypes>`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 2px 2px;
`;
export const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

export const Indicator = styled.div<CheckBoxTypes>`
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.checked ? Theme.colors.darkBlue : Theme.colors.white)};
  position: absolute;
  top: 0em;
  left: -2px;
  border: 1px solid ${Theme.colors.gray};
  border-radius: 4px;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  &::after {
    content: '';
    position: absolute;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 8px;
    width: 35%;
    height: 70%;
    border: solid ${Theme.colors.white};
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

export const StyledLabel = styled(Typography)`
  margin-left: 30px;
`;
