import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';

const EditUser = () => {

    let history = useNavigate();
    const { id } = useParams();
    console.log(id);

    const [user,setUsers] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
      });

      const {name,username,email,phone,website} = user;
      
      const  onInputChange = e =>{
        setUsers({...user,[e.target.name]:e.target.value});
      };


      useEffect(()=>{
        loadUser ();
      },[]);
      
      const loadUser = async () =>{
        const result=  await axios.get(`http://localhost:3001/users/${id}`,user);
          setUsers(result.data);
        }; 

      const onSubmit = async e =>{
        e.preventDefault();
        await axios.post(`http://localhost:3001/users/${id}`,user);
        history("/");
      } ;

     



  return (
    <div className='container'>
      <div className='w-75 xm-auto shadow p-5'>
      <h2 className='text-center mb-4'> Edit User</h2>
<form onSubmit = {e=> onSubmit(e)}>

<div className='form-group'>
    <input type="text" 
    className='form-control form-control-lg'
    placeholder='Enter Your Name'
    name='name'
    value={name}
    onChange={ e => onInputChange(e)}
    />
  </div>

  <div className='form-group'>
    <input type="text" 
    className='form-control form-control-lg'
    placeholder='Enter Your UserName'
    name='username'
    value={username}
    onChange={ e => onInputChange(e)}
    />
  </div>

  <div className='form-group'>
    <input type="text" 
    className='form-control form-control-lg'
    placeholder='Enter Email'
    name='email'
    value={email}
    onChange={ e => onInputChange(e)}
    />
  </div>

<div className='form-group'>
    <input type="text" 
    className='form-control form-control-lg'
    placeholder='Enter Your Phone Number'
    name='phone'
    value={phone}
    onChange={ e => onInputChange(e)}
    />
  </div>

  <div className='form-group'>
    <input type="text" 
    className='form-control form-control-lg'
    placeholder='Enter Your Website Name'
    name='website'
    value={website}
    onChange={ e => onInputChange(e)}
    />
  </div>
  <button className='btn btn-primary btn-block mt-3'>Update User</button>
</form>

      </div>
        </div>
  )
}

export default EditUser;