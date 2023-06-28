import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Friends.css';

function createData(
  name: string,
  PSN: string,
  Steam: string,
  Xbox: string,
  Discord: string,
  EpicGamesLauncher: string,
  Battlenet: string,
) {
  return { name, PSN, Steam, Xbox, Discord, EpicGamesLauncher, Battlenet };
}

const rows = [
  createData('Friend Example 1', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 2', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 3', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 4', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 5', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 6', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 7', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 8', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 9', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 10', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 11', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 12', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 13', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 14', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 15', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 16', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 17', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 18', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 19', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 20', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 21', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),
  createData('Friend Example 21', 'playstation user', 'Steam User', 'Xbox User', 'Discord User', 'Epic Games Launcher User', 'Battlenet User'),

];

export default function Friends() {
  return (
    <TableContainer
      component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
          className='Tablecontent'>
            <TableCell>Username</TableCell>
            <TableCell align="right">PSN</TableCell>
            <TableCell align="right">Steam</TableCell>
            <TableCell align="right">Xbox</TableCell>
            <TableCell align="right">Discord</TableCell>
            <TableCell align="right">Epic Games Launcher</TableCell>
            <TableCell align="right">Battle.net</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.PSN}</TableCell>
              <TableCell align="right">{row.Steam}</TableCell>
              <TableCell align="right">{row.Xbox}</TableCell>
              <TableCell align="right">{row.Discord}</TableCell>
              <TableCell align="right">{row.EpicGamesLauncher}</TableCell>
              <TableCell align="right">{row.Battlenet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}