import PropTypes from "prop-types";
import React, {
  Fragment
} from "react";
import MetaTags from "react-meta-tags";
import {
  Link
} from "react-router-dom";
import {
  BreadcrumbsItem
} from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const LoginRegister = ({
  location
}) => {
  const {
    pathname
  } = location;



  function click1() {
    let inp = '<input name="cin" placeholder="CIN" type="number"/>';
    document.querySelector(".enterHere").innerHTML = inp;
  }

  function click2() {
    let inp = '<input name="id" placeholder="ID Zitouna" type="text"/>';
    document.querySelector(".enterHere").innerHTML = inp;
  }
  //   const jjjd = function(e){

  //     let a = document.getElementsByName("lt");
  //     console.log(a)
  //     for(let i = 0 ;i<a.length;i++){
  //       console.log("je suis"+a[i].value)
  //     }
  //     // if(e.classList.includes("ngtv")){
  //     //   console.log("one")
  //     // }
  //     // else{
  //     //   console.log("two")
  //     // }
  //  }
  return ( <
    Fragment >
    <
    MetaTags >
    <
    title > Souq ZitounaLogin < /title> <
    meta name = "description"
    content = "Compare page of Bosphorus react minimalist eCommerce template." /
    >
    <
    /MetaTags> <
    BreadcrumbsItem to = {
      process.env.PUBLIC_URL + "/"
    } > Home < /BreadcrumbsItem> <
    BreadcrumbsItem to = {
      process.env.PUBLIC_URL + pathname
    } >
    Login Register <
    /BreadcrumbsItem> <
    LayoutOne headerTop = "visible" > {
      /* breadcrumb */ } <
    Breadcrumb / >
    <
    div className = "login-register-area pt-100 pb-100" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-7 col-md-12 ml-auto mr-auto" >
    <
    div className = "login-register-wrapper" >
    <
    Tab.Container defaultActiveKey = "login" >
    <
    Nav variant = "pills"
    className = "login-register-tab-list" >
    <
    Nav.Item >
    <
    Nav.Link eventKey = "login" >
    <
    h4 > Login < /h4> <
    /Nav.Link> <
    /Nav.Item> <
    Nav.Item >
    <
    Nav.Link eventKey = "register" >
    <
    h4 > Register < /h4> <
    /Nav.Link> <
    /Nav.Item> <
    /Nav> <
    Tab.Content >
    <
    Tab.Pane eventKey = "login" >
    <
    div className = "login-form-container" >
    <
    div className = "login-register-form" >
    <
    form >
    <
    input type = "text"
    name = "user-name"
    placeholder = "Username" /
    >
    <
    input type = "password"
    name = "user-password"
    placeholder = "Password" /
    >


    <
    div className = "button-box" >
    <
    div className = "login-toggle-btn" >
    <
    input type = "checkbox" / >
    <
    label className = "ml-10" > Remember me < /label> <
    Link to = {
      process.env.PUBLIC_URL + "/"
    } >
    Forgot Password ?
    <
    /Link> <
    /div> <
    button type = "submit" >
    <
    span > Login < /span> <
    /button> <
    /div> <
    /form> <
    /div> <
    /div> <
    /Tab.Pane> <
    Tab.Pane eventKey = "register" >
    <
    div className = "login-form-container" >
    <
    div className = "login-register-form" >
    <
    form >
    <
    input type = "text"
    name = "user-email"
    placeholder = "Email" /
    >
    <
    input type = "text"
    name = "user-name"
    placeholder = "Username" /
    >
    <
    input type = "password"
    name = "user-password"
    placeholder = "Password" /
    >

    <
    div className = "ltContainer" >
    <
    div >
    <
    div >
    <
    input type = "radio"
    name = "lt"
    id = "cin"
    className = "ngtv"
    value = "cin"
    onClick = {
      click1
    }
    />  <
    /div>  <
    div > CIN < /div> <
    /div>  <
    div >
    <
    div >
    <
    input type = "radio"
    name = "lt"
    id = "id"
    value = "id"
    onClick = {
      click2
    }
    />  <
    /div> <
    div > ID Zitouna < /div> <
    /div> <
    /div> <
    div class = "enterHere" >

    <
    /div>

    <
    div className = "button-box" >
    <
    button type = "submit" >
    <
    span > Register < /span> <
    /button> <
    /div> <
    /form> <
    /div> <
    /div> <
    /Tab.Pane> <
    /Tab.Content> <
    /Tab.Container> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div>

    <
    /LayoutOne> <
    /Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object
};

export default LoginRegister;
