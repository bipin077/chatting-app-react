import React, { useEffect } from "react";
import styled from "styled-components";
import People from "./People";
import {
  useGetAllUsersQuery,
  useSetUserOfflineMutation,
} from "../Store/Services/UserServices";
import {
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logout } from "../Store/Reducers/AuthReducer";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const senderData = localStorage.getItem("sender");
  const sender = JSON.parse(senderData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data = [], isFetching } = useGetAllUsersQuery(sender._id);
  const [userOffline] = useSetUserOfflineMutation();

  const logoutUser = () => {
    const status = window.confirm("Are you really want to log out.");
    if (status) {
      // getting sender id from local storage
      const senderData = localStorage.getItem("sender");
      const sender = JSON.parse(senderData);

      // set user to offline
      userOffline(sender._id);

      // removing sender from localstorage and log out from system
      localStorage.removeItem("admin-token");
      localStorage.removeItem("sender");
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <Wrapper>
      <div className="side-bar">
        <div className="logo">
          <img src="/images/logo.png" alt="sadfsaf" />
        </div>
        <div className="peoples">
          <People
            key={sender._id}
            name={sender.name}
            phone={sender.phone}
            id={sender._id}
          />

          <h3>All Users </h3>
          {isFetching
            ? "Loading"
            : data.users.map((user, key) => (
                <People
                  key={key}
                  isOnline={user.isOnline}
                  name={user.name}
                  phone={user.phone}
                  avatar={user.avatar}
                  id={user._id}
                />
              ))}
        </div>
        <div className="bottom-bar">
          <div className="icons">
            <Link to="/contact">
              <BiSupport className="bottom-icons" />
            </Link>
            <Link to="/settings">
              <AiOutlineSetting className="bottom-icons" />
            </Link>
            <Link to="/profile">
              <AiOutlineUser className="bottom-icons" />
            </Link>
            <AiOutlineLogout onClick={logoutUser} className="bottom-icons" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    
.side-bar{
  height : 60vh;
    background : ${({ theme }) => theme.colors.green};
    position :relative;
}

.side-bar .logo {
  width: 100%;
  padding: 10px 70px;
  text-align: center;
  border: 7px solid #f3f3f3;
  box-shadow:inset 0px 0px 9px #818181;
}

.side-bar .logo img{
  width : 100%;
  
}

.peoples {
  padding : 10px;
  height:76vh;
  overflow-y : auto;
}

.peoples h3{
  margin-top : 15px;
  background : ${({ theme }) => theme.colors.light};
  text-align : center;
  padding : 5px;
  font-size : 15px;
}

.sc-dkrFOg.cbYOWx:first-child > a > .people{
background-color:#3f154c;
}

.side-bar .bottom-bar{
    background : ${({ theme }) => theme.colors.sidebarBottom};
    width : 100%;
   display : flex;
   align-items : center;
   justify-content : center;
   margin-top : 5px;
   height : 7vh;
}
.sc-dkrFOg.gJbEzy:first-child > a > .people {
  background-color: #450849;
}

.side-bar .bottom-bar .icons{
  margin-right : 20px;
}

.side-bar .bottom-bar .icons .bottom-icons{
    font-size : 18px;
    margin-left : 15px;
    cursor : pointer;
    color : ${({ theme }) => theme.colors.light};
    height : 40px;
    width : 40px;
    padding : 10px;
}

.side-bar .bottom-bar .icons .bottom-icons:hover{
  background : ${({ theme }) => theme.colors.light};
  color : ${({ theme }) => theme.colors.sidebarBottom};
  padding : 10px;
  font-size : 24px;
}
}



@media only screen and (max-width : ${({ theme }) => theme.media.mobile})
{

      .side-bar .logo{
        width: 105px;
        margin-left: 5px;
        padding: 6px;
      }

      .side-bar .bottom-bar{
          height : 40px;
      }

      .bottom-bar .icons {
        display : flex;
        
      }

      .side-bar .bottom-bar .icons{
        margin-right : 2px;
      }

      .side-bar .bottom-bar .icons .bottom-icons{
          font-size : 12px;
          margin-left : 10px;
          cursor : pointer;
          color : ${({ theme }) => theme.colors.light};
          height : 30px;
          width : 30px;
          padding : 6px;
      }

}

@media only screen and (max-width : ${({ theme }) => theme.media.tablet}) and (min-width : ${({ theme }) => theme.media.mobile})
{

      .side-bar .logo{
          width: 100px;
          margin-left : 18px;
          text-align : center;
          padding: 10px;
      }

      .side-bar .bottom-bar{
          height : 40px;
      }

      .bottom-bar .icons {
        display : flex;
        
      }

      .side-bar .bottom-bar .icons{
        margin-right : 2px;
      }

      .side-bar .bottom-bar .icons .bottom-icons{
          font-size : 12px;
          margin-left : 4px;
          cursor : pointer;
          color : ${({ theme }) => theme.colors.light};
          height : 30px;
          width : 30px;
          padding : 6px;
      }
}


@media only screen and (min-width : ${({ theme }) => theme.media.tablet}) and (max-width : ${({ theme }) => theme.media.laptop})
{

      .side-bar .logo{
          width: 140px;
          margin-left : 24px;
          text-align : center;
          padding: 10px;
      }

      .side-bar .bottom-bar{
          height : 40px;
      }

      .bottom-bar .icons {
        display : flex;
        
      }

      .side-bar .bottom-bar .icons{
        margin-right : 2px;
      }

      .side-bar .bottom-bar .icons .bottom-icons{
          font-size : 12px;
          margin-left : 4px;
          cursor : pointer;
          color : ${({ theme }) => theme.colors.light};
          height : 30px;
          width : 30px;
          padding : 6px;
      }
}





`;

export default Sidebar;
