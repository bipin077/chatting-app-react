import React from 'react';
import styled from 'styled-components';
import People from './People';
import { useGetAllUsersQuery } from '../Store/Services/UserServices';

const Sidebar = () => {

  const senderData = localStorage.getItem("sender");
  const sender = JSON.parse(senderData);

    const {data=[], isFetching} = useGetAllUsersQuery(sender._id);
    console.log(data);



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
      margin-top : 10px;
      padding : 10px;
    }

    .peoples h3{
      margin-top : 15px;
      background : ${({theme})=>theme.colors.light};
      text-align : center;
      padding : 5px;
      font-size : 15px;
    }
    
    `

  return (
    <Wrapper>
        <div className='side-bar'>
            <div className='logo'>
              <img src="/images/logo.png" alt="sadfsaf"/>
            </div>
            <div className='peoples'>
              <People key={sender._id} name={sender.name} phone={sender.phone} id={sender._id} />

                <h3>All Users </h3>
                { isFetching ? "Loading" : data.users.map((user, key)=>
                    <People key={key} name={user.name} phone={user.phone} id={user._id} />
                )}            
            </div>
        </div>
    </Wrapper>
  )
}

export default Sidebar
