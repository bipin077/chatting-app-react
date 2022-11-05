import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {BiEnvelopeOpen} from "react-icons/bi";
import {MdOutlinePassword} from "react-icons/md";

import { useLoginUserMutation, useSetUserOnlineMutation } from "../Store/Services/UserServices";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setAdminToken} from "../Store/Reducers/AuthReducer";
import {addSenderDetails} from "../Store/Reducers/UserReducer";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [loginUser, response] = useLoginUserMutation();
  const [onlineUser, resp] = useSetUserOnlineMutation();
  console.log(resp);

  const errors = response?.error?.data?.errors ? response?.error?.data?.errors : '';

  const [state, setState] = useState({
    email : '',
    password : ''
  });

  const handleInput = (e) =>
  {
      e.preventDefault();
      setState({...state, [e.target.name] : e.target.value });
  }

  const formSubmitHandler = (e) =>
  {
      e.preventDefault();
      loginUser(state);
  }

  useEffect(()=>
  {
      if(response?.isSuccess)
      {
          const admin_token = response?.data?.token ? response?.data?.token : '';
          const sender = response?.data?.user ? response?.data?.user : ''; 
          const userId = response?.data?.user ? response?.data?.user?._id : ''; 
          localStorage.setItem("admin-token", admin_token);
          localStorage.setItem("sender", JSON.stringify(sender));
          dispatch(setAdminToken(admin_token));
          dispatch(addSenderDetails(sender));
          onlineUser(userId);
          navigate("/");
      }
  }, [response?.isSuccess])

  return (
    <Wrapper>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <img src="/images/logo.png" alt="sadfsaf" />
          </div>
          <div className="row clearfix">
            <div className="">
            <form onSubmit={formSubmitHandler}>
                <div className="row">

                { response.isError && errors.map((error)=>
                    
                  <div className="input_field col-6 error">
                    <h2>{ error.error }</h2>
                  </div>

                )}

                  <div className="input_field col-6">
                    <span><BiEnvelopeOpen className="icon" /></span>
                    <input type="email" name="email" value={state.email} onChange={handleInput} placeholder="Email" required="" />
                  </div>

                  <div className="input_field col-6">
                  <span> <MdOutlinePassword className="icon" /> </span>
                  <input type="password" name="password" value={state.password} onChange={handleInput} placeholder="Password" required="" />
                  </div>
                </div>

                <input className="button btn-form" type="submit" value="Login" name="submit" />
              </form>
              <Link className="link" to="/register">Create New Account?</Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

.link{
  font-size : 15px;
  text-decoration : none;
  color : ${({theme})=>theme.colors.light};
}

.icon {
    font-size : 18px;
    margin-top : 5px;
}

input#cb1 {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.input_field.checkbox_option > label {
  color: white;
  margin: auto !important;
}
.input_field.checkbox_option {
  display: flex;
  background-color: #f4b732;
  padding: 8px;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
}

.form_wrapper {
  background: #fff;
  width: 40%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 25px;
  margin: 4% auto 4%;
  position: relative;
  z-index: 1;
  border-top: 5px solid ${({theme})=>theme.colors.green};
  -webkit-box-shadow: 0 0 3px rgb(0 0 0 / 10%);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 3px rgb(0 0 0 / 10%);
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transition: none;
  transition: none;
  -webkit-animation: expand 0.8s 0.6s ease-out forwards;
  animation: expand 0.8s 0.6s ease-out forwards;
  opacity: 0;
}

.form_wrapper h2 {
  font-size: 1.5em;
  line-height: 1.5em;
  margin: 0;
}

.title_container {
  text-align: center;
  padding-bottom: 15px;
}

h3 {
  font-size: 1.1em;
  font-weight: normal;
  line-height: 1.5em;
  margin: 0;
}

label {
  font-size: 12px;
}

.row {
  margin: 10px -15px;
}

.row > div {
  padding: 0 15px;
  box-sizing: border-box;
}

.col_half {
  width: 50%;
  float: left;
}

.input_field {
  position: relative;
  margin-bottom: 20px;
  -webkit-animation: bounce 0.6s ease-out;
  animation: bounce 0.6s ease-out;
}

.input_field > span {
  position: absolute;
  /* left: 0; */
  top: 0;
  color: #333;
  height: 100%;
  border-right: 1px solid #cccccc;
  text-align: center;
  width: 32px;
}

.input_field > span > i {
  padding-top: 10px;
}

.textarea_field > span > i {
  padding-top: 10px;
}

input[type="text"],
input[type="number"],
select,
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px 10px 9px 35px;
  height: 35px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  outline: none;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

textarea {
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: 1px solid #cccccc;
  padding: 8px 10px 9px 35px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="text"]:hover,
input[type="email"]:hover,
input[type="number"]:hover,
input[type="password"]:hover,
select,
textarea:hover {
  background: #fafafa;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
select:focus,
input[type="password"]:focus,
textarea:focus {
  -webkit-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
  -moz-box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
  box-shadow: 0 0 2px 1px rgba(255, 169, 0, 0.5);
  border: 1px solid ${({theme})=>theme.colors.green};
  background: #fafafa;
}

select {
  outline: none;
}

input[type="submit"] {
  background: ${({theme})=>theme.colors.green};
  height: 35px;
  line-height: 35px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.1em;
  margin-bottom: 10px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="submit"]:hover {
  background: darken(${({theme})=>theme.colors.green}, 7%);
}

input[type="submit"]:focus {
  background: darken(${({theme})=>theme.colors.green}, 7%);
}

input[type="radio"] {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.form_container .row .col_half.last {
  border-left: 1px solid #cccccc;
}

.checkbox_option label {
  margin-right: 1em;
  position: relative;
}
/* .checkbox_option label:before {
        content: "";
        display: inline-block;
        width: 0.5em;
        height: 0.5em;
        margin-right: 0.5em;
        vertical-align: -2px;
        border: 2px solid #cccccc;
        padding: 0.12em;
        background-color: transparent;
        background-clip: content-box;
        transition: all 0.2s ease;
    } */

.checkbox_option label:after {
  border-right: 2px solid #000000;
  border-top: 2px solid #000000;
  content: "";
  height: 20px;
  left: 2px;
  position: absolute;
  top: 7px;
  transform: scaleX(-1) rotate(135deg);
  transform-origin: left top;
  width: 7px;
  display: none;
}

input:hover + label:before {
  border-color: #000000;
}

input:checked + label :before {
  border-color: #000000;
}

input:after {
  -moz-animation: check 0.8s ease 0s running;
  -webkit-animation: check 0.8s ease 0s running;
  animation: check 0.8s ease 0s running;
  display: block;
  width: 7px;
  height: 20px;
  border-color: #000000;
}

.radio_option label {
  margin-right: 1em;
}

.radio_option:before {
  content: "";
  display: inline-block;
  width: 0.5em;
  height: 0.5em;
  margin-right: 0.5em;
  border-radius: 100%;
  vertical-align: -3px;
  border: 2px solid #cccccc;
  padding: 0.15em;
  background-color: transparent;
  background-clip: content-box;
  transition: all 0.2s ease;
}

input:hover + label:before {
  border-color: #000000;
}

input:checked + label:before {
  background-color: #000000;
  border-color: #000000;
}

.select_option {
  position: relative;
  width: 100%;
}

.select_option select {
  display: inline-block;
  width: 100%;
  height: 35px;
  padding: 0px 15px;
  cursor: pointer;
  color: #7b7b7b;
  /* border: 1px solid #cccccc; */
  border-radius: 0;
  background: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: all 0.2s ease;
}

.select_option::-ms-expand {
  display: none;
}

.select_option:hover,
.select_option:focus {
  color: #000000;
  background: #fafafa;
  border-color: #000000;
  outline: none;
}

.select_arrow {
  position: absolute;
  top: calc(50% - 4px);
  right: 15px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-width: 8px 5px 0 5px;
  border-style: solid;
  border-color: #7b7b7b transparent transparent transparent;
}

.select_option select:hover + .select_arrow,
.select_option select:focus + .select_arrow {
  border-top-color: #000000;
}

.credit {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 15px;
  color: ${({theme})=>theme.colors.green};
}

.credit a {
  color: darken(${({theme})=>theme.colors.green}, 7%);
}

@-webkit-keyframes check {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 7px;
  }
  50% {
    height: 20px;
    width: 7px;
  }
}

@keyframes check {
  0% {
    height: 0;
    width: 0;
  }
  25% {
    height: 0;
    width: 7px;
  }
  50% {
    height: 20px;
    width: 7px;
  }
}

@-webkit-keyframes expand {
  0% {
    -webkit-transform: scale3d(1, 0, 1);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale3d(1, 1.2, 1);
  }
  50% {
    -webkit-transform: scale3d(1, 0.85, 1);
  }
  75% {
    -webkit-transform: scale3d(1, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}

@keyframes expand {
  0% {
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale3d(1, 1.2, 1);
    transform: scale3d(1, 1.2, 1);
  }
  50% {
    -webkit-transform: scale3d(1, 0.85, 1);
    transform: scale3d(1, 0.85, 1);
  }
  75% {
    -webkit-transform: scale3d(1, 1.05, 1);
    transform: scale3d(1, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}

@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, -25px, 0);
    opacity: 0;
  }
  25% {
    -webkit-transform: translate3d(0, 10px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -6px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 2px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes bounce {
  0% {
    -webkit-transform: translate3d(0, -25px, 0);
    transform: translate3d(0, -25px, 0);
    opacity: 0;
  }
  25% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  50% {
    -webkit-transform: translate3d(0, -6px, 0);
    transform: translate3d(0, -6px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 2px, 0);
    transform: translate3d(0, 2px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@media (max-width: 600px) {
  .form_wrapper .col_half {
    width: 100%;
    float: none;
  }
}

.bottom_row col_half {
  width: 50%;
  float: left;
}

.form_container .row .col_half.last {
  border-left: none;
}

.remember_me {
  padding-bottom: 20px;
}

.form_wrapper{
    background : ${({theme})=>theme.colors.chatReceiver};
}

.title_container img{
    width : 300px;
}

.btn-form{
    font-size : 18px !important;
}

.error h2{
  background : ${({theme})=>theme.colors.green};
  padding : 2px 15px;
  color : #f3f3f3;
  border-left : 5px solid red;
}

`;

export default Login;
