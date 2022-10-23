import './main.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Rating } from 'react-simple-star-rating'
import GroupsIcon from '@mui/icons-material/Groups';


export default function Projectstatus() {
    const [todo, setTodo] = useState([]);
    const [data, setData] = useState("");
    // const [rating, setRating] = useState(0)
    // const[rates,setRates]=useState("");

    // Catch Rating value
    // const handleRating = (rate) => {
    //   setRating(rate)
    //   console.log("helo",rate)
    //   setRates(rate)

    //   // other logic
    // }
    // Optinal callback functions
    // const onPointerEnter = () => console.log('Enter')
    // const onPointerLeave = () => console.log('Leave')
    // const onPointerMove = (value, index) => console.log(value, index)
    // const [drop,setDrop]=useState([]);
    // const [select,setSelect]=useState("")
    useEffect(() => {
        // console.log(rating)
        // fetch(`http://localhost:3002/star/${rates}`,{method:"post",headers:{'content-type':'application/json'}})
        console.log(data)
        fetch('http://localhost:3002/api/todo', { method: "post", body: JSON.stringify({ data }), headers: { 'content-type': 'application/json' } })
            .then(res => res.json())
            .then(datas => {
                setTodo(datas)
                console.log(datas)
            })
        // fetch('http://localhost:3002/special').then(res=>res.json()).then(data=>(setDrop(data)))
    }, [data]);
    //return<table id="todo" border="20px" align="center"cellPadding="5px" cellSpacing="5px">
    return <div className="a-btn"><table className='ptable'>

        <select onChange={(e) => setData(e.target.value)}>
            <option>ProjectStatus</option>
            <option>Completed</option>
            <option>Ongoing</option>
        </select>
        {todo.map(item => {
            return <tr>
                <td className='pteamname'><Link to={`/todo/${item.Teamname}`}>{item.Teamname}Team<h7><GroupsIcon /></h7></Link></td>
            </tr>
        })}
    </table>



    </div>
}