import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Avtar from '../Components/Avtar';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import {useGetSingleUserQuery, useUpdateDetailsMutation} from "../Store/Services/UserServices";

const Profile = () => {

    const [state, setState] = useState({
        name : '',
        phone : '',
        email : '',
        avatar : '' 
    });

    const navigate = useNavigate();

    // getting loggedin user data
    const senderData = localStorage.getItem("sender");
    const sender = JSON.parse(senderData);

    const {data=[], isFetching} = useGetSingleUserQuery(sender._id);
    console.log(data);

    const [updateData, response] = useUpdateDetailsMutation();
    const errors = response?.error?.data?.errors ? response?.error?.data?.errors : '';

    useEffect(() =>
    {
        if(data.user) 
        {
            setState({name : data.user.name, phone : data.user.phone, email : data.user.email, avatar : data.user.avatar});
        }
    }, [!isFetching])

    useEffect(()=>
    {
        if(response.isSuccess)
        {
            alert(response?.data?.msg);
            navigate("/");
        } 
    }, [response.isSuccess])



    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name] : e.target.value});
    }

    const formSubmitHandler = (e) =>
    {
        e.preventDefault();
        updateData({ name : state.name ,phone : state.phone, email : state.email, avatar : state.avatar, userId : sender._id});
    }

    return (
        <Component>
            <div className="container">
                <div className="left-section">
                    <Sidebar />
                </div>
                <div className="right-section">
                    <div className="right-container">
                        <h2> Manage Your Profile</h2>
                        <form className='profile-form' onSubmit={formSubmitHandler}>

                        { response.isError && errors.map((error)=>
                    
                            <div className="input_field col-6 error-field">
                              <h4>{ error.msg }</h4>
                            </div>
          
                          )}

                            <div className='form-group'>
                                <label htmlFor='name'>Enter Full Name </label>
                                <input type="text" name="name" value={state.name} onChange={inputHandler} placeholder="Enter Your Full Name" />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='name'>Enter Mobile Number </label>
                                <input type="text" name="phone" value={state.phone} onChange={inputHandler} placeholder="Enter Mobile Number" />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='name'>Enter Email Address </label>
                                <input type="text" name="email" value={state.email} onChange={inputHandler} placeholder="Enter Email Address" />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='name'>Select Avatar Image </label>
                                <select name="avatar" value={state.avatar} onChange={inputHandler}>
                                    <option value="">No Avatar</option>
                                    <option value="/avtar/avtar1.png">Avatar One</option>
                                    <option value="/avtar/avtar2.png">Avatar Two</option>
                                    <option value="/avtar/avtar3.png">Avatar Three</option>
                                    <option value="/avtar/avtar4.png">Avatar Four</option>
                                    <option value="/avtar/avtar5.png">Avatar Five</option>
                                </select>
                            </div>
                            <div className='form-group form-bottom'>
                                <label htmlFor='name'>Select Profile Avtar</label>
                                <div className='form-bottom-section'>
                                    <div className='avtar-section'>
                                        <Avtar image="/avtar/avtar1.png" />
                                        <Avtar image="/avtar/avtar2.png" />
                                        <Avtar image="/avtar/avtar3.png" />
                                        <Avtar image="/avtar/avtar4.png" />
                                        <Avtar image="/avtar/avtar5.png" />
                                    </div>
                                    <div className='submit-section'>
                                        <button>Update Profile</button>
                                    </div>
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
    padding : 30px;
  }

  .container .right-section .right-container{
    box-shadow : 5px 5px 5px #fff , -5px -5px 5px #fff;
    padding : 10px;
  }

  .container .right-section .right-container h2{
        font-size : 30px;
        border-left : 5px solid ${({ theme }) => theme.colors.green};
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

.profile-form .form-group select{
    font-size : 15px;
    margin-top : 5px;
    padding : 10px;
}

.profile-form .form-group .form-bottom-section .avtar-section
{
    display : flex;
    flex-direction : row;
}

.profile-form .form-bottom .form-bottom-section 
{
    display :flex;
    justify-content : space-between;
    align-items : center;
    margin : 2px 10px;
}

.profile-form .form-bottom .form-bottom-section .submit-section button{
    font-size : 18px;
    padding : 5px 10px;
    border : 1px solid ${({ theme }) => theme.colors.green};
    font-weight : 700;
    
}

.profile-form .form-bottom .form-bottom-section .submit-section button:hover{
    background : ${({ theme }) => theme.colors.green};
    color : ${({ theme }) => theme.colors.light};
    padding : 5px 15px;
}
  
  `

export default Profile;

