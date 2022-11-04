import React from 'react';
import styled from 'styled-components';
import {BsSearch} from "react-icons/bs";
import { useParams } from 'react-router-dom';
import {useGetSingleUserQuery} from "../Store/Services/UserServices";


const Header = () => {

    let {id} = useParams();

    const {data=[], isFetching} = useGetSingleUserQuery(id);
  
    const Wrapper = styled.div`

    .header-section{
        display :flex;
        justify-content : space-between;
        align-items : center;
        background : ${({theme})=>theme.colors.lightGreen};
        width : 100%;
        height : 7vh;
        padding-left : 30px;
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
        padding-left : 20px;
        color : ${({theme})=>theme.colors.light};
      }

      .header-section .name-section
      {
          font-size : 18px;
          color : ${({theme})=>theme.colors.light};
          margin-right : 30px;
      }

    `
  return (
    <Wrapper>
      <div className='header-section'>
        <div className='image-section'>
          <img src="https://www.guamhomesforsaleandrent.com/sites/default/files/team10.jpg" />
          <h2> {isFetching ? "Loading.." : data.user.name} </h2>
        </div>

        <div className='name-section'>
            <BsSearch />
        </div>
      </div>


    </Wrapper>
  )
}

export default Header
