import { ADD_NEW_TASK, ID_TASK, REMOVE_TASK, USER_TASK } from "./types";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { grey } from "@mui/material/colors";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';

const initialState = {
    menus: [
        {
            id: 1,
            title: "Bosh sahifa",
            icon: <HomeOutlinedIcon 
            sx={{
                fontSize: "35px",
                color: grey[700],
            }}/>,
            path: '/dashboard/home'
        },
        {
            id: 2,
            title: "Talabalar",
            icon: <SchoolOutlinedIcon
            sx={{
                fontSize: "35px",
                color: grey[700],
            }}
            />,
            path: "/dashboard/students"
        },
        {
            id: 3,
            title: "O'qituvchilar",
            icon: <PeopleAltOutlinedIcon sx={{
                fontSize: "35px",
                color: grey[700],
            }}/>,
            path: "/dashboard/teachers"
        },
        {
            id: 4,
            title: "Kurslar",
            icon: <DesktopWindowsOutlinedIcon
            sx={{
                fontSize: "35px",
                color: grey[700],
            }}
            />,
            path: "/dashboard/courses"
        },
        {
            id: 5,
            title: "Guruhlar",
            icon: <GroupsOutlinedIcon
            sx={{
                fontSize: "35px",
                color: grey[700],
            }}
            />,
            path: "/dashboard/groups"
        },
        {
            id: 6,
            title: "Lidlar",
            icon: <FileDownloadOutlinedIcon
            sx={{
                fontSize: "35px",
                color: grey[700],
            }}
            />,
            path: "/dashboard/leads"
        },
        {
            id: 7,
            title: "Sozlamalar",
            icon: <SettingsOutlinedIcon
            sx={{
                fontSize: "35px",
                color: "red",
            }}
            />,
            path: "/dashboard/settings"
        }
    ],
    accounts: [
        {
            id: 1,
            title: "My Profile",
            icon: <AccountCircleOutlinedIcon sx={{color: grey[800]}}/>,
            path: "",
        },
        {
            id: 2,
            title: "Edit Profile",
            icon: <SettingsOutlinedIcon sx={{color: grey[800]}}/>,
            path: "",
        },
        {
            id: 3,
            title: "Inbox",
            icon: <MoveToInboxOutlinedIcon sx={{color: grey[800]}}/>,
            path: "",
        },
        {
            id: 4,
            title: "Help",
            icon: <SupportOutlinedIcon sx={{color: grey[800]}}/>,
            path: "",
        },
        {
            id: 5,
            title: "Sign Out",
            icon: <ExitToAppOutlinedIcon sx={{color: "red"}}/>,
            path: '/'
        },
    ],
    homePage: [
        {
            id: 1,
            icon: <PersonOutlinedIcon sx={{fontSize: 50, color: grey[700]}}/>,
            title: "Faol lidlar",
            result: "345",
        },
        {
            id: 2,
            icon: <SchoolOutlinedIcon sx={{fontSize: 50, color: grey[700]}}/>,
            title: "Faol talabalar",
            result: "236",
        },
        {
            id: 3, 
            icon: <GroupsOutlinedIcon sx={{fontSize: 50, color: grey[700]}}/>,
            title: "Guruhlar",
            result: "186",
        },
        {
            id: 4,
            icon: <GppMaybeOutlinedIcon sx={{fontSize: 50, color: grey[700]}}/>,
            title: "Qarizdorlar",
            result: "155",
        },
    ],
    user: {},
};


const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_NEW_TASK:
            return {...state, tasks: [...state.tasks, 
                {title: action.payload, completed: false}]}
        
        case REMOVE_TASK: 
                const tasks = [...state.tasks];
                tasks.splice(action.payload, 1); 
                return {...state, tasks};

        case USER_TASK: 
                return {...state, user: action.payload};


        default:
            return state;
    }

    // if (action.payload = "Vazifa qosh") 
    //     return {...state, tasks: [...state.tasks, 
    //         {title: action.payload, completed: false}]}

    // return state;
};

export default reducer;