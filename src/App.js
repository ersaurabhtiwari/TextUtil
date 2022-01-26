// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1000);
  }
  const toogleMode=()=>{
       if(mode==="light"){
         setMode("dark");
         document.body.style.backgroundColor='gray';
         showAlert("Dark mode has been Enabled","success");
         document.title="textUtils-dark mode";
       }
       else{
         setMode("light");
         document.body.style.backgroundColor='white';
         showAlert("Light mode has been Enabled","success");
         document.title="textUtils-light mode";
       }
  }
  return (
    <>
    <Router>
        <Navbar ram="TextUtils" mode={mode} shyam="Home" kam="About Us" toogleMode={toogleMode}/>
          <Alert alert={alert}/>
        <div className="container my-5">
           <Routes>
                <Route exact path="/about" element={<About mode={mode}/>} />
                <Route  exact path="/" element= {<Textarea Textarea="Write text here in below" showAlert={showAlert} mode={mode}/>} />        
           </Routes> 
        </div>    
   </Router> 
    </>
  );
}

export default App;
