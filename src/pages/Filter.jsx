import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TableChartIcon from '@mui/icons-material/TableChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "../styles/Filter.css"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import Data from './Data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Filter({data}) {
  const [channels, setChannels] = React.useState('');
  const [caseType,setCaseType]=React.useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(data.rows)

  const handleChange = (event) => {

    
    if(event.target.name=="channels"){
        setChannels(event.target.value)
    }
    else{
        setCaseType(event.target.value)
    }
  };

const DeleteData=()=>{
    data.rows.pop()
    console.log(data.rows)
}

  return (
    // <div id="filter">
    <>
    <Box sx={{ minWidth: 120,width:"80%"}} id="filter" >
      <FormControl sx={{width:"15%"}}>
        <InputLabel id="demo-simple-select-label">Channels</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={channels}
          label="Channels"
          onChange={handleChange}
          name={"channels"}
          sx={{height:"40px"}}
        >
          <MenuItem value={"All channels"}>All Channels</MenuItem>
          <MenuItem value={"Primary"}>Primary</MenuItem>
          <MenuItem value={"Secondary"}>Secondary</MenuItem>
        </Select>
      </FormControl>
    <FormControl sx={{width:"12%"}}>
        <InputLabel id="demo-simple-select-label">All Case Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"All Case Type"}
          label="All Case Type"
          onChange={handleChange}
          sx={{height:"40px"}}

        >
          <MenuItem value="All Case Type" >All Case Type</MenuItem>

        </Select>
      </FormControl>

      <FormControl sx={{width:"12%"}}>
        <InputLabel id="demo-simple-select-label">All Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"All Status"}
          label="Status"
          sx={{height:"40px"}}

        >
          <MenuItem value={"All Status"}>All Status</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{width:"12%"}}>
        <InputLabel id="demo-simple-select-label">All Cases</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={caseType}
          label="Cases"
          name="caseType"
          onChange={handleChange}
          sx={{height:"40px"}}
    

        >
          <MenuItem value={"All Cases"}>All Cases</MenuItem>
          <MenuItem value={"Open Cases"}>Opened Cases</MenuItem>
          <MenuItem value={"Close Cases"}>Close Cases</MenuItem>
          <MenuItem value={"Resolved Cases"}>Resolved Cases</MenuItem>
          <MenuItem value={"Billable Cases"}>Billable Cases</MenuItem>
          <MenuItem value={"Open Package Cases"}>Open Package Cases</MenuItem>
          <MenuItem value={"Emergency Cases"}>Emergency Cases</MenuItem>
          <MenuItem value={"Unassigned Cases"}>Unassigned Cases</MenuItem>
          <MenuItem value={"Overdue Cases"}>Overdue Cases</MenuItem>
 
          
        </Select>
      </FormControl>

      <TextField id="standard-basic" label="Search" variant="standard"   sx={{height:"60px"}} />
      <Button variant="contained" sx={{width:"10%",backgroundColor:"white",color:"black"}}>Search</Button>
      <TableChartIcon color="primary" className='icon' />
      <CalendarMonthIcon color="primary" className='icon'/>
      <AddCircleIcon color="primary" className='icon' onClick={handleOpen}/>
      <DeleteIcon color='primary' className='icon' onClick={DeleteData}></DeleteIcon>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        </Box>
      </Modal>
    </Box>
   
   </>

  );
}