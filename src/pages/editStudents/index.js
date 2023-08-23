import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { grey } from '@mui/material/colors';
import {
        BsInboxes, 
        BsRepeat, 
        BsCreditCard2Back, 
        BsArrow90DegLeft, 
        BsCalculator,
        BsFlag,
        BsPencil,
        BsChatLeftDots,
        BsTrash, 
    } from "react-icons/bs";
import BasicTabs from '../../components/student-profil';
import PaymentDrawerReight from '../../components/payment-drawerReight';
import EditDrawerReight from '../../components/edit-drawerReight';
import SmsDrawerReight from '../../components/sms-drawerReight';
import DeletModal from '../../components/delet-modal';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';

export default function EditStudents() {
  const user = useSelector((state) => state.user);
  
  return (
    <Box>
        <Typography variant='h5'>{user.name}</Typography>
        <Box sx={{mt: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={10}>
                                    <Typography sx={{fontSize: "18px", fontWeight: "bold"}}>{user.name}</Typography>
                                    <Box sx={{my: 3}}>
                                        <Box sx={{
                                            display: "flex",
                                            alignContent: "center",
                                        }}>
                                            <Typography sx={{mr: 1, fontSize: "14px"}}>Balans:</Typography>
                                            <Typography sx={{fontWeight: "bold", fontSize: "14px"}}>412 500 so'm</Typography>
                                        </Box>
                                        <Box sx={{
                                            display: "flex",
                                            alignContent: "center",
                                        }}>
                                            <Typography sx={{mr: 1, fontSize: "14px"}}>Telefon:</Typography>
                                            <Typography sx={{fontWeight: "bold", fontSize: "14px"}}>{user.phoneNumber}</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                            display: "flex",
                                            alignContent: "center",
                                        }}>
                                            <Typography sx={{mr: 1, fontSize: "14px"}}>Tug'ulgan kuni:</Typography>
                                            <Typography sx={{fontWeight: "bold", fontSize: "14px"}}>{user.days}</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: "space-between",
                                        mt: 3,
                                        mr: 1,
                                    }}>
                                        {[
                                            {   
                                                id: 1,
                                                text: "Inboxes",
                                                drawer: <IconButton size='medium'><BsInboxes style={{fontSize: "18px"}}/></IconButton>
                                            }, 
                                            {
                                                id: 2,
                                                text: "Repeat",
                                                drawer: <IconButton size='medium'><BsRepeat style={{fontSize: "18px"}}/></IconButton>
                                            },
                                            {
                                                id: 3,
                                                text: "",
                                                drawer: <PaymentDrawerReight icon={<BsCreditCard2Back style={{fontSize: "18px"}}/>} text={"To'lov qo'shish"}/>,
                                            }, 
                                            {
                                                id: 4,
                                                text: "Arrow90DegLeft",
                                                drawer: <IconButton size='medium'><BsArrow90DegLeft style={{fontSize: "18px"}}/></IconButton>
                                            },
                                            {
                                                id: 5,
                                                text: "Calculator",
                                                drawer: <IconButton size='medium'><BsCalculator style={{fontSize: "18px"}}/></IconButton>
                                            },
                                            ].map((item, index) => (
                                                <Tooltip title={item.text} key={index} placement='bottom'>
                                                    {item.drawer}
                                                </Tooltip>
                                            ))}
                                    </Box>
                                </Grid>
                                <Grid item xs={2} 
                                    display={"flex"}
                                    justifyContent={"space-between"}
                                    flexDirection={"column"}
                                    >
                                    {[
                                        {
                                            id: 1,
                                            text: "Flag",
                                            drawer: <IconButton size='medium'><BsFlag style={{fontSize: "18px"}}/></IconButton>,
                                        },
                                        {
                                            id: 2,
                                            text: "",
                                            drawer: <EditDrawerReight icon={<BsPencil style={{fontSize: "18px"}}/>} text={"O'zgartirish kiritish"}/>,
                                        },
                                        {
                                            id: 3,
                                            text: "",
                                            drawer: <SmsDrawerReight icon={<BsChatLeftDots style={{fontSize: "18px"}}/>} text={"SMS jo'natish"}/>,

                                        },
                                        {
                                            id: 4,
                                            text: "",
                                            drawer: <DeletModal icon={<BsTrash style={{fontSize: "18px"}}/>} text={"O'chirish"}/>,
                                        },
                                    ].map((item, index) => (
                                        <Tooltip title={item.text} key={index} placement='right'>
                                            {item.drawer}
                                        </Tooltip>
                                    ))}
                                    </Grid>
                            </Grid>
                        </CardContent>
                        
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Box>
                        <BasicTabs user={user}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}
 