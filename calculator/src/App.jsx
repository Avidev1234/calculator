import { useState } from 'react';
import styles from './App.module.css'
import Buttonscontainer from './components/Buttonscontainer';
import Caldisplay from './components/Caldisplay';
function App() {
  const [calculator, setCalculator] = useState("")
  const btnselectClick =(btnText)=>{
    console.log("Enter",btnText);
    if (btnText ==='=') {
      // 
      const res=eval(calculator);
      setCalculator(res)
    } else if(btnText === 'C') {
      // 
      setCalculator('')
    }else{
      let newVal=calculator+btnText;
      setCalculator(newVal)
    }
  }
  // const calculators =()=>{

  // }
  return (
    <div className={styles.calculator} >
      <Caldisplay  calculators={calculator}/>
      <Buttonscontainer  btnClick={btnselectClick}/>
    </div>
  );
}

export default App
