import React, { useState } from "react";
import styles from './login.module.css';
import { TwitterCircleFilled } from '@ant-design/icons';
import { FacebookFilled } from '@ant-design/icons';
import { InstagramFilled } from '@ant-design/icons';
import { YoutubeFilled } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }

        return(
        <div className={styles.loginContainer}>
            <h2>Login</h2>    
            <form className={styles.loginform} onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="youremail" />
                <label htmlFor='password'>Password</label>
                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="********"></input>
                <button type='submit' onClick={() => navigate('/Home')}>Log In </button>
            </form>
                <button className={styles.linkbtn} onClick={() => navigate('/Register')}>Don't have an account? Register here.</button>
                <h4> or Login using one of the following </h4>
            <form className={styles.socialcontainer}>
                <Button className={styles.socialbtn} shape='circle' size='large' icon={<TwitterCircleFilled />}  />
                <Button className={styles.socialbtn} shape='circle' size='large' icon={<FacebookFilled />}  />  
                <Button className={styles.socialbtn} shape='circle' size='large' icon={<InstagramFilled />}  />    
                <Button className={styles.socialbtn} shape='circle' size='large' onClick={() => window.location="https://www.youtube.com/"} icon={<YoutubeFilled />}   />
            </form>   
        </div>
        );
}