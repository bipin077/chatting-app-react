import React from 'react';
import styled from 'styled-components';
import People from './People';
import { useGetAllUsersQuery, useSetUserOfflineMutation } from '../Store/Services/UserServices';
import {AiOutlineSetting, AiOutlineUser, AiOutlineLogout} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import {logout} from "../Store/Reducers/AuthReducer";
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const senderData = localStorage.getItem("sender");
  const sender = JSON.parse(senderData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

    const {data=[], isFetching} = useGetAllUsersQuery(sender._id);
    const [userOffline] = useSetUserOfflineMutation();

    const logoutUser = () =>
    {
      const status = window.confirm("Are you really want to log out.")
      if(status)
      {
        // getting sender id from local storage
        const senderData = localStorage.getItem("sender");
        const sender= JSON.parse(senderData);

        // set user to offline
        userOffline(sender._id);

        // removing sender from localstorage and log out from system
        localStorage.removeItem("admin-token");
        localStorage.removeItem("sender");
        dispatch(logout());
        navigate("/login");
      }
    }





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
                    <People key={key} isOnline={user.isOnline} name={user.name} phone={user.phone} avatar={user.avatar} id={user._id} />
                )}            
            </div>
            <div className='bottom-bar'>
                <div className='icons'>
                      <Link to="/settings"><AiOutlineSetting  className="bottom-icons"/></Link>
                      <Link to="/profile"><AiOutlineUser className="bottom-icons" /></Link>
                      <AiOutlineLogout onClick={logoutUser} className="bottom-icons" />
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    
.side-bar{
    height : 100vh;
    background : ${({theme})=> theme.colors.green};
    position :relative;
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
  height:80vh;
  overflow-y : auto;
  margin-bottom : 200px;
}

.peoples h3{
  margin-top : 15px;
  background : ${({theme})=>theme.colors.light};
  text-align : center;
  padding : 5px;
  font-size : 15px;
}

.side-bar .bottom-bar{
    height : 7vh;
    background : ${({theme})=>theme.colors.sidebarBottom};
    position : absolute;
    bottom : 0px;
    width : 100%;
   display : flex;
   align-items : center;
   justify-content : center;
}

.side-bar .bottom-bar .icons{
  margin-right : 20px;
}

.side-bar .bottom-bar .icons .bottom-icons{
    font-size : 18px;
    margin-left : 40px;
    cursor : pointer;
    color : ${({theme})=>theme.colors.light};
    height : 40px;
    width : 40px;
    padding : 10px;
}

.side-bar .bottom-bar .icons .bottom-icons:hover{
  background : ${({theme})=>theme.colors.light};
  color : ${({theme})=>theme.colors.sidebarBottom};
  padding : 10px;
  font-size : 24px;
}




`

export default Sidebar
