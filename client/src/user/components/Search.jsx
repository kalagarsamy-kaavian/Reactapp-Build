import * as CgIcons from "react-icons/cg";
import React from 'react';
import "./search.css";
// import Button from "@mui/material/Button";

function Search() {
    return (
        <form action="/ProjectHistory" method="get">
            <label htmlFor="header-search">
                <span className="a"></span>
            </label>
            {/* <button type="submit"><CgIcons.CgSearch /></button>           */}
            <button className='pushable' type="submit"><span className='front'><CgIcons.CgSearch className="btn" /></span></button>
        </form>
    )
}

export default Search;