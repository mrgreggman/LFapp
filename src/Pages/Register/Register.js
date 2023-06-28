import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleNameChange = (value) => {
        setName(value);
    }

    const handleUsernameChange = (value) => {
        setUsername(value);
    }

    const handleDisplayNameChange = (value) => {
        setDisplayName(value);
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    return (
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
                    <TextField
                        id="standard-search"
                        label="Email"
                        type="Email"
                        variant="standard"
                        onChange={(e) => handleEmailChange(e.target.value)}
                    />

                </div>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => handlePasswordChange(e.target.value)}
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
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='fieldcontainer'>
                    <TextField
                        className='field'
                        id="standard-search"
                        label="Name"
                        type="text"
                        variant="standard"
                        onChange={(e) => handleNameChange(e.target.value)}
                    />

                    <TextField
                        className='field'
                        id="standard-search"
                        label="Username"
                        type="text"
                        variant="standard"
                        onChange={(e) => handleUsernameChange(e.target.value)}
                    />

                    <TextField
                        className='field'
                        id="standard-search"
                        label="Display Name"
                        type="text"
                        variant="standard"
                        onChange={(e) => handleDisplayNameChange(e.target.value)}
                    />
                </div>

                <button>Register</button>

            </Box>
        </div>
    )
}

export default Register
