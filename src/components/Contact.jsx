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
  border-radius: 50%;
`;
const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Contact extends Component {
  render() {
    const {
      contact: { id, first_name, last_name, email, gender, avatar },
    } = this.props;
    console.log(first_name);
    return (
      <StyledContainer>
        <StyledImage src={avatar} />
      </StyledContainer>
    );
  }
}

export default Contact;
