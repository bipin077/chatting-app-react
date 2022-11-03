import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Screens/Wrapper';

const Chats = () => {
  const Container = styled.section`
  
  width : 100%;

    .chats-section{
      padding : 20px;
      overflow-y: scroll;
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
                <div className='reveived-messages'>
                    <h4>Hii .... ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Are you okk today ??</h4>
                </div>

                <div className='reveived-messages'>
                    <h4>Lorem Ipsum Is a dummy text used by designers ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Hello ! How are you??</h4>
                </div>
                <div className='reveived-messages'>
                    <h4>Hii .... ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Are you okk today ??</h4>
                </div>

                <div className='reveived-messages'>
                    <h4>Lorem Ipsum Is a dummy text used by designers ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Hello ! How are you??</h4>
                </div>
                <div className='reveived-messages'>
                    <h4>Hii .... ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Are you okk today ??</h4>
                </div>

                <div className='reveived-messages'>
                    <h4>Lorem Ipsum Is a dummy text used by designers ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Hello ! How are you??</h4>
                </div>
                <div className='reveived-messages'>
                    <h4>Hii .... ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Are you okk today ??</h4>
                </div>

                <div className='reveived-messages'>
                    <h4>Lorem Ipsum Is a dummy text used by designers ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Hello ! How are you??</h4>
                </div>
                <div className='reveived-messages'>
                    <h4>Hii .... ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Are you okk today ??</h4>
                </div>

                <div className='reveived-messages'>
                    <h4>Lorem Ipsum Is a dummy text used by designers ??</h4>
                </div>

                <div className='send-messages'>
                    <h4>Hello ! How are you??</h4>
                </div>
            </div>
        </Container>
    </Wrapper>
  )
}


export default Chats;
