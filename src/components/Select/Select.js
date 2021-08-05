/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <DefaultSelect value={value} onChange={onChange}>
        {children}
      </DefaultSelect>
      <Presentation>
        {displayedValue}
        <IconWrapper style={{ '--size': '24px' }}>
          <Icon id='chevron-down' strokeWidth={1} size={24} />
        </IconWrapper>
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const DefaultSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Presentation = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  border-radius: 8px;

  ${DefaultSelect}:focus + & {
    outline: 5px auto ${COLORS.primary};
  }

  ${DefaultSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
