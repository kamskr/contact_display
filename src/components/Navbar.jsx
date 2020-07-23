import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: red;
  text-align: center;
  vertical-align: middle;
`;

const StyledHeader = styled.h1`
  color: white;
  margin: auto;
`;

const Navbar = () => {
  return (
    <StyledContainer>
      <StyledHeader>Contacts</StyledHeader>
    </StyledContainer>
  );
};

export default Navbar;
