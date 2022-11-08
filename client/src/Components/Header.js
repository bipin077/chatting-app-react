import React from 'react';
import styled from 'styled-components';
import {BsSearch} from "react-icons/bs";
import { useParams } from 'react-router-dom';
import {useGetSingleUserQuery} from "../Store/Services/UserServices";


const Header = () => {

    let {id} = useParams();

    const {data=[], isFetching} = useGetSingleUserQuery(id);
  

  return (
    <Wrapper>
      <div className='header-section'>
        <div className='image-section'>
          {
              ! isFetching ? data.user.avatar ? <img src={data.user.avatar} /> : <img src="/avtar/guest.png" /> : 'Loading...'
          }
          <h2> {isFetching ? "Loading.." : data.user.name} </h2>
        </div>

        <div className='name-section'>
            <BsSearch />
        </div>
      </div>


    </Wrapper>
  )
}

const Wrapper = styled.div`

.header-section{
    display :flex;
    justify-content : space-between;
    align-items : center;
    background : #41124b;
    width : 100%;
    height : 10vh;
    padding-left : 30px;
    border-bottom-left-radius: 40px;
    z-index : 9999;
}
    

.header-section .image-section{
      width : 100%;
      height : 60px;
      display:flex;
      align-items :center;
      jsutify-content:center;
  }

  .header-section .image-section img{
      width:40px;
      padding : 4px;
      border : 1px solid ${({theme})=>theme.colors.light};
      border-radius : 50%;
  }
  .header-section .image-section h2{
    padding-left: 20px;
    color: #f3f3f3;
    font-size: 19px;
    font-family: monospace;
  }

  .header-section .name-section
  {
      font-size : 18px;
      color : ${({theme})=>theme.colors.light};
      margin-right : 30px;
  }

@media only screen and (max-width : ${({ theme }) => theme.media.mobile})
{
      .header-section {
          height: 45px;
          padding-left: 30px;
      }
}

@media only screen and (min-width : ${({ theme }) => theme.media.mobile}) and (max-width : ${({ theme }) => theme.media.tablet})
{
    .header-section {
        height: 45px;
        padding-left: 30px;
    }
}
  
@media only screen and (min-width : ${({ theme }) => theme.media.tablet}) and (max-width : ${({ theme }) => theme.media.laptop})
{
    .header-section {
        height: 45px;
        padding-left: 30px;
    }
}
   
@media only screen and (min-width : ${({ theme }) => theme.media.laptop}) and (max-width : ${({ theme }) => theme.media.desktop})
{
  .header-section {
    height: 45px;
    padding-left: 30px;
}
}

@media only screen and (min-width : ${({ theme }) => theme.media.desktop}) and (max-width : ${({ theme }) => theme.media.exlg})
{
  .header-section {
    height: 45px;
    padding-left: 30px;
}
}

`

export default Header
