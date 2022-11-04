import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {
  const Component = styled.section`
  

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
    text-align:center;
  }

  .container .right-section img
  {
    width : 200px;
    padding-top : 150px;
   
  }

  
  .container .right-section h2
  {
    font-size : 50px;
    margin-top:50px;
   
  }
  .container .right-section p
  {
    font-size : 20px;
    margin-top:10px;
   
  }
  
  
  `
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
        </div>
      </div>
    </Component>
  )
}

export default Dashboard;

