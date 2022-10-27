import React from 'react';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import "./footer.css";

function Footer() {
    return (
        <div className='footer'>
            <p><CopyrightOutlinedIcon className='copyright'/>:{new Date().getFullYear()}|Project Managemnet Sustem | ALL Rights Reserved</p>
        </div>
    )
}

export default Footer;