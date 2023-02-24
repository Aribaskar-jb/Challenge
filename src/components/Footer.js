import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import {storage} from "./firebase"
import {ref,uploadBytes} from 'firebase/storage'
import {v4} from 'uuid'

function Footer(){
  const [upload,setUpload]=useState(null)
  const uploadimg=async ()=>{
    if(upload==null)return;
    const imgref=  ref(storage,`images/${upload.name+v4()}`);
    uploadBytes(imgref,upload).then(()=>{
      console.log("image has been uploded")
    })
    console.log(upload)
  }
    return(
        <div style={{ position: "fixed",
            right: "35px",
            bottom: "35px"}}>
          <IconButton color="primary"  component="label" sx={{backgroundColor:"#1976d2",color:"#fff",width:"60px",height:"60px"}}
          
          >
            <input hidden accept="image/*" type="file" onClick={uploadimg} onChange={(event)=>{
              setUpload(event.target.files[0])
              
            }} />
            <AddIcon sx={{fontSize:"35px",color:"black"}} />
          </IconButton>
        </div>
    )
}
export default Footer;