import React, { useEffect, useState } from "react";
import './Adminfilter.css';
// import "./Search.css";

export default function Search() {
    const [item, setItem] = useState([]);
    const [platform, setPlatform] = useState([]);
    const [rating, setRating] = useState([]);
    const [spc, setSpc] = useState('');
    const [empplatform, setEmpplatform] = useState('');
	const [emprating, setEmprating] = useState('');



    //Fetch the data in Database display UI
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/pms/Filter`).then(res => res.json()).then(data => setItem(data));
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/platform`).then(res => res.json()).then(data => setPlatform(data));
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/rating`).then(res => res.json()).then(data => setRating(data));
    }, []);
    //Onsearch Function
    function onSearch() {
        
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/search`, {
            method: 'POST', body: JSON.stringify({ spc, empplatform,emprating }),
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then((filtervalue) => {
                console.log(typeof (filtervalue));
                console.log(filtervalue, 1234);
                setItem(filtervalue);
            });
    }
    return (<div class="searchcontainer">
        <div className="sheading">
            <h1>Search Employee</h1>
        </div>
        <div className="filteralign">
            {/* <h2> */}
                {/* <label className="plat">Platform : </label> */}
                {/* <select className="searchselect" value={empplatform} onChange={e => setEmpplatform(e.target.value)}>
                    <option value="" disablevalue>Platform</option>
                    {platform.map(plat => <option>{plat}</option>)}
                </select> */}
            {/* </h2> */}
            {/* <h20>
                    <select className="trate" value={emprating} onChange={e => setEmprating(e.target.value)}>
							<option value="" disablevalue>Rating</option>
							{rating.map(rate => <option>{rate}</option>)}
						</select>
            </h20> */}
            <h100>

                {/* <label className="fill">Specialized : </label><h20> </h20> */}
                <input className="searchbox" placeholder="Specialized/Rating/Platform" value={spc} onChange={e => setSpc(e.target.value)} />

            </h100>
            <h4><button className="searchbtn" onClick={onSearch}><span>🔍</span></button></h4>
        </div>

        <div className="searchtable"> <h5>
            <table className="searchdetails">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Platform</th>
                        <th>Specialized1</th>
                        <th>Specialized2</th>
                        <th>Specialized3</th>
                        <th>Rating</th>

                    </tr>
                </thead>
                {item.map(({Empid,Empname,Platform,Specialized1,Specialized2,Specialized3,Rating})=>(<tr>
                    <td>{Empid}</td>
                    <td>{Empname}</td>
                    <td>{Platform}</td>
                    <td>{Specialized1}</td>
                    <td>{Specialized2}</td>
                    <td>{Specialized3}</td>
                    <td>{Rating}</td>

                </tr>))}

            </table>
        </h5>
        </div>
    </div>
    )
}