import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Screens/Wrapper';
import { useParams } from 'react-router-dom';
import { useGetUserChatQuery } from "../Store/Services/ChatServices";
import { BsThreeDotsVertical, BsFillReplyAllFill } from "react-icons/bs";
import { AiFillDelete, AiOutlineCopy } from "react-icons/ai";


const Chats = () => {

  let { id } = useParams();

  // getting sender details 
  const senderData = localStorage.getItem("sender");
  const sender = JSON.parse(senderData);
  // getting user details 

  const { data = [], isFetching } = useGetUserChatQuery({ sender: sender._id, receiver: id });
  // console.log(data);
  

  return (
    <Wrapper>
      <Container>
        <div className='chats-section'>
          {isFetching ? "Loading" : data.chats.map((msg, key) =>
          (
            msg.send_by != id ?
              <div className='send-messages' key={key}>
                <h4>
                  {msg.message}
                  <div className='dropdown'><BsThreeDotsVertical className='three-dots' />
                    <div className="dropdown-content">
                        <p><AiFillDelete /> delete</p>
                        <p><BsFillReplyAllFill /> reply</p>
                        <p><AiOutlineCopy /> Copy</p>
                    </div>
                  </div>
                </h4>
              </div> :
              <div className='reveived-messages' key={key}>
                <h4>{msg.message}
                  <div className='dropdown'><BsThreeDotsVertical className='three-dots' />
                    <div className="dropdown-content">
                      <p><AiFillDelete /> delete</p>
                      <p><BsFillReplyAllFill /> reply</p>
                      <p><AiOutlineCopy /> Copy</p>
                    </div>
                  </div>
                </h4>
              </div>
          )
          )}
        </div>
      </Container>
    </Wrapper>
  )
}


const Container = styled.section`
  
width : 100%;

  .chats-section{
    padding : 50px;
    overflow-y: auto;
    display: flex;
    flex-direction:column;
    height : 75vh;
    
  }

  .chats-section > div {
    box-shadow: 0px 4px 4px 0px #7474742e;
}

  .chats-section .reveived-messages{
      border : 1px solid ${({ theme }) => theme.colors.green};
      padding : 5px 10px;
      border-radius : 50px;
      margin-top : 5px;
      background : #5a2d68;
      width: fit-content;
      float : left;
  }

  .chats-section .reveived-messages h4{
    font-size: 16px;
    color: #f3f3f3;
    line-height: 16px;
    padding-bottom: 5px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .chats-section .send-messages{
    border : 1px solid ${({ theme }) => theme.colors.green};
    padding : 5px 10px;
    border-radius : 50px;
    margin-top : 5px;
    background : #d5d5d5;
    width: fit-content;
    float : right;
    align-self: end;
}

.chats-section .send-messages h4{
  color : #323232;
  padding-bottom: 5px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
}

.chats-section .three-dots{
margin-top : 5px;
cursor : pointer;
margin-left : 10px;
}

.chats-section .three-dots:hover{

}

.dropdown {
position: relative;
display: inline-block;
}

.dropdown-content {
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 100px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
padding: 5px 16px;
z-index: 1;
left : -50px;
top : 30px;
}

.dropdown:hover .dropdown-content {
display: block;
}

p{
color : #000;
}
`

export default Chats;
