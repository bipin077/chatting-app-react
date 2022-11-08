import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import MessageBox from "../Components/MessageBox";
import Sidebar from "../Components/Sidebar";

const Wrapper = ({ children }) => {

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

const Container = styled.section`

.container
{
    display: flex;
    flex-direction : row;
}

.container .left-section
{
  width : 24%;
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

@media only screen and (max-width : ${({ theme }) => theme.media.mobile})
{
    .container .left-section
    {
      width : 25%;
      height : 100vh;
    }

    .container .right-section
    {
      width : 75%;
      height : 100vh;
    }
}

@media only screen and (max-width : ${({ theme }) => theme.media.tablet})
{
  .container .left-section
  {
    width : 25%;
    height : 100vh;
  }

  .container .right-section
  {
    width : 75%;
    height : 100vh;
  }
}
  
@media only screen and (max-width : ${({ theme }) => theme.media.laptop})
{
  .container .left-section
  {
    width : 25%;
    height : 100vh;
  }

  .container .right-section
  {
    width : 75%;
    height : 100vh;
  }
}
   
@media only screen and (max-width : ${({ theme }) => theme.media.desktop})
{
  .container .left-section
  {
    width : 25%;
    height : 100vh;
  }

  .container .right-section
  {
    width : 75%;
    height : 100vh;
  }
}

@media only screen and (max-width : ${({ theme }) => theme.media.exlg})
{
    
}
 
`;

export default Wrapper;
