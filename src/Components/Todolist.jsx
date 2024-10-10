import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'


const Todolist = () => {

    const[todo,setTodo]=useState('')
    const[name,setName]=useState(' ')
    const[db,setDb]=useState([])

    function dataPost()
         {
            axios.post("http://localhost:3000/posts",{todo,name})
            .then(()=>{
                alert("data has been posted")
                setTodo('')
                setName('')
            })
            .catch(()=>{
                alert("data has not been posted")
            })
         }
    function dataGet()
    {
        axios.get("http://localhost:3000/posts")
            .then((response)=>{
                setDb(response.data)
                alert("data has been retrived")
            })
            .catch(()=>{
                alert("data has not been retrived")
            })
    } 

    function deleteData(id,data)
    {
           axios.delete(`http://localhost:3000/posts/${id}`,{todo:data,name:data})
           .then(()=>{
            console.log("data updated");
            dataGet();
           })

           .catch(()=>{
            console.log("data cannot be updated");
           })
    }
    function updateData(id,data)
    {
           axios.put(`http://localhost:3000/posts/${id}`,{todo:data,name:data})
           .then(()=>{
            console.log("data updated");
            dataGet();
           })

           .catch(()=>{
            console.log("data cannot be updated");
           })
    }

    function newData(id)
    {
        const data=prompt("enter the new data");
        updateData(id,data);
    }   
    
console.log(db)
  return (
    <div>
         <p>
            {todo}
         </p>

         <TextField 
         id="outlined-basic" 
         label="Todo" variant="outlined" 
         value={todo}
         onChange={(ref)=> setTodo(ref.target.value)} 
         />
         
         <p>
            {name}
         </p>
       <TextField 
         id="outlined-basic" 
         label="Todo" variant="outlined" 
         value={name}
         onChange={(ref)=> setName(ref.target.value)} />
         <br /><br />
         <hr></hr> 
         <Button variant="contained" onClick={dataPost}>Submit</Button>
         <br /><br />
         <Button variant="contained" onClick={dataGet}>Get</Button>

         <div>
            <ul>
                {
                    db.map((item) =>(
                        <li key={item.id}>{item.todo}<Button 
                        onClick={()=>newData(item.id)}>Edit</Button>
                        <Button onClick={()=>deleteData(item.id)} >delete</Button>
                        </li>
                    ))
                    }
            </ul>
            <ul>
                {
                    db.map((item)=>(    
                        <li key={item.id}>{item.name}<Button
                        onClick={()=>newData(item.id)}>Edit</Button></li>
                    ))
                }
            </ul>
         </div>
    </div>
  )
}

export default Todolist