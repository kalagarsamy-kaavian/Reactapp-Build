import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from "react-icons/bi";
import * as Io5Icons from "react-icons/io5";
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export const SidebarData = [
    {
        title: 'Home',
        path: '/admin/Home',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'ProjectStatus',
        path: '/admin/ProjectStatus',
        icon: <AssignmentIndOutlinedIcon />,
        // iconClosed: <RiIcons.RiArrowDownSFill />,
        // iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'AddEmpoyee',
        path: '/admin/AddEmployee',
        icon: <BiIcons.BiTask />
    },
    {
        title: 'Assign',
        path: '/admin/assigned',
        icon: <BiIcons.BiTask />
    },
    {
        title: 'UpdateEmpoyee',
        path: '/admin/UpdateEmployee',
        icon: <BiIcons.BiTask />
    },
    {
        title: 'RemoveEmployee',
        path: '/admin/RemoveEmployee',
        icon: <Io5Icons.IoPersonRemove />
    },
    {
        title: 'Search',
        path: '/admin/Search',
        icon: <BiIcons.BiSearch />
    },
    {
        title: 'About',
        path: '/admin/About',
        icon: <InfoOutlinedIcon/>
    }
];

