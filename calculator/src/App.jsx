// import { useState } from 'react';
import styles from './App.module.css'
import Buttonscontainer from './components/Buttonscontainer';
import Caldisplay from './components/Caldisplay';
function App() {
  // const [calulator, setCalulator] = useState("00")

  let Btnclick=(e)=>{
    console.log("Entered",e);
  }
  return (
    <div className={styles.calculator} >
      <Caldisplay />
      <Buttonscontainer handleclick={Btnclick}/>
    </div>
  );
}

export default App
