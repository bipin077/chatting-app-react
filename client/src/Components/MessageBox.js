import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {AiOutlineSend} from "react-icons/ai";
import { useParams } from 'react-router-dom';
import {useGetSingleUserQuery} from "../Store/Services/UserServices";

const MessageBox = () => {

  let {id} = useParams();

    // getting user details 
    const {data=[], isFetching} = useGetSingleUserQuery(id);

  // getting sender details 
  const senderData = localStorage.getItem("sender");
  const sender = JSON.parse(senderData);

  // storing message in state
  const [message, setMessage] = useState('');

  const sendMessage = (e) =>
  {
      e.preventDefault();
  }

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.lightGreen};
    width: 100%;
    height: 14vh;

    .message {
      width: 100%;
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .message input{
        font-size : 20px;
        width : 80%;
        padding : 10px;
        border-radius : 10px;
        padding-right : 50px;
    }

    .message span{
      margin-left : -40px;
      font-size : 20px;
      cursor : pointer;
  }
  `;
  return (
    <Wrapper>
      <div className="message">
        <input type="text" placeholder="Enter Message" value={message} onChange={(e)=> setMessage(e.target.value)} />
        <span><AiOutlineSend onClick={sendMessage} /></span>
      </div>
    </Wrapper>
  );
};

export default MessageBox;
