// import logo from './logo.svg';
import { useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const[mode,setmode]=useState('light');
  const[btnText,setbtnTxt]=useState('Enable Dark Mode')
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
  })
  setTimeout(() => {
    setalert(null)
  }, 2000);
  }
  const removebodycls=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode=(cls)=>{
    removebodycls()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setmode('grey');
      setbtnTxt('Enable Light Mode')
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled","success")
      // setInterval(() => {
      //   document.title="Textutils-Dark Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Textutils is amazing"
      // }, 1500);
    }
    
    else{
      setmode('light')
      setbtnTxt('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success")
      // document.title="Textutils-Light Mode"
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" btnText={btnText} mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
    <Alert alert={alert}/>
    <TextForm Heading="Textutils-WordCounter | CharecterCounter | Uppercase to Lowercase | Lowercase to Uppercase"  showalert={showalert} mode={mode} Exampletextarea="Example textarea -007 "/>
    <div className="container">
    <Routes>
      <Route path="/about"element={<About/>}/>
    </Routes>
    </div>
    </Router>
    </>
    )
}
export default App;
