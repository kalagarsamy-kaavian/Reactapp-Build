const {useState,useEffect}=React;

function TodoItems(){
    const [items,setItems]=useState([]);
    const [log,setLog]=useState([]);

    useEffect(()=>{
    // fetch('./todo')
    // .then(res=>res.json())
    // .then(data=>setItems(data));
    fetch('/adminlogin',{method:'post',body:JSON.stringify({log}),headers:{'content-type':'application/json'}})
    .then(res=>res.json())
    .then(data=>setLog(data));
    },[])
    return (<h3>The Admin
        <ul>{items.map(({_id,name})=><li key={`items-${name}`}>{name}</li>)}<button onClick={event =>  window.location.href='/adminlogin'}>LOGIN</button></ul></h3>)
}

function To(){
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('/message')
        .then(res=>res.json())
        .then(data=>setItems(data));
        },[])
    
    return <table border="1">
        <h2>ADMIN: UPDATE</h2>
        <tr>
            <th>ID</th>
            <th>CODE</th>
            <th>NAME</th>
            <th>PROJECTNAME</th>
            <th>PROJECTSTATUS</th></tr>
            {items.map(({_id,code,name,projectname,projectstatus})=>(
                <tr>
                    <td>{_id}</td>
                    <td>{code}</td>
                    <td>{name}</td>
                    <td>{projectname}</td>
                    <td>{projectstatus}</td>
                    <button onClick={event =>  window.location.href='/message'}>UPDATE</button>
                </tr>
            ))}
    </table>
}



function App(){
 //   return <h3>HEllo</h3>
    return  <div><TodoItems/><To/></div>
}

ReactDOM.render(<App/>,document.getElementById('root'));