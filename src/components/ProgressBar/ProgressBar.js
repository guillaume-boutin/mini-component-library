/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BaseProgressBar = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
  
  height:         ${ ({ size }) => ({ small: 8, medium: 14, large: 24 }[size]) }px;
  border-radius:  ${ ({ size }) => ({ small: 4, medium: 4, large: 8 }[size]) }px;
  padding:        ${ ({ size }) => ({ small: 0, medium: 0, large: 4 }[size]) }px;
`;

const LevelWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  border-radius: ${ ({ size }) => ({ small: 0, medium: 0, large: 4 }[size]) }px;
`;

const Level = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value}%;
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  return <BaseProgressBar size={size} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <LevelWrapper size={size}>
      <Level value={value} />

      <VisuallyHidden>{value}%</VisuallyHidden>
    </LevelWrapper>
  </BaseProgressBar>
};

export default ProgressBar;
