import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
const Todolist = () => {

  const[todo,setTodo]=useState('');
 // const[name,setName]=useState('')
  const [db, setDb]=useState([])
  // data posting
  function dataPost() {
  // alert("data has been posted")
    axios.post(" http://localhost:3000/posts",{todo})
      .then(()=>{
        alert("data has been posted")
        setTodo('')
      })
      .catch(() =>{
        alert("data has not posted")
      })
    }
  function getdata() {
    axios.get(" http://localhost:3000/posts")
    .then((ref)=>{
      setDb(ref.data)
      alert("data has been retried")
    })
    .catch(() =>{
      alert("data has not getted")
    })
  }

  function newData(id){
    const data=prompt("enter the new data")
    console.log(id);
     updateData(id,data);
  }

  function updateData(id,data){
      axios.put(`http://localhost:3000/posts/${id}`,{todo:data})
      .then(()=>{
        console.log("data updated");
        getdata();
      })
      .catch(()=>{
        console.log("data cannot update");

      })
  }
  function deleteData(id){
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then(()=>{
      console.log("data deleted");
      getdata();
    })
    .catch(()=>{
      console.log("data cannot delete");

    })
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
      onChange={(ref) =>setTodo(ref.target.value)} />
      
      {/*<p>{name}</p>
      <TextField 
      id="outlined-basic" 
      label="Todo" variant="outlined"
      value={name}
      onChange={(ref) =>setName(ref.target.value)} />*/}
      <br />
    <Button variant="contained"  onClick={dataPost}>Post</Button>
    <Button variant="contained"  onClick={getdata}>Get</Button>
    <div>
      <ul>
        {
          db.map((item)=>(
            <li key={item.id}>{item.todo}<Button onClick={()=> newData(item.id)}>Edit</Button>
            <Button onClick={()=> deleteData(item.id)}>Delete</Button>
            </li>
          ))
        }
      </ul>
    </div>
      
    </div>
  )
}

export default Todolist