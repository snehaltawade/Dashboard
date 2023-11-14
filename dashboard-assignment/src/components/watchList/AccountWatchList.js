import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(id, accountName, thisMonth, YTD) {
  return { id, accountName, thisMonth, YTD};
}

const rows = [
  createData(
    0,
    'Sales',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    'Advertising',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, 'Invetory','MC ⠀•••• 1253', 100.81),
  createData(
    3,
    'Entertainment',
    'VISA ⠀•••• 5919',
    212.79,
  ),
  createData(
    4,
    'Product',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function AccountWatchList() {
  return (
    <React.Fragment>
      <h3>Account WatchList</h3>
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
              <TableCell align="right">{`$${row.YTD}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}