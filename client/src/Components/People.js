import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const People = ({name, phone, id}) => {
    const senderData = localStorage.getItem("sender");
    const sender = JSON.parse(senderData);
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
        margin-top : 10px;
        
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
    
    `
  return (
    <Wrapper>
    { 
        sender._id == id ? 
        <Link to="/" >
            <div className='people'>   
                <div className='image-section'>
                <img src="https://www.guamhomesforsaleandrent.com/sites/default/files/team10.jpg" />
                </div>
                <div className='details-section'>
                    <h2>{name}</h2>
                    <p>{phone}</p>
                </div>
            </div>
        </Link> 
        : 
        <Link to={`/chats/${id}`} >s
            <div className='people'>   
                <div className='image-section'>
                <img src="https://www.guamhomesforsaleandrent.com/sites/default/files/team10.jpg" />
                </div>
                <div className='details-section'>
                    <h2>{name}</h2>
                    <p>{phone}</p>
                </div>
            </div>
        </Link> 
    }
        
    </Wrapper>
  )
}

export default People;
