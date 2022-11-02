// importing the required packages
import { Rating } from 'react-simple-star-rating'
import React from 'react';
import {useState,useEffect} from 'react';
import image from "./rating1.svg";
//importing the css files 
import "./Rating.css";
import "./rate.css";
//function to create contents of the rate Employee
export default function RateEmp(){
//declaring the required variables
    const [rating, setRating] = useState(0)
    const [emp,setEmp] = useState([]);
    const [Empid,setEmpid] = useState('');
    const [value,setvalue]=useState([]);
    const [details,setDetails]=useState([]);
    useEffect(() => {
        //fetch call to get the distinct empid
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empid1`).then(res => res.json()).then(data => setEmp(data));
    },[emp]);
    const submit = (e) => {
        //fetch call to search and display the details of selected empid from the dropdown
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/search1`,{
            method:'POST',
            body:JSON.stringify({Empid}),
            headers:{'content-type':'application/json'}
        })
        .then(res => res.json())
        .then(data => {setDetails(data);
            console.log(details);
        })
    }
    //fetch call to update the rating value of the employee with the selected value of stars
    const upemp = () => {
        console.log(value)
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/rateemp`,{
            method:'PUT',
            body:JSON.stringify({Empid,value}),
            headers:{'content-type':'application/json'}
        }).then(res => res.json()).then(console.log(details));

        window.alert('Rating Success')

    }
   // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
    //callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
   const onPointerMove = (value, index) => {
    setvalue(value)
    console.log(value, index)
}

   return(
    <div>
        <body>
        <center>
            <div className='Ratinghead'>
            <h2>RATE THE EMPLOYEE</h2></div>
            <br></br>
            <div className='ratedropdown'>
            <select value={Empid} onChange={e => setEmpid(e.target.value)}>
                <option>EMPLOYEE ID </option>
                {emp.map(Empid=> <option>{Empid}</option>)}
            </select></div>
            <span className="ratingsearch">
            <button className="ratesearch" onClick={submit}>🔍</button></span>
            
            <br></br>
            <table className='ratingtable'>          
                <tr>
                    <th> NAME</th>
                    <th> DOJ</th>
                    <th> EXPERIENCE</th>
                    <th>PLATFORM</th>
                </tr>
                {details.map(({Empname,DOJ,Experience,Platform}) => (
                    <tr>
                        <td>{Empname}</td>
                        <td>{DOJ}</td>
                        <td>{Experience}</td>
                        <td>{Platform}</td>
                    </tr>
                ))}
            </table>
            <h2 className='ratehere'>RATE HERE</h2>
            <div class="down-arrow"></div>
            <div className='rating' >
            <Rating 
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
           />

           </div>
            <center><button className='starupdate' onClick={upemp}>RATE<span></span></button></center>
            <div className='starimage'>
            <img src={image}></img>
            </div>
        </center>
        </body>
        </div>
        )
}