import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light')  //wheater dark mode enable or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }


  return (
    <>
      
      <Navbar title="Text Utlis" aboutText="Website is under constraction,wait for more features...." mode={mode} toggleMode={toggleMode}></Navbar>
      {/* <Navbar ></Navbar> */}
      <div className="container my-5">
         <TextForm heading="Enter The Text To Analyze Below"/>
         {/* <About></About> */}
      </div>
     
     

    </>



  );
}

export default App;
