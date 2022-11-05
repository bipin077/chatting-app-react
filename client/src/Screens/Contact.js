import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Avtar from '../Components/Avtar';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom';
import {useGetSingleUserQuery, useUpdateDetailsMutation} from "../Store/Services/UserServices";
import swal from 'sweetalert';

const Contact = () => {

    const [state, setState] = useState({
        name : '',
        phone : '',
        email : '',
        message : '' 
    });

    // getting loggedin user data
    const senderData = localStorage.getItem("sender");
    const sender = JSON.parse(senderData);

    const {data=[], isFetching} = useGetSingleUserQuery(sender._id);
    //console.log(data);

    useEffect(() =>
    {
        if(data.user) 
        {
            setState({name : data.user.name, phone : data.user.phone, email : data.user.email, avatar : data.user.avatar});
        }
    }, [!isFetching])





    const inputHandler = (e) =>
    {
        setState({...state, [e.target.name] : e.target.value});
    }

    const formSubmitHandler = (e) =>
    {
        e.preventDefault();
        //updateData({ name : state.name ,phone : state.phone, email : state.email, message : state.message});
    }

    return (
        <Component>
            <div className="container">
                <div className="left-section">
                    <Sidebar />
                </div>
                <div className="right-section"> 
                    <div className="right-container">
                        <h2> Have Any Issue?</h2>
                        <form className='profile-form' onSubmit={formSubmitHandler}>

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
                                <label htmlFor='name'>Enter Message </label>
                                <textarea name="message" value={state.message} onChange={inputHandler} placeholder="Enter Message" rows="3"></textarea>
                            </div>
                            <div className='form-group form-bottom'>
                                <div className='submit-section'>
                                    <button>Contact Us</button>
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

.profile-form .form-group textarea{
    font-size : 15px;
    margin-top : 5px;
    padding : 10px;
}

.profile-form .submit-section button{
    font-size : 18px;
    padding : 5px 10px;
    border : 1px solid ${({ theme }) => theme.colors.green};
    font-weight : 700;
    
}

.profile-form  .submit-section button:hover{
    background : ${({ theme }) => theme.colors.green};
    color : ${({ theme }) => theme.colors.light};
    padding : 5px 15px;
}


@media only screen and (max-width : ${({ theme }) => theme.media.mobile})
{
  
        .container .right-section {
            padding : 10px;
        }

        .container .right-section .right-container h2 {
            font-size: 22px;
        }

        .profile-form .form-group .form-bottom-section
        {
            display: flex;
            flex-wrap : wrap;
            flex-direction: column;
        }

        .profile-form .form-group .form-bottom-section .avtar-section {
            display: flex;
            flex-wrap : wrap;
            flex-direction: row;
        }

        .profile-form .form-group .form-bottom-section .submit-section
        {
            margin-top : 30px !important;
        }

        .profile-form .form-group .form-bottom-section .submit-section button
        {
            padding : 5px 20px;
        }
}

@media only screen and (max-width : ${({ theme }) => theme.media.tablet})
{
    .container .right-section {
        padding : 10px;
    }

    .container .right-section .right-container h2 {
        font-size: 25px;
    }

    .profile-form .form-group .form-bottom-section
    {
        display: flex;
        flex-wrap : wrap;
        flex-direction: column;
    }

    .profile-form .form-group .form-bottom-section .submit-section
    {
        margin-top : 30px !important;
    }

    .profile-form .form-group .form-bottom-section .submit-section button
    {
        padding : 5px 20px;
    }
}
  
@media only screen and (max-width : ${({ theme }) => theme.media.laptop})
{
    .container .right-section {
        padding : 10px;
    }

    .container .right-section .right-container h2 {
        font-size: 25px;
    }

    .profile-form .form-group .form-bottom-section
    {
        display: flex;
        flex-wrap : wrap;
        flex-direction: column;
    }

    .profile-form .form-group .form-bottom-section .avtar-section {
        display: flex;
        flex-wrap : wrap;
        flex-direction: row;
    }

    .profile-form .form-group .form-bottom-section .submit-section
    {
        margin-top : 30px !important;
    }

    .profile-form .form-group .form-bottom-section .submit-section button
    {
        padding : 5px 20px;
    }
}
   
@media only screen and (max-width : ${({ theme }) => theme.media.desktop})
{
    .container .right-section {
        padding : 20px;
    }

    .container .right-section .right-container h2 {
        font-size: 25px;
        margin-top : 10px;
        margin-left : 10px;
    }

    .profile-form .form-group .form-bottom-section
    {
        display: flex;
        flex-wrap : wrap;
        flex-direction: column;
    }

    .profile-form .form-group .form-bottom-section .avtar-section {
        display: flex;
        flex-wrap : wrap;
        flex-direction: row;
    }

    .profile-form .form-group .form-bottom-section .submit-section
    {
        margin-top : 30px !important;
    }

    .profile-form .form-group .form-bottom-section .submit-section button
    {
        padding : 5px 20px;
    }
}

@media only screen and (max-width : ${({ theme }) => theme.media.exlg})
{
    
}



  
  `

export default Contact;

