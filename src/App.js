import React from 'react';
import Feed from './components/Feed/Feed';
import MiniDrawer from './components/Drawer/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Friends from './Pages/Friends/Friends';
import Settings from './Pages/Settings/Settings';
import './App.css';

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
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Profile" element={<p>Profile</p>} />
          <Route path="/Logout" element={<p>Logout</p>} />
        </Routes>
      </MiniDrawer>
    </Router>
  </ThemeProvider>;
}

export default App;