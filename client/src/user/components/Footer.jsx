import React from 'react';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

function Footer() {
    return (
        <div className='main-footer'>
            <div className='bottom-row'>
                <p className='call'>
                    <h2 className='footer'><CopyrightOutlinedIcon className='copyright'/>:{new Date().getFullYear()}|Project Managemnet Sustem | ALL Rights Reserved</h2>

                </p>

            </div>

        </div>
    )
}

export default Footer;