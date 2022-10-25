import React,{useEffect,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import main from "./main.css";
export default function Teamdetail(){
    const {Teamname} =useParams();
    const[item,setItem]=useState([]);

const navigate=useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:3002/api/todo/${Teamname}`,{method:'POST',headers:{'content-type':'application/json'}})
        .then(res=>res.json())
        .then(data=>setItem(data));
       
    },[])
    function assign(){
       var [first,...rest]= item;
      console.log(first.Projectstatus)
        if(first.Projectstatus==="Ongoing"){
            window.alert("Project is in progress")
        }
        else{
           
           navigate(`/admin/assign/${first.Teamname}`)
        }
    }
    return(<div className='teamtabel'><table>
            <tr>
                <th>EMPLOYEE NAME</th>
                <th>PLATFORM</th>
                <th>EMPSTATUS</th>
                <th></th>

            </tr>
             {item.map(element=>{
                return<tr>
                    <td>{element.Empname}</td>
                    {/* <td>{element.TeamName}</td>
                    <td>{element.ProjectStatus}</td>
                    <td>{element.Platform}</td> */}
                    <td>{element.Platform}</td>
                    <td>{element.Empstatus}</td>
                </tr>
                
             })}
             
             {/* <Link to={`/assign`}><button>ASSIGN</button></Link> */}
             
             <button className='button' onClick={assign}><span>Assign</span></button>
                </table></div> )             
                  
}