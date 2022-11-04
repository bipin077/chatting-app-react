import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Avtar = ({image}) => {
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
        margin-top: 10px;
        
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
    
    `
  return (
    <Wrapper>
            <div className='people'>   
                <div className='image-section'>
                    <img src={image} />
                </div>
            </div>
        
    </Wrapper>
  )
}

export default Avtar;
