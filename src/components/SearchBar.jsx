import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  top: 60px;
  height: 50px;
  background-color: white;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-family: FontAwesome, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: inherit;
  padding: 10px;
  ::placeholder {
    opacity: 0.4;
  }
`;

const SearchBar = () => {
  return (
    <StyledContainer>
      <StyledInput type="text" placeholder="&#xF002;" />
    </StyledContainer>
  );
};
export default SearchBar;
