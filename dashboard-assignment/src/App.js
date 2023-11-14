import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    console.log("App[[")
  },[])

  return (
   <>
       <Dashboard/>
   </>
  );
}

export default App;
  