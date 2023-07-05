import React from 'react';
import Feed from './components/Feed/Feed';
import MiniDrawer from './components/Drawer/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Friends from './Pages/Friends/Friends';
import Register from './Pages/Register/Register';
import './App.css';
import DashboardProvider from './context/GameContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {


  return <ThemeProvider theme={darkTheme}>;
    <Router>
      <DashboardProvider>
      <MiniDrawer>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Profile" element={<p>Profile</p>} />
          <Route path="/Logout" element={<p>Logout</p>} />
          <Route path="/Login" element={<p>Logout</p>} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </MiniDrawer>
      </DashboardProvider>
    </Router>
  </ThemeProvider>;
}

export default App;