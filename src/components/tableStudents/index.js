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
import { getStudents } from '../../api';
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


export default function TableStudents() {

    const [data, setData] = useState([]);

    const getStudent = async () => {  
      const res = await getStudents();
      console.log(res);
      setData(res.data)
     }
    
    useEffect(() => {
      getStudent();
    }, []);

    const studentId = (user) => UserTask(user);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Nomi</StyledTableCell>
            <StyledTableCell>Telefon</StyledTableCell>
            <StyledTableCell>Balans</StyledTableCell>
            <StyledTableCell>Holat</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <StyledTableRow key={index}>
                <StyledTableCell>{index+1}</StyledTableCell>
              <StyledTableCell  component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell>{item.phoneNumber}</StyledTableCell>
              <StyledTableCell>{item.age}</StyledTableCell>
              <StyledTableCell>
                <NavLink to={"/dashboard/editstudent"} onClick={() => studentId(item)}>
                  <IconButton><EditIcon/></IconButton>
                </NavLink>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
