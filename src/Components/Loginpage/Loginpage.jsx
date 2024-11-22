import React from 'react';
import './Loginpage.css';
import Background from '../Assets/GSS IMG.jpg';
import LOGO from '../Assets/Gss logo.jpg';


const loginpage = () => {
  return (
    <section>
      <div class="head">
        <img src={LOGO} alt=""></img>
      </div>
      <p class="log">LOGIN</p>
      <div class="main-contain">
        <div class="form">
          <form action="vigloprecious67@gmail.com" encType='plaintext'>
            <input type="email" name="email" placeholder="Enter your email" required class="input"></input>
            <br />
            <input type="password" name="password" placeholder="Enter your password" required class="input"></input>
            <br />
            <input type="checkbox" class="check"></input>
            <label for="#">Remember me</label><label for="#"><span>Forgot Password?</span></label> 
            <br />
            <button input="text" class="btn">Log in</button>
          </form>
        </div>
      </div>
      <div class="image">
        <img src={Background} alt=""></img>
      </div>
      <p class="par">@ GSS 2024</p>
    </section>
  );
};

export default loginpage;