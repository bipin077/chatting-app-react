import React from 'react'
import styled from 'styled-components'
import People from './People'

const Sidebar = () => {

    const Wrapper = styled.section`
    
    .side-bar{
        height : 100vh;
        background : ${({theme})=> theme.colors.green};
    }

    .side-bar .logo{
      width : 200px;
      margin : 0px 30px;
      padding : 15px;
      text-align : center;
      border-bottom : 1px solid ${({theme})=>theme.colors.light};
    }

    .side-bar .logo img{
      width : 100%;
      
    }

    .peoples {
      margin-top : 30px;
      padding : 10px;
    }
    
    `

  return (
    <Wrapper>
        <div className='side-bar'>
            <div className='logo'>
              <img src="/images/logo.png" alt="sadfsaf"/>
            </div>
            <div className='peoples'>
                <People />
                <People />
                <People />
                <People />
                <People />
            
            </div>
        </div>
    </Wrapper>
  )
}

export default Sidebar
