import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from "react-icons/bs";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import * as FcIcons from "react-icons/fc";


export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'ProjectHistory',
        path: '/ProjectHistory',
        icon: <BsIcons.BsClockHistory />,
    },
    {
        title: 'PersonelDetails',
        path: '/PersonelDetails',
        icon: <FcIcons.FcViewDetails />
    },
    {
        title: 'About',
        path: '/About',
        icon: <InfoOutlinedIcon/>
    },
];