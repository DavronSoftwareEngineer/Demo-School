import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, IconButton, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "5px",
};

export default function DeletModal({icon, text}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Tooltip title={text} placement='right'>
            <IconButton size='medium' onClick={handleOpen}>{icon}</IconButton>
        </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{p: 2}}>
          <Typography variant='h5' sx={{
            fontWeight: 'bold'
          }}>Talabani o'chirib tashlash</Typography>
          </Box>
          <Divider/>
          <Box sx={{
            p: 2,
          }}>
            <Typography sx={{color: grey[600]}}>Ushbu talabani guruhdan olib tashlamoqchimisiz?</Typography>
          </Box>
          <Divider/>
          <Box sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: 'center',
            p: 2
          }}>
            <Button variant='text' onClick={handleClose} color='error' sx={{fontWeight: "bold", mr: 2}}>Cancel</Button>
            <Button variant='contained' onClick={handleClose} color='success' sx={{fontWeight: "bold"}}>Confirm</Button> 
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
