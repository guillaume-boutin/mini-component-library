import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const strokeWidth = size === "large" ? 2 : 1;
  const iconSize = size === "large" ? 24 : 16;

  return (
    <Wrapper width={width}>
      <VisuallyHidden>{ label }</VisuallyHidden>

      <IconWrapper size={iconSize}>
        <Icon id={icon} size={iconSize} strokeWidth={strokeWidth} />
      </IconWrapper>

      <Input type="text" placeholder={placeholder} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: ${p => p.width}px;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  font-family: "Roboto";
  font-weight: 700;
  font-size: ${ p => ({ large: 18, small: 14 }[p.size]) }px;
  border: none;
  border-bottom-style: solid;
  border-bottom-color: ${COLORS.black};
  border-bottom-width: ${ p => ({ small: 1,  large: 2 }[p.size]) }px;
  color: inherit;
  width: 100%;
  height: ${ p => ({ small: 24, large: 36 }[p.size] / 16) }rem;
  padding-left: ${ p => ({ small: 24, large: 36 }[p.size]) }px;
  outline-offset: 2px;
  
  &::placeholder {
    opacity: 1;
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  
  &:hover {
    &::placeholder {
      color: ${COLORS.black};
    }
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${ p => p.size }px;
  height: ${ p => p.size }px;
  margin-block: auto;
`;

export default IconInput;
