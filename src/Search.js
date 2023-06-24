import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

function Search() {
    return (

      <div className="search_bar">
            <FormControl variant="filled">
            <InputLabel htmlFor="input-with-icon-adornment">
            </InputLabel>
            <Input
            id="input-with-icon-adornment"
            startAdornment={
            <InputAdornment position="start">
            <SearchIcon className='search_icon'/>
            </InputAdornment>
          }
        />
      </FormControl>
      </div>
    );
}

export default Search;