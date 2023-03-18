import React, { useState } from "react";
import { TextField } from '@mui/material';
import 'animate.css';
import Alert from "@mui/material/Alert";


export default function Try() {
  
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == null){
       setUsernameError(true);
    }
    
    if (password == null){
        setPasswordError(true);
    }
  }
return(
    
    <div className=' 
    lg:border-2 lg:px-10 lg:pt-10 lg:pb-10 lg:rounded-3xl lg:text-center 
    md:border-2 md:px-10 md:pt-10 md:pb-10 md:rounded-3xl md:text-center
    sm:border-2 sm:px-5 sm:pt-10 sm:pb-10 sm:rounded-xl sm:text-center
    esm:border-2 esm:px-5 esm:pt-10 esm:pb-10 esm:rounded-xl eesm:text-center
    eesm:border-2 eesm:px-1 eesm:pt-4 eesm:pb-10 eesm:rounded-xl
    animate__animated animate__bounceInLeft  bg-white
    '> 
    {!username && (
        <Alert severity="warning" className=" mb-5">Please enter your username</Alert>
    )}
    {username && (
        <Alert severity="success"> Succesfull</Alert>
    )}
    
    <h1 className=' p-2 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>Null object example</h1>
    <p>By <span className=' font-bold'>Rickne Arohn Pacana</span> BSIT 3R4</p>
    <div className=' w-full esm:px-0 px-5 '>
    
      <div className='py-5'>
      
      <TextField id="outlined-basic" label="Username" variant="outlined" type={'username'} style={{width: '100%'}} value={username} onChange={(e) => setUsername(e.target.value)} />
      
      </div>
      <div className=''>
      <TextField id="outlined-basic" label="Password" variant="outlined" type={'password'} style={{width: '100%'}}  value={password} onChange={(e) => setPassword(e.target.value)} />
      
      </div>
      <div className='mt-5 gap-y-4 justify-center text-center  w-full esm:px-0 px-5'>
    <button type="submit" className=' active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md 'style={{width: '100%'}} onClick={handleSubmit}>Login</button>
   
    </div>
    </div>
   
  
   
    </div>
   
  );
};

  
  
