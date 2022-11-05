import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {BsDot} from "react-icons/bs";

const People = ({name, phone, id, avatar, isOnline}) => {

    const senderData = localStorage.getItem("sender");
    const sender = JSON.parse(senderData);

  return (
    <Wrapper>
    { 
        sender._id == id ? 
        <Link to="/" >
            <div className='people'>   
                <div className='image-section'>
                    {
                        sender.avatar ? <img src={sender.avatar} /> : <img src="/avtar/guest.png" />
                    }
                    
                </div>
                <div className='details-section'>
                    <h2>{name}</h2>
                    <p>{phone}</p>
                </div>
            </div>
        </Link> 
        : 
        <Link to={`/chats/${id}`} >
            <div className='people'>   
                <div className='image-section'>
                {
                    avatar ? <img src={avatar} /> : <img src="/avtar/guest.png" />
                }
                </div>
                <div className='details-section'>
                    <h2>{name}</h2>
                    <p>{phone}</p>
                </div>
                <div className='icons'>
                    <BsDot className={ isOnline ? 'online' : 'offline' } />
                </div>
            </div>
        </Link> 
    }
        
    </Wrapper>
  )
}

const Wrapper = styled.div`

a{
    text-decoration : none;
}

.people{
    background : ${({theme})=>theme.colors.light};
    border-radius : 5px;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    padding : 0px 10px;
    margin-top: 10px;
    position : relative;
    
}


.people .image-section{
    width : 50px;
    height : 50px;
}

.people .image-section img{
    width:100%;
    padding : 4px;
    border : 1px solid ${({theme})=>theme.colors.light};
    border-radius : 50%;
}

.people .details-section{
    display : flex;
    flex-direction : column;
    padding-left : 30px;
}

.people .details-section h2{ 
    color : ${({theme})=>theme.colors.green};
    font-size : 18px;
}

.people .details-section p{ 
    color : ${({theme})=>theme.colors.green};
    font-size : 15px;
    font-weight : 700;
}

.people .icons{
    position : absolute;
    top : 20%;
    right : 10px;
    font-size : 30px;
}

.people .icons .online{
    color : green;
}

.people .icons .offline{
    color : red;
}

`

export default People;
