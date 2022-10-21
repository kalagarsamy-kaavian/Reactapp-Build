import React from 'react';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import "./footer.css";

function Footer() {
    return (
        <div className='main-footer'>
            <div className='bottom-row'>
                <h1 className='call'>
                    <h0 className='fbottom'><CopyrightOutlinedIcon className='copyright'/>:{new Date().getFullYear()}|Project Managemnet Sustem | ALL Rights Reserved</h0>

                </h1>

            </div>

        </div>
    )
}

export default Footer;