import React from 'react';
import { Wrapper } from './styles'
import PropTypes from 'prop-types';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
AuthLayout.protoTypes = {
  children: PropTypes.element.isRequired,
}