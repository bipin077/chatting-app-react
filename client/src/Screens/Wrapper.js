import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import MessageBox from "../Components/MessageBox";
import Sidebar from "../Components/Sidebar";

const Wrapper = ({ children }) => {
  const Container = styled.section`

  .container
  {
      display: flex;
      flex-direction : row;
  }

  .container .left-section
  {
    width : 25%;
  }

  .container .right-section
  {
    width : 75%;
  }

  .container .message-box{
    display :flex;
    justify-content : space-between;
    background : ${({theme})=>theme.colors.light};
    width : 100%;
    height : 79vh;
  }
   
  `;
  return (
    <Container>
      <div className="container">
        <div className="left-section">
          <Sidebar />
        </div>
        <div className="right-section">
          <Header />
          <div className="message-box">
             { children }
          </div>
          <MessageBox />
        </div>
      </div>
    </Container>
  );
};

export default Wrapper;
