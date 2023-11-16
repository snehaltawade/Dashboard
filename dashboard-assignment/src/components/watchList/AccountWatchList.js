import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

// Generate Order Data
function createData(id, accountName, thisMonth, YTD) {
  return { id, accountName, thisMonth, YTD};
}

const rows = [
  createData(
    0,
    'Sales',
    '1968.59',
    312.44,
  ),
  createData(
    1,
    'Advertising',
    '1968.59',
    866.99,
  ),
  createData(2, 'Invetory','1968.59', 100.81),
  createData(
    3,
    'Entertainment',
    '1968.59',
    212.79,
  ),
  createData(
    4,
    'Product',
    '1968.59',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function AccountWatchList() {
  return (
    <React.Fragment>
      <Typography  variant='h6' fontWeight={'700'}>Account WatchList</Typography>
      <Table size="small" >
        <TableHead>
          <TableRow style={{borderBottom:'hidden'}}>
            <TableCell>Account</TableCell>
            <TableCell>This Month</TableCell>
            <TableCell>YTD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} style={{borderBottom:'hidden'}}>
              <TableCell>{row.accountName}</TableCell>
              <TableCell>{row.thisMonth}</TableCell>
              <TableCell>{`${row.YTD}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}