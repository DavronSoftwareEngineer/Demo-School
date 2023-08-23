import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaTrash } from "react-icons/fa";
import { addNewTask, removeTask } from '../../redux/actions';

export default function TodoApp() {
    const [value, setValue] = useState("")
    const tasks = useSelector((state) => state.tasks);
    console.log(tasks);
    const handleAddNewTask = () => {
        if (value.trim() === "") return;
        addNewTask(value);
        setValue("")
    }

    const handleRemoveTasks = (index) => removeTask(index);
  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
        <Container> 
            <Grid container
                justifyContent={"center"}
            >
                <Grid item xs={10}  sm={7} md={5} lg={4} xl={4}>
                    <Box sx={{
                        width: "100%",
                        mt: 4,
                        p: 3,
                        border: "1px solid grey",
                        borderRadius: "10px",
                        backgroundColor: grey[300],
                    }}>
                        <Typography variant='h4' textAlign={"center"}>TodoApp</Typography>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 3,
                        }}>
                            <input type="text"
                                style={{
                                    width: "100%",
                                    marginRight: 10,
                                    borderRadius: "5px",
                                    fontSize: "16px",
                                    paddingLeft: "10px"
                                }}
                                placeholder='Yangi vazifani qoshish' 
                                value={value}
                                onChange={(e) => setValue(e.target.value)} />
                            <Button variant='contained'
                                sx={{
                                    textTransform: "capitalize",
                                    px: 3,
                                }} 
                                onClick={handleAddNewTask} startIcon={<FaPlus/>}>Qoshish</Button>
                        </Box>
                        <Box sx={{mt: 2}}>
                            {tasks.map((item, index) => (
                                <Box key={index} sx={{
                                    py: 0.5,
                                    px: 1.5,
                                    borderRadius: "5px",
                                    boxShadow: 5,
                                    mb: 2,
                                    backgroundColor: "#fff",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                    <Typography>{item.title}</Typography>
                                    <IconButton variant='text' onClick={() => handleRemoveTasks(index)} color='error' 
                                    sx={{
                                        px: "5px",
                                    }}><FaTrash fontSize={"20px"}/></IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
