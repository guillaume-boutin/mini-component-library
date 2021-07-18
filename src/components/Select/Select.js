import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  font-family: "Roboto";
  font-weight: 400;
  padding-block: 12px;
  padding-left: 16px;
  padding-right: 52px;
  border-radius: 8px;
  
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -moz-mac-focusring;
    outline: 5px auto -webkit-focus-ring-color;
  }
  
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  margin-block: auto;
  pointer-events: none;
`;

const ChevronDown = ({ id, strokeWidth, size }) => {
  return (
    <IconWrapper size={size}>
      <Icon id={id} strokeWidth={strokeWidth} size={size} />
    </IconWrapper>
  )
}

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        { children }
      </NativeSelect>

      <PresentationalSelect>
        { displayedValue }

        <ChevronDown id="chevron-down" size={24} strokeWidth={1} />
      </PresentationalSelect>
    </Wrapper>
  );
};

export default Select;
