import React from "react";
import styled from "styled-components";

import {AiOutlineSend} from "react-icons/ai";

const MessageBox = () => {
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
        <input type="text" placeholder="Enter Message" />
        <span><AiOutlineSend /></span>
      </div>
    </Wrapper>
  );
};

export default MessageBox;
