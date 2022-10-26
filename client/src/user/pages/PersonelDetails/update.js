// import React, { useEffect, useState } from 'react'

// function Update() {
//     const [data, setData] = useState([])
//     const [updateStatus, setUpdateRole] = useState("");

//     useEffect(()=>{
//         fetch("http://localhost:3002/update").then(res => res.json()).then(data => setData(data));
//     },[])

//     function UpdateStatusfn(Teamname) {
//        console.log(updateStatus)
//         fetch(`http://localhost:3002/Update`, { method: "PATCH", body: JSON.stringify({ updateStatus }), headers: { 'content-type': 'application/json' } })
//     }
//     // window.alert("Updated Sucessfully");

//     return (
//         <div>
//             <input type="text" placeholder="ENTER YOUR TEAM NAME"onChange={(e) => setUpdateRole(e.target.value)}></input>
//             <button onClick={UpdateStatusfn(updateStatus)}>Completed</button>
//         </div>
//     )

// }

// export default Update;
