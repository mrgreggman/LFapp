import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import './Register.css';

const USER_REGEX = /^[a-zA-Z0-9]{3,30}$/;
const NAME_REGEX = /^[a-zA-Z0-9]{3,30}$/;
const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const EMAIL_REGEX = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Register = () => {

    const userRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const errRef = useRef(null);

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pass, setPass] = useState('');
    const [passValid, setPassValid] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [matchValid, setMatchValid] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMessage, setErrMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidUser(result);
    }, [user]);

    useEffect(() => {
        const result = NAME_REGEX.test(name);
        console.log(result);
        console.log(name);
        setValidName(result);
    }, [name]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PASS_REGEX.test(pass);
        console.log(result);
        console.log(pass);
        setPassValid(result);
        const match = pass === matchPwd;
        setMatchValid(match);
    }, [pass, matchPwd]);

    useEffect(() => {
        setErrMessage('');
    }, [user, pass, matchPwd]);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();

        
    };

    const sendUser = async (e) => {
        e.preventDefault();
    
        await axios.post('http://localhost:5277/api/User', { displayName: name, username: user, Password: pass, email: email})
    
      };
    return (

        <div className='fieldcontainer'>
            <p ref={errRef} className={errMessage ? 'errMessage' : 'offscreen'} aria-live='assertive'>{errMessage}</p>
            <div>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor='username'>
                                Username
                                {validUser ?
                                    <span className='valid'><CheckIcon /></span> : null}
                                {!validUser ?
                                    <span className='valid'><ClearIcon /></span> : null}

                                    
                            </InputLabel>
                            <Input
                                type='text'
                                id='username'
                                variant="standard"
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setUser(e.target.value)}
                                required
                                aria-invalid={validUser ? 'false' : 'true'}
                                aria-describedby='uidnote'
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                        </FormControl>
                    </div>
                </Box>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor='displayName'>
                                Display Name
                                {validName ?
                                    <span className='valid'><CheckIcon /></span> : null}
                                {!validName ?
                                    <span className='valid'><ClearIcon /></span> : null}

                                    
                            </InputLabel>
                            <Input
                                type='text'
                                id='displayName'
                                variant="standard"
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setName(e.target.value)}
                                required
                                aria-invalid={validName ? 'false' : 'true'}
                                aria-describedby='uidnote'
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                        </FormControl>
                    </div>
                </Box>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor='email'>
                                Email
                                {validEmail ?
                                    <span className='valid'><CheckIcon /></span> : null}
                                {!validEmail ?
                                    <span className='valid'><ClearIcon /></span> : null}
                                {validEmail === null ?
                                    <span className='valid'></span> : null}
                            </InputLabel>
                            <Input
                                type='text'
                                id='email'
                                variant="standard"
                                ref={emailRef}
                                autoComplete='off'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-invalid={validEmail ? 'false' : 'true'}
                                aria-describedby='eidnote'
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                        </FormControl>
                    </div>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="password">
                                Password
                                {passValid ?
                                    <span className='valid'><CheckIcon /></span> : null}
                                {!passValid ?
                                    <span className='valid'><ClearIcon /></span> : null}                                
                                
                            </InputLabel>
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPass(e.target.value)}
                                required
                                aria-invalid={passValid ? 'false' : 'true'}
                                aria-describedby='pwdnote'
                                onFocus={() => setPassFocus(true)}
                                onBlur={() => setPassFocus(false)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="password">
                                Confirm Password
                                {matchValid ?
                                    <span className='valid'><CheckIcon /></span> : null}
                                {!matchValid ?
                                    <span className='valid'><ClearIcon /></span> : null}

                            </InputLabel>
                            <Input
                                id="confirm-password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setMatchPwd(e.target.value)}
                                required
                                aria-invalid={matchValid ? 'false' : 'true'}
                                aria-describedby='confirm-pwdnote'
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </Box>

                <Box
                    
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    autoComplete="off"
                >

                    <button 
                    className='regbutton' 
                    onClick={sendUser}
                    >
                        Register</button>

                </Box>
            </div>
        </div>
    )
}

export default Register


