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
}

.container .right-section
{
  width : 75%;
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
  width : 400px;
  margin-left : 310px;
  text-align : center;
}

.container .right-section ul li
{
  font-size : 24px;
  padding-top:10px;
  list-style: square inside;
  tex-align : left;
  float : left;
 
}


`

export default Dashboard;

