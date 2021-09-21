import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
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
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      showAlert("Dark mode has been enabled","Success");
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light mode has been enabled","Success");
    }
    
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils - Your ulimate guide" aboutText="About text utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3 .bg-info .bg-lighten-xl">
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text you wanna analyze" mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
