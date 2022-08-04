
import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios';
export const Home = () => {
  const [users,setUsers] = useState([]);
  
  useEffect(()=>{
    loadUser ();
  },[]);

  const loadUser= async () =>{
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };
  
  // const deleteUser = async id =>{
  //   await axios.delete(`http://localhost:3001/users/${id}`);
  //   loadUser();
  // };


  return (
    <div className='container'>
      <h1>Home Page</h1>
      <table class="table">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Emails</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
 <tbody>
 { users.map((user,index)=>(
     <tr>
      <th scope='row'>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <NavLink to={`/user/${user.id}`} ><i class="fa-solid fa-eye"></i></NavLink>

        <NavLink to={`/user/edit/${user.id}`}><i class="fa-solid fa-file-pen m-3"></i></NavLink>

        <NavLink to=''><i class="fa-solid fa-trash-can m-2"></i></NavLink>

        {/* <NavLink onClick={()=> deleteUser(user.id)}><i class="fa-solid fa-trash-can m-2"></i></NavLink> */}
      </td>
     </tr>
    
 ))}
 </tbody>
</table>
    </div>
  )
}

export default Home;
