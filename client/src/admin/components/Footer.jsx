import React from 'react';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

function Footer() {
    return (
        <div className='main-footer'>
            <div className='bottom-row'>
                <p className='call'>
                    <h3 className='bottom'><CopyrightOutlinedIcon className='copyright'/>:{new Date().getFullYear()}|Project Managemnet System | ALL Rights Reserved</h3>

                </p>

            </div>

        </div>
    )
}

export default Footer;