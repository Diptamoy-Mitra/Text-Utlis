import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light')  //wheater dark mode enable or not
  const [alert, setAlert]=useState(null);



  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type:type,
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
 

  return (
    <>
      
      <Navbar title="Text Utlis" aboutText="Website is under constraction,wait for more features...." mode={mode} toggleMode={toggleMode}></Navbar>
      {/* <Navbar ></Navbar> */}
      <Alert alert={alert}></Alert>
      <div className="container my-5">
         <TextForm  showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>
         {/* <About></About> */}
      </div>
     
     

    </>



  );
}

export default App;
