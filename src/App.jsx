
import { useEffect } from 'react';
import './App.css';
import Pages from './pages/Pages';
import AOS from "aos"
import "aos/dist/aos.css"


function App() {
  
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }
  , [])
  



  return (
    <>
      <Pages/>
    </>
  );
}

export default App;
