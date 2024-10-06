// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './components/Home.jsx';
import Login from './components/Login.jsx'
import './App.css';
import SignUp from './components/SignUp';
import { useState } from 'react';

function App() {
  let [firstPage, modify] = useState(0);
  if (firstPage == 0) {
    return (<Login modify={modify}></Login>)
  }
  else if(firstPage == 1){
    return(<SignUp modify={modify}></SignUp>)
  }

    return (<Home></Home>)
  
  
}

export default App
