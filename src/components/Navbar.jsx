import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  z-index: 9999;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.blue},
    ${({ theme }) => theme.green}
  );
  text-align: center;
  vertical-align: middle;
`;

const StyledHeader = styled.h1`
  color: white;
  margin: auto;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Navbar = () => {
  return (
    <StyledContainer>
      <StyledHeader>Contacts</StyledHeader>
    </StyledContainer>
  );
};

export default Navbar;
