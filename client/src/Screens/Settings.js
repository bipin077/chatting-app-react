import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';
import {useUpdatePasswordMutation} from "../Store/Services/UserServices";
import { useNavigate } from 'react-router-dom';

const Settings = () => {

    const [changePassword, response, isLoading] = useUpdatePasswordMutation();
    console.log(response);

    const navigate = useNavigate();

    const errors = response?.error?.data?.errors ? response?.error?.data?.errors : '';

    // getting loggedin user data
    const senderData = localStorage.getItem("sender");
    const sender = JSON.parse(senderData);

    const [state, setState] = useState({
        old : '',
        newPassword : '',
        confirm : '',
        userId : ''
    });

    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name] : e.target.value});
    }

    const formSubmitHandler = (e) =>
    {
        e.preventDefault();
        changePassword({ userId : sender._id, old : state.old, newPassword : state.newPassword, confirm : state.confirm});
    }

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert(response?.data?.msg);
            navigate("/");
        } 
    }, [response.isSuccess])

  return (
    <Component>
      <div className="container">
        <div className="left-section">
          <Sidebar />
        </div>
        <div className="right-section">
            <div className="right-container">
                <h2> Manage Account Settings</h2>
                <form className='profile-form' onSubmit={formSubmitHandler}>
                
                { response.isError && errors.map((error)=>
                    
                    <div className="input_field col-6 error-field">
                      <h4>{ error.msg }</h4>
                    </div>
  
                  )}
                    <div className='form-group'>
                        <label htmlFor='name'>Enter Old Password </label>
                        <input type="password" name="old" value={state.old} onChange={inputHandler} placeholder="Enter Old Password" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Enter New Password </label>
                        <input type="password" name="newPassword" value={state.newPassword} onChange={inputHandler} placeholder="Enter New Password"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Enter Confirm Password </label>
                        <input type="password" name="confirm" value={state.confirm} onChange={inputHandler} placeholder="Enter Confirm Password"/>
                    </div>
                    <div className='form-group'>
                        <div className='submit-section'>
                            <button>Update Password</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </Component>
  )
}

const Component = styled.section`

    .error-field h4{
    background : ${({theme})=>theme.colors.green};
    padding : 5px 15px;
    color : #f3f3f3;
    border-left : 5px solid red;
    margin-top : 5px;
    font-size : 15px;
    border-right : 5px solid red;
  }

  .container
  {
      display: flex;
      flex-direction : row;
  }

  .container .left-section
  {
    width : 25%;
  }

  .container .right-section
  {
    width : 75%;
    padding : 50px;
  }

  .container .right-section .right-container{
    box-shadow : 5px 5px 5px #fff , -5px -5px 5px #fff;
    padding : 10px;
  }

  .container .right-section .right-container h2{
        font-size : 30px;
        border-left : 5px solid ${({theme})=>theme.colors.green};
        padding-left : 15px;
  }

  .container .right-section .right-container .profile-form{
        margin-top : 20px;
  }

  .container .right-section .right-container .profile-form .form-group{
        margin-top : 3px;
        display : flex;
        flex-direction : column;
        padding : 5px;
  }

  .profile-form .form-group label{
        font-size : 15px;
        margin-top : 5px;
        padding : 5px;
        font-weight : 700;
  }

  .profile-form .form-group input{
    font-size : 15px;
    margin-top : 5px;
    padding : 10px;
}


.profile-form .form-group .submit-section button{
    font-size : 18px;
    padding : 5px 10px;
    border : 1px solid ${({theme})=>theme.colors.green};
    font-weight : 700;
    
}

.profile-form .form-group .submit-section button:hover{
    background : ${({theme})=>theme.colors.green};
    color : ${({theme})=>theme.colors.light};
    padding : 5px 15px;
}
  
  `

export default Settings;

