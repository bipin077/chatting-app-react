import React, {useState} from 'react';
import styled from "styled-components";
import {AiOutlineSend} from "react-icons/ai";
import { useParams } from 'react-router-dom';
import {useSendNewMessageMutation} from "../Store/Services/ChatServices";
import {BsEmojiSmile} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";

const MessageBox = () => {

    let {id} = useParams();

    // getting sender details 
    const senderData = localStorage.getItem("sender");
    const sender = JSON.parse(senderData);



    // sending message
    const [sendNewMessage, response, isLoading] = useSendNewMessageMutation();
    // console.log(response);



  // storing message in state
  const [message, setMessage] = useState('');
  const [emoji , setEmoji] = useState(false);

  const sendMessage = (e) =>
  {
      e.preventDefault();
      setMessage("");
      sendNewMessage({sender : sender._id, receiver : id, message : message, replied_on : '', send_by : sender._id});
  }

 
  return (
    <Wrapper>
      <div className="message">
        <BsEmojiSmile className='emojy' onClick={ () => setEmoji(true)} />
        <input type="text" placeholder="Enter Message" value={message} onChange={(e)=> setMessage(e.target.value)} />
        <span><AiOutlineSend onClick={sendMessage} /></span>
      </div>
      <div className={ emoji ? 'emojies' : 'no-emoji'}>
          <div className='close-emoji'>
              <AiOutlineClose onClick={()=>setEmoji(false)} />
          </div>
          <div className='emoji-container'> 
              <span className='emoji-span' onClick={(e)=> setMessage(`${message} <span>&#128512;</span>`)}>&#128512;</span>
              <span className='emoji-span' onClick={(e)=> setMessage(`${message} &#128513;`)}>&#128513;</span>
              <span className='emoji-span'>&#128514;</span>
              <span className='emoji-span'>&#128515;</span>


              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>

              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128516;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
              <span className='emoji-span'>&#128513;</span>
          </div>
          
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

.emojies{
  position : absolute;
  bottom : 150px;
  left : 40%;
  height : 150px;
  width : 500px;
  z-index : 99999;
  box-shadow : 5px 5px 5px ${({theme})=>theme.colors.lightGreen} , -5px -5px 5px ${({theme})=>theme.colors.lightGreen};
}

.emojy {
  margin-right : 20px;
  font-size : 30px;
  color : yellow;
  cursor : pointer;
}

.emojies .emoji-container{
  padding : 10px;
  display : flex;
  align-items : center;
  flex-wrap : wrap;
  overflow : auto;
  height : 150px;
  background : #f3f3f3;
}

.emojies .emoji-container .emoji-span
{
  padding : 5px; 
  font-size : 18px;
  cursor : pointer;
}

.emojies  .close-emoji
{
  position : absolute;
  top : -20px;
  right : -20px;
  font-size : 18px;
  background : ${({theme})=>theme.colors.green};
  color : #fff;
  padding : 7px;
  text-align : center;
  border-radius : 50px;
}

.no-emoji{
  display : none;
}


@media only screen and (max-width : ${({ theme }) => theme.media.mobile})
{

    .message {
      padding: 20px;
      margin: 5px 10px;
    }
    .emojy {
        margin-right: 20px;
        font-size: 24px;
    }

    .message input {
      font-size: 12px;
      width: 90%;
    }

    .emojies {
      bottom: 67px;
      left: 31%;
      width: 244px;
      height: 120px;
    }

    .emojies .close-emoji {
      top: -16px;
      right: -18px;
      font-size: 10px;
      padding: 9px;
    }

    .emojies .emoji-container {
        padding: 12px;
        height: 110px;
    }
}

@media only screen and (min-width : ${({ theme }) => theme.media.mobile}) and (max-width : ${({ theme }) => theme.media.tablet})
{
  .message {
    padding: 20px;
    margin: 5px 10px;
  }
  .emojy {
      margin-right: 20px;
      font-size: 24px;
  }

  .message input {
    font-size: 12px;
    width: 90%;
  }

  .emojies {
    bottom: 67px;
    left: 38%;
    width: 305px;
    height: 120px;
  }

  .emojies .close-emoji {
    top: -16px;
    right: -18px;
    font-size: 10px;
    padding: 9px;
  }

  .emojies .emoji-container {
      padding: 12px;
      height: 110px;
  }
}
  
@media only screen and (min-width : ${({ theme }) => theme.media.tablet}) and (max-width : ${({ theme }) => theme.media.laptop})
{
  .message {
    padding: 20px;
    margin: 5px 10px;
  }
  .emojy {
      margin-right: 20px;
      font-size: 24px;
  }

  .message input {
    font-size: 12px;
    width: 90%;
  }

  .emojies {
    bottom: 67px;
    left: 37%;
    width: 464px;
    height: 120px;
  }

  .emojies .close-emoji {
    top: -16px;
    right: -18px;
    font-size: 10px;
    padding: 9px;
  }

  .emojies .emoji-container {
      padding: 12px;
      height: 110px;
  }
}
   
@media only screen and (min-width : ${({ theme }) => theme.media.laptop}) and (max-width : ${({ theme }) => theme.media.desktop})
{
  .message {
    padding: 20px;
    margin: 5px 10px;
  }
  .emojy {
      margin-right: 20px;
      font-size: 24px;
  }

  .message input {
    font-size: 12px;
    width: 90%;
  }

  .emojies {
    bottom: 80px;
    left: 37%;
    width: 464px;
    height: 120px;
  }

  .emojies .close-emoji {
    top: -16px;
    right: -18px;
    font-size: 10px;
    padding: 9px;
  }

  .emojies .emoji-container {
      padding: 12px;
      height: 110px;
  }
}

@media only screen and (min-width : ${({ theme }) => theme.media.desktop}) and (max-width : ${({ theme }) => theme.media.exlg})
{
    
}


`;



export default MessageBox;
