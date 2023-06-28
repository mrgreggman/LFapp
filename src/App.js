import React from 'react';
import Feed from './components/Feed/Feed';
import MiniDrawer from './components/Drawer/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import FeedBox from './components/FeedBox/FeedBox';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {


  return <ThemeProvider theme={darkTheme}>;
    <Router>
      <MiniDrawer>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/Friends" element={<p>Friends</p>} />
          <Route path="/Settings" element={<p>Settings</p>} />
          <Route path="/Profile" element={<p>Profile</p>} />
          <Route path="/Logout" element={<p>Logout</p>} />
        </Routes>
      </MiniDrawer>
    </Router>
  </ThemeProvider>;
}

export default App;