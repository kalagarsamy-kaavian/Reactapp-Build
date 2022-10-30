import { Rating } from 'react-simple-star-rating'
import React from 'react';
import {useState,useEffect} from 'react';
import image from "./rating1.svg";
import "./Rating.css";
import "./rate.css";
const Nexmo = require('nexmo');
export default function RateEmp(){
    const [rating, setRating] = useState(0)
    const[rates,setRates]=useState("");
    const [emp,setEmp] = useState([]);
    const [Empid,setEmpid] = useState('');
    const [value,setvalue]=useState([]);
    const [details,setDetails]=useState([]);
    
    useEffect(() => {
        

        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empid1`).then(res => res.json()).then(data => setEmp(data));
    },[emp]);
    const submit = (e) => {
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
    const upemp = () => {
        console.log(value)
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/rateemp`,{
            method:'PUT',
            body:JSON.stringify({Empid,value}),
            headers:{'content-type':'application/json'}
        }).then(res => res.json()).then(console.log(details));
    }
    // const sendmsg=()=>{
    //     const nexmo = new Nexmo({
    //         apiKey: '54543ba1',
    //         apiSecret: '6Xrnpq1Rg4YOkKlq',
    //     });
        
    //     const from = "Vonage APIs";
    //     const to = "+91 9488983600";
    //     const text = "Message from my project";
        
    //     var result = nexmo.message.sendSms(from, to, text); 
        
    //     console.log(result);
    // }

   // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
      // console.log("rate",rate)
      // setRates(rate)
      // other logic
    }
    // Optinal callback functions
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
            {/* <center><button classname="starupdate" onClick={() => { upemp(); sendmsg();}}>RATE<span></span></button></center> */}
            {/* <center><button className='starupdate' onClick={()=>{upemp();sendmsg();}}>RATE<span></span></button></center> */}
            <center><button className='starupdate' onClick={upemp}>RATE<span></span></button></center>
            <div className='starimage'>
            <img src={image}></img>
            </div>
        </center>
        </body>
        </div>)
}