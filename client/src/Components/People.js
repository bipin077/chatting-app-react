import React from 'react';
import styled from 'styled-components';

const People = () => {

    const Wrapper = styled.div`
    
    background : ${({theme})=>theme.colors.light};
    border-radius : 5px;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    padding : 0px 10px;
    margin-top : 10px;

    .image-section{
        width : 50px;
        height : 50px;
    }

    .image-section img{
        width:100%;
        padding : 4px;
        border : 1px solid ${({theme})=>theme.colors.light};
        border-radius : 50%;
    }

    .details-section{
        display : flex;
        flex-direction : column;
        padding-left : 30px;
    }
    
    `
  return (
    <Wrapper>
        <div className='image-section'>
           <img src="https://www.guamhomesforsaleandrent.com/sites/default/files/team10.jpg" />
        </div>
        <div className='details-section'>
            <h2>Peole Name Here....</h2>
            <p>His decription here...</p>
        </div>
    </Wrapper>
  )
}

export default People;
