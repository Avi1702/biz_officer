import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import "../styles/Data.css"
import Filter from './Filter';
// import rows from "../data.js"



function createData(No,CaseNumber,Title,Product,SubStatus,Status,Technician,TechnicianStatus,TechnicianDateTime,AccountName,ContactName,Mobile,Phone,Address,OpenedTime,Priority,Agent,Channel) {
  return {
    No,
    CaseNumber,
    Title,
    Product,
    SubStatus,
    Status,
    Technician,
    TechnicianStatus,
    TechnicianDateTime,
    AccountName,
    ContactName,
    Mobile,
    Phone,
    Address,
    OpenedTime,
    Priority,
    Agent,
    Channel
  };
}

const rows = [
  createData(1,11101,"Replacement","Cooking Range","New","Open","Bhavin Piwania","New","28-01-2023 10:52:38","Sumit662","Sumit Verma","9824242424","011-5455454","GK-333","27-01-2023 20:54:05","Normal","Andrew Watson","Primary"),
  createData(2,11102,"Replacement","Cooking Range","New","Close","Bhavin Piwania","New","28-01-2023 10:52:38","Sumit662","Sumit Verma","9824242424","011-5455454","GK-333","27-01-2023 20:54:05","Normal","Andrew Watson","Primary"),
  createData(3,11103,"Replacement","Cooking Range","New","Resolved","Bhavin Piwania","New","28-01-2023 10:52:38","Sumit662","Sumit Verma","9824242424","011-5455454","GK-333","27-01-2023 20:54:05","Normal","Andrew Watson","Primary"),
  createData(4,11104,"Replacement","Cooking Range","New","Billable","Bhavin Piwania","New","28-01-2023 10:52:38","Sumit662","Sumit Verma","9824242424","011-5455454","GK-333","27-01-2023 20:54:05","Normal","Andrew Watson","Primary"),
  createData(5,11105,"Replacement","Cooking Range","New","Open Package Cases","Bhavin Piwania","New","28-01-2023 10:52:38","Sumit662","Sumit Verma","9824242424","011-5455454","GK-333","27-01-2023 20:54:05","Normal","Andrew Watson","Primary"),
  createData(6,11106,"Replacement","Cooking Range","New","Emergency Cases","Bhavin Piwania","New","28-01-2023 10:52:38","Sumit662","Sumit Verma","9824242424","011-5455454","GK-333","27-01-2023 20:54:05","Normal","Andrew Watson","Primary"),
  createData(7,11107,"Incidence","Air Conditioner","New","Unassigned Cases","","","","Joginder","Joginder","9812443536","","null","22-01-2023 02:16:03","","","","","Normal","Andrew Watson","Secondary",),
  createData(8,11108,"Incidence","Air Conditioner","New","Close","","","","Joginder","Joginder","9812443536","","null","22-01-2023 02:16:03","","","","","Normal","Andrew Watson","Secondary",),
  createData(9,11109,"Incidence","Air Conditioner","New","Over Due Cases","","","","Joginder","Joginder","9812443536","","null","22-01-2023 02:16:03","","","","","Normal","Andrew Watson","Secondary",),
  createData(10,11110,"Incidence","Air Conditioner","New","Open","","","","Joginder","Joginder","9812443536","","null","22-01-2023 02:16:03","","","","","Normal","Andrew Watson","Secondary",),
  createData(11,11111,"Incidence","Air Conditioner","New","Unassigned Package Cases","","","","Joginder","Joginder","9812443536","","null","22-01-2023 02:16:03","","","","","Normal","Andrew Watson","Secondary",),
  createData(12,11112,"Incidence","Air Conditioner","New","Open","","","","Joginder","Joginder","9812443536","","null","22-01-2023 02:16:03","","","","","Normal","Andrew Watson","Secondary",),

];



export default function Data() {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

 
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Filter data={{rows}}/>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer sx={{overflow:"scroll" }}>
          <Table
            sx={{ minWidth: 750,border:"0.5px solid grey",marginTop:"50px"}}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <TableHead>
                <TableCell sx={{borderRight:"1px"}}>#</TableCell>
                <TableCell>S.No</TableCell>
                <TableCell>Case Number</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Sub Status</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Technician</TableCell>
                <TableCell>Technician Status</TableCell>
                <TableCell>Technician Data Time</TableCell>
               <TableCell>Account Name</TableCell>
                <TableCell>Contact Name</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Opened Time</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Agent</TableCell>
                <TableCell>Chanel</TableCell>
            </TableHead>
           
            <TableBody>
              {
                rows.map((row, index) => {


                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                      >
                        {row.No}
                      </TableCell>
                      <TableCell align="right">{row.CaseNumber}</TableCell>
                      <TableCell align="right">{row.Title}</TableCell>
                      <TableCell align="right">{row.Product}</TableCell>
                      <TableCell align="right">{row.SubStatus}</TableCell>
                      <TableCell align="right">{row.Status}</TableCell>
                      <TableCell align="right">{row.Technician}</TableCell>
                      <TableCell align="right">{row.TechnicianStatus}</TableCell>
                      <TableCell align="right">{row.TechnicianDateTime}</TableCell>
                      <TableCell align="right">{row.AccountName}</TableCell>
                      <TableCell align="right">{row.ContactName}</TableCell>
                      <TableCell align="right">{row.Mobile}</TableCell>
                      <TableCell align="right">{row.SubStatus}</TableCell>
                      <TableCell align="right">{row.Phone}</TableCell>
                      <TableCell align="right">{row.Address}</TableCell>
                      <TableCell align="right">{row.Priority}</TableCell>
                      <TableCell align="right">{row.Agent}</TableCell>
                      <TableCell align="right">{row.Channel}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
        />
      </Paper>
    </Box>
  );
}