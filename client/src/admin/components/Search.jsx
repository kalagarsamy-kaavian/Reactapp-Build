import * as CgIcons from "react-icons/cg";
import React from 'react';

function Search() {
    return(
        <form action="/pms/UserName" method="get">
            <label htmlFor="header-search">
                <span className="a"></span>
            </label>
            {/* <input
                type="text"
                id="header-search"
                placeholder="search..."
                name="b">
            </input> */}
            {/* <button className="searchbtn" type="submit"><CgIcons.CgSearch /></button> */}
            <button className='pushable' type="submit"><span className='front'><CgIcons.CgSearch className="btn" /></span></button>           
        </form>
    )
}

export default Search;