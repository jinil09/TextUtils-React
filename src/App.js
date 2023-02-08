
import { useState } from 'react';
import './App.css';
import About from './componants/About';
import Alert from './componants/Alert';
import NavBar from './componants/NavBar';
import TextArea from './componants/TextArea';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {

    const[mode , setMode]= useState('light')
    const[alert , setAlert]= useState(null)

    const ShowAlert= (massage ,  type)=>{
        setAlert({
          msg: massage,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1000);
    }


    const ChangeMode= ()=>{
      if(mode==='light')
      {
        setMode("dark")
        document.body.style.backgroundColor = "#212529"
        ShowAlert("Dark Mode Has been Enabled" ,"success")
        document.title = 'TextUtils - Dark Mode';
        // setInterval(() => {
        //   document.title = 'TextUtils Is Very Amazing';
        // }, 2000);

        // setInterval(() => {
        //   document.title = 'Jinil install fast TextUtils';
        // }, 1500);
      }
      else
      {
        setMode("light")
        document.body.style.backgroundColor = "white"
        ShowAlert("Light Mode Has been Enabled" ,"success")
        document.title = 'TextUtils - Light Mode';
      }
    }

  return (
    <>
      <Router>
        <NavBar title="TextUtils2" mode={mode} ChangeMode={ChangeMode}/>
        
        <Alert alert={alert}/>

        {/* <div className="container"><About/></div> */}
        <div className="container"> 

            <Switch>
                <Route exact path="/about">
                  <About/>
                </Route>
                <Route exact path="/">
                  <TextArea ShowAlert={ShowAlert} heading="Hello Write somthing here Jinil" mode={mode}/>
                </Route>
            </Switch>
        
        </div> 
      </Router>
    </>
  );
}

export default App;