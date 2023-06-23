import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')  //wheater dark mode enable or not
  const [alert, setAlert] = useState(null);



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtlis - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtlis - Light Mode";
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  return (
    <>
      <Router>
        <Navbar title="Text Utlis"  mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-5">

          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} />} />
            <Route path="/about" element={ <About mode={mode}></About>}/>
          </Routes>
        </div>
      </Router>

    </>



  );
}

export default App;
