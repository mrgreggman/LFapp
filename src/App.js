import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './App.css';
import MiniDrawer from './Drawer';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GameContext from './context/GameContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {


  return <ThemeProvider theme={darkTheme}>;
    <GameContext>
      <div className='app'>

        <MiniDrawer />

      </div>
    </GameContext>
</ThemeProvider>;
}

  export default App;