import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import {
    BsFlag,
    } from "react-icons/bs";
import CustomIcons from '../customIcon';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({user}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: grey[200] }}>
        <Tabs value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
            variant='fullWidth'
            indicatorColor=""	
            sx={{
                height: "60px",
            }}
            >
          <Tab label={<Typography 
            sx={{
                textTransform: "none",
          }}>Profil</Typography>} {...a11yProps(0)}
          sx={{
            backgroundColor: value === 0 ? "#fff" : "",
            borderRadius: "5px", 
            boxShadow: value === 0 ? 5 : "",
          }}
          />
          <Tab label={<Typography 
            sx={{
                textTransform: "none"
          }}>Qo'ng'iroqlar tarixi</Typography>} {...a11yProps(1)} 
          sx={{
            backgroundColor: value === 1 ? "#fff" : "",
            borderRadius: "5px",
            mx: 3,
            boxShadow: value === 1 ? 5 : "",
            
          }}
          />
          <Tab label={<Typography 
            sx={{
                textTransform: "none"
          }}>Tarix</Typography>} {...a11yProps(2)} 
          sx={{
            backgroundColor: value === 2 ? "#fff" : "",
            borderRadius: "5px",
            boxShadow: value === 2 ? 5 : "",
          }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{
            backgroundColor: "#fff",
            height: "50px",
            width: "100%",
            borderRadius: 1.5,
            display: 'flex',
            alignItems: "center",
            boxShadow: 4,
        }}>
            <Box sx={{
                height: "100%",
                width: "5px",
                borderTopLeftRadius: 3,
                borderBottomLeftRadius: 3,
                backgroundColor: "blue",
            }}/>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: '100%',
                px: 2,
            }}>
                <Typography sx={{
                    fontWeight: "bold",
                    color: grey[700],
                }}>{user.category}</Typography>
                <Box><BsFlag style={{fontSize: "20px"}}/></Box>
            </Box>
        </Box>
        <Box sx={{
            my: 3,
        }}>
            <Typography variant='h5' sx={{
                fontWeight: "bold",
                color: grey[700]
            }}>Gruhlar</Typography>
            <Box 
                sx={{p: 2,
                    backgroundColor: "#fff",
                    mt: 2,
                    boxShadow: 4,
                    borderRadius: 1,
                    width: "450px",
                }}>
                <Box sx={{
                    display:"flex",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: "100%", 
                }}>
                    <Typography sx={{
                        fontSize: "18px",
                        color: grey[700],
                        fontWeight: "bold",
                    }}>{user.category}</Typography>
                    <Typography>10/02/2023-25/07/2023</Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: "100%", 
                }}>
                    <Typography sx={{
                        fontSize: "18px",
                        color: grey[700],
                        fontWeight: "bold",
                    }}>Muhammadillo Xakimov</Typography>
                    <Typography>Boshqa * 08:00</Typography>
                </Box>
                <Box sx={{
                    height: "2px",
                    backgroundColor: grey[300],
                    my: 2,
                }}/>
                <Box sx={{
                    display: 'flex',
                    alignItems: "center",
                }}>
                    <Typography sx={{
                        mr: 1,
                    }}>Holat:</Typography>
                    <Typography sx={{fontWeight: "bold", color: grey[700]}}>Harakatsiz (Sinov)</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: "center",
                }}>
                    <Typography  sx={{
                        mr: 1,
                    }}>Talaba qo'shilgan sana:</Typography>
                    <Typography sx={{fontWeight: "bold", color: grey[700]}}>20/07/2023</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: "center",
                }}>
                    <Typography sx={{
                        mr: 1,
                    }}>Bu talaba uchun narx:</Typography>
                    <Typography sx={{fontWeight: "bold", color: grey[700]}}>500 000 so'm</Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{
            my: 3,
        }}>
            <Typography variant='h5' sx={{
                fontWeight: "bold",
                color: grey[700]
            }}>To'lovlar</Typography>
            <Box 
                sx={{p: 2,
                    backgroundColor: "#fff",
                    mt: 2,
                    boxShadow: 4,
                    borderRadius: 1,
                    width: "100%",
                }}>
                <Typography sx={{
                    textAlign: "center"
                }}>Ma`lumotlar topilmadi</Typography>
                <Box sx={{
                    mt: 1,
                    py: 1,
                    // 
                    display: "flex", 
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <Typography>Malumotlar 15 dan 35 gacha, 234 ta dan</Typography>
                    <CustomIcons/>
                </Box>
            </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box sx={{
            // my: 3,
        }}>
            <Typography variant='h5' sx={{
                fontWeight: "bold",
                color: grey[700]
            }}>To'lovlar</Typography>
            <Box 
                sx={{p: 2,
                    backgroundColor: "#fff",
                    mt: 2,
                    boxShadow: 4,
                    borderRadius: 1,
                    width: "100%",
                }}>
                <Typography sx={{
                    textAlign: "center"
                }}>Ma`lumotlar topilmadi</Typography>
                <Box sx={{
                    mt: 1,
                    py: 1,
                    // 
                    display: "flex", 
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <Typography>Malumotlar 15 dan 35 gacha, 234 ta dan</Typography>
                    <CustomIcons/>
                </Box>
            </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Student History
      </TabPanel>
    </Box>
  );
}
