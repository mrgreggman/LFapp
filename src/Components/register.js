import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './login.module.css';

export default function Register() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className={styles.loginContainer}>
            <h2>Register</h2>
            <form className={styles.registerform} onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} onChange={(event) => setName(event.target.value)} name="name" id="name" placeholder="Full Name" />
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="youremail" />
                <label htmlFor='email'>Password</label>
                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="********"></input>
                <button type='submit'>Register</button>
            </form>
                <button className={styles.linkbtn} onClick={() => navigate('/Login')}>Already have an account? Login here.</button>
        </div>
    )
}