import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {

  return (
    <Component>
      <div className="container">
        <div className="left-section">
          <Sidebar />
        </div>
        <div className="right-section">
          <img src="./images/chats.png" />
          <h2> Let's Chat </h2>
          <p> " The only platform for fast and secure chatting. "</p>

          <span>Reasons why we are <b> No 1 </b> at market?</span>
          <ul>
            <li> We provide end to end authentication.</li>
            <li> User can chat with random person.</li>
            <li> All users data is secured in our server.</li>
            <li> And many more.</li>
          </ul>
        </div>
      </div>
    </Component>
  )
}

const Component = styled.section`
  

.container
{
    display: flex;
    flex-direction : row;
}

.container .left-section
{
  width : 25%;
  height : 100vh;
}

.container .right-section
{
  width : 75%;
  height : 100vh;
  text-align:center;
}

.container .right-section img
{
  width : 150px;
  padding-top : 50px;
 
}


.container .right-section h2
{
  font-size : 50px;
  margin-top:10px;
 
}
.container .right-section p
{
  font-size : 20px;
  margin-top:10px;
  padding-bottom : 20px;
 
}

.container .right-section span
{
  font-size : 40px;
  padding-top:10px;
  border-top : 1px solid #000;
  line-height : 2;
 
}

.container .right-section ul
{
  margin-left: 0px;
  text-align: center;
  padding-left: 45px;
}

.container .right-section ul li
{
  font-size : 24px;
  padding-top:10px;
  list-style: square inside;
  tex-align : left;
 
}

@media only screen and (max-width : ${({ theme }) => theme.media.mobile})
{
    .container {
      width: 100%;
      height : 100vh;
      display : flex;
      justify-content : space-between;
      flex-wrap : wrap;
    }

    .container .left-section {
      width : 30%;
    }

    .container .right-section {
        width : 70%;
    }

    .container .right-section img {
        width: 70px;
    }

    .container .right-section h2 {
      font-size: 30px;
    }

    .container .right-section p {
      font-size: 16px;
    }

    .container .right-section span {
      font-size: 18px;
    }

    .container .right-section ul {
      font-size : 24px;
      list-style: square inside;
      tex-align : left;
    }

    .container .right-section ul li {
      font-size: 14px;
    }
  
}

@media only screen and (min-width : ${({ theme }) => theme.media.mobile}) and (max-width : ${({ theme }) => theme.media.tablet})
{
    .container {
      width: 100%;
      height : 100vh;
      display : flex;
      justify-content : space-between;
      flex-wrap : wrap;
    }

    .container .left-section {
      width : 30%;
    }

    .container .right-section {
        width : 70%;
    }

    .container .right-section img {
        width: 70px;
    }

    .container .right-section img {
          padding-top: 25px;
      }

      .container .right-section h2 {
        font-size: 30px;
    }

    .container .right-section p {
      font-size: 16px;
    }

    .container .right-section span {
      font-size: 18px;
    }

    .container .right-section ul {
      font-size : 24px;
      list-style: square inside;
      text-align: center;
    }
    .container .right-section ul li {
      font-size: 14px;
    }
  }

  
@media only screen and (min-width : ${({ theme }) => theme.media.tablet}) and (max-width : ${({ theme }) => theme.media.laptop})
{
    .container {
      width: 100%;
      height : 100vh;
      display : flex;
      justify-content : space-between;
      flex-wrap : wrap;
    }

    .container .left-section {
      width : 30%;
    }

    .container .right-section {
        width : 70%;
    }

    .container .right-section img {
        width: 70px;
    }

    .container .right-section img {
          padding-top: 25px;
      }

      .container .right-section h2 {
        font-size: 30px;
    }

    .container .right-section p {
      font-size: 16px;
    }

    .container .right-section span {
      font-size: 18px;
    }

    .container .right-section ul {
      font-size : 24px;
      list-style: square inside;
      text-align: center;
    }
    .container .right-section ul li {
      font-size: 14px;
    }
  }

   
@media only screen and (min-width : ${({ theme }) => theme.media.laptop}) and (max-width : ${({ theme }) => theme.media.desktop})
{
    .container {
      width: 100%;
      height : 100vh;
      display : flex;
      justify-content : space-between;
      flex-wrap : wrap;
    }

    .container .left-section {
      width : 30%;
    }

    .container .right-section {
        width : 70%;
    }

    .container .right-section img {
        width: 70px;
    }

    .container .right-section img {
          padding-top: 25px;
      }

      .container .right-section h2 {
        font-size: 30px;
    }

    .container .right-section p {
      font-size: 16px;
    }

    .container .right-section span {
      font-size: 18px;
    }

    .container .right-section ul {
      font-size : 24px;
      list-style: square inside;
      text-align: center;
    }
    .container .right-section ul li {
      font-size: 14px;
    }
  }

  @media only screen and (min-width : ${({ theme }) => theme.media.desktop}) and (max-width : ${({ theme }) => theme.media.exlg})
{
    .container {
      width: 100%;
      height : 100vh;
      display : flex;
      justify-content : space-between;
      flex-wrap : wrap;
    }

    .container .left-section {
      width : 30%;
    }

    .container .right-section {
        width : 70%;
    }

    .container .right-section img {
        width: 70px;
    }

    .container .right-section img {
          padding-top: 25px;
      }

      .container .right-section h2 {
        font-size: 30px;
    }

    .container .right-section p {
      font-size: 16px;
    }

    .container .right-section span {
      font-size: 18px;
    }

    .container .right-section ul {
      font-size : 24px;
      list-style: square inside;
      text-align: center;
    }
    .container .right-section ul li {
      font-size: 14px;
    }
  }

`

export default Dashboard;

