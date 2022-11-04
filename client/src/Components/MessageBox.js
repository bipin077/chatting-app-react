import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {AiOutlineSend} from "react-icons/ai";
import { useParams } from 'react-router-dom';
import {useGetSingleUserQuery} from "../Store/Services/UserServices";
import {useSendNewMessageMutation} from "../Store/Services/ChatServices";

const MessageBox = () => {

    let {id} = useParams();

    // getting sender details 
    const senderData = localStorage.getItem("sender");
    const sender = JSON.parse(senderData);



    // sending message
    const [sendNewMessage, response, isLoading] = useSendNewMessageMutation();
    // console.log(response);

    // getting user details 
    const {data=[], isFetching} = useGetSingleUserQuery(id);



  // storing message in state
  const [message, setMessage] = useState('');

  const sendMessage = (e) =>
  {
      e.preventDefault();
      sendNewMessage({sender : sender._id, receiver : id, message : message, replied_on : '', send_by : sender._id});
  }

 
  return (
    <Wrapper>
      <div className="message">
        <input type="text" placeholder="Enter Message" value={message} onChange={(e)=> setMessage(e.target.value)} />
        <span><AiOutlineSend onClick={sendMessage} /></span>
      </div>
    </Wrapper>
  );
};

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

export default MessageBox;
