import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ImgCard from "./components/Card"
import Grid from '@mui/material/Grid';
import { ref,listAll,getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';
import {storage} from "./components/firebase"


function App() {
  const [imglist,setImglist]=useState([])
  const imglistref=ref(storage,"images/")
  useEffect(()=>{
    listAll(imglistref).then((event)=>{
      event.items.forEach((items)=>{
        getDownloadURL(items).then((url)=>{
          setImglist((pre)=>[...pre,url])
        })
      })
    })
  },[])
  console.log("this"+ imglist)
  return (
    <div className="App">
      <Nav />
      <Grid container spacing={6} sx={{ justifyContent: "center" }}>
        { imglist.map( (url)=>{
          return <ImgCard Img={url}/>
        })}
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
