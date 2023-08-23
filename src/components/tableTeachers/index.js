import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { UserTask, idTask } from '../../redux/actions';
import { getTeachers } from '../../api';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function TableTeachers() {

    const [data, setData] = useState([]);

    const getTeacher = async () => {  
      const res = await getTeachers();
      console.log(res);
      setData(res.data)
     }
    
    useEffect(() => {
      getTeacher();
    }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Nomi</StyledTableCell>
            <StyledTableCell>Telefon</StyledTableCell>
            <StyledTableCell>Group</StyledTableCell>
            <StyledTableCell>Sohasi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <StyledTableRow key={index}>
                <StyledTableCell>{index+1}</StyledTableCell>
              <StyledTableCell  component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell>+998 98 765 45 34</StyledTableCell>
              <StyledTableCell>{item.grops}</StyledTableCell>
              <StyledTableCell>{item.categorys}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
