import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from '../Screens/Wrapper';
import { useParams } from 'react-router-dom';
import {useGetSingleUserQuery} from "../Store/Services/UserServices";
import {useGetUserChatQuery} from "../Store/Services/ChatServices";


const Chats = () => {

    let {id} = useParams();

    // getting sender details 
    const senderData = localStorage.getItem("sender");
    const sender = JSON.parse(senderData);
    // getting user details 
    //const {data=[], isFetching} = useGetSingleUserQuery(id);

    const {data= [], isFetching} = useGetUserChatQuery({sender : sender._id, receiver : id});
    //console.log(data);

  const Container = styled.section`
  
  width : 100%;

    .chats-section{
      padding : 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      height : 75vh;
      
    }

    .chats-section .reveived-messages{
        border : 1px solid ${({theme})=>theme.colors.green};
        padding : 5px 10px;
        border-radius : 50px;
        margin-top : 5px;
        background : ${({theme})=>theme.colors.chatReceiver};
        width: fit-content;
        float : left;
    }

    .chats-section .reveived-messages h4{
        font-size : 18px;
        color : ${({theme})=>theme.colors.light};
    }

    .chats-section .send-messages{
      border : 1px solid ${({theme})=>theme.colors.green};
      padding : 5px 10px;
      border-radius : 50px;
      margin-top : 5px;
      background : ${({theme})=>theme.colors.light};
      width: fit-content;
      float : right;
      align-self: end;
  }

  .chats-section .send-messages h4{
    font-size : 18px;
    color : ${({theme})=>theme.colors.green};
}
  
  
  `
  return (
    <Wrapper>
        <Container>
            <div className='chats-section'>
                { isFetching ? "Loading" : data.chats.map((msg)=>
                    (
                        msg.send_by != id ? <div className='send-messages'><h4>{msg.message}</h4></div> :<div className='reveived-messages'><h4>{msg.message}</h4></div>
                    )               
                )}
            </div>
        </Container>
    </Wrapper>
  )
}


export default Chats;
