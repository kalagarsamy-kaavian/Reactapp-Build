import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from "react-icons/bi";
import * as Io5Icons from "react-icons/io5";

import { BsStar } from "react-icons/bs";

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import UpgradeIcon from '@mui/icons-material/Upgrade';


export const SidebarData = [
    {
        title: 'Home',
        path: '/admin/Home',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Project Status',
        path: '/admin/ProjectStatus',
        icon: <AssignmentIndOutlinedIcon />,
        // iconClosed: <RiIcons.RiArrowDownSFill />,
        // iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {

        title: 'AddEmployees',
        path: '/admin/UpdateEmployee',

        //title: 'Add Employee',
        //path: '/admin/AddEmployee',

        icon: <PersonAddAlt1Icon />
    },
    {
        title: 'Assign',
        path: '/admin/assigned',
        icon: <AssignmentIndIcon />
    },
    {

        title: 'UpdateEmpoyee',
        path: '/admin/RewriteEmployee',

        //title: 'Update Empolyee',
        //path: '/admin/UpdateEmployee',

        icon: <UpgradeIcon />
    },
    {
        title: 'Remove Employee',
        path: '/admin/RemoveEmployee',
        icon: <Io5Icons.IoPersonRemove />
    },
    {
        title: 'Rate Employee',
        path: '/admin/Rating',
        icon: <BsStar/>
    },

    {
        title: 'Search',
        path: '/admin/Search',
        icon: <BiIcons.BiSearch />
    },
    {
        title: 'Dashboard',
        path: '/admin/Dashboard',
        icon: <UpgradeIcon />
    },
    {
        title: 'About',
        path: '/admin/About',
        icon: <InfoOutlinedIcon/>
    }
];