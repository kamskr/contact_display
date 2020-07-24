import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.creamy};
  border-top: 2px solid ${({ theme }) => theme.creamyDark};
`;
const StyledImage = styled.img`
  margin-left: 10px;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
const StyledInitialsAvatar = styled.span`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 50%;
  text-align: center;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.creamyDark};
`;
const StyledInitials = styled.p`
  text-transform: uppercase;
  color: ${({ theme }) => theme.creamyDark};
  font-weight: bold;
`;
const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 2px 10px;
`;
const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 2px 10px;
`;

class Contact extends Component {
  render() {
    const {
      contact: { first_name, last_name, email, avatar },
    } = this.props;
    return (
      <StyledContainer>
        {avatar ? (
          <StyledImage src={avatar} />
        ) : (
          <StyledInitialsAvatar>
            <StyledInitials>
              {first_name.charAt(0)}
              {last_name.charAt(0)}
            </StyledInitials>
          </StyledInitialsAvatar>
        )}

        <StyledInnerWrapper>
          <StyledHeader>
            {first_name} {last_name}
          </StyledHeader>
          <StyledParagraph>{email}</StyledParagraph>
        </StyledInnerWrapper>
      </StyledContainer>
    );
  }
}

export default Contact;
