import React, {useState, useEffect} from 'react'
import './App.css' 

function App() {

  const [input, setInput]=useState('0')
  const [operator, setOperator]=useState(null)
  const [total, setTotal]=useState(false)
  const [current, setCurrent]=useState('')
  const [previous, setPrevious]=useState('')
  
  //This renders the default input to zero on initial load on the calculator.
  useEffect(()=>{
    setInput('0')
    },[])
    
 //This re-renders the application at every input 
  useEffect(()=>{
    setInput(current)
  },[current])


// this takes the state back to its initial state
  const Reset=()=>{
setCurrent('')
setPrevious('')
setInput('0')
  }

  const Equals=(e)=>{
if (e.target.innerText==='='){
  setTotal(true)
  }

let cal 
switch (operator) {
  case '/':
    cal = String(parseFloat(previous)/ parseFloat(current))
    
    break;
case '+':
  cal = String(parseFloat(previous)+parseFloat(current))

  break;
  case '-':
    cal = String(parseFloat(previous)-parseFloat(current))

    break;
    case 'x':
      cal = String(parseFloat(previous)*parseFloat(current))
      break;
  default:
    return;
}
setInput('0')
setPrevious(cal)
setCurrent('')

  }
  

  
  const Operators=(e)=>{
setTotal(false)
setOperator(e.target.innerText)
if(current==='') return 
if(previous !== ''){
  Equals(e)
} else {
  setPrevious(current)
  setCurrent('')
}



  }

  const inputNum=(e)=>{
if (current.includes('.')&& e.target.innerText==='.') return

  if(total){
    setPrevious('')
  }
  current ? setCurrent(previous=> previous + e.target.innerText):setCurrent(e.target.innerText)
  setTotal(false)

  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{input !== ''|| input === '0' ? input || 0 : previous}</div>
        <div className="btn grey" onClick={Reset}>AC</div>
        <div className="btn grey">+/-</div>
        <div className="btn">%</div>
        <div className="btn orange" onClick={(e)=> Operators(e)}>/</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>7</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>8</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>9</div>
        <div className="btn orange" onClick={(e)=> Operators(e)}>x</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>4</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>5</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>6</div>
        <div className="btn orange" onClick={(e)=> Operators(e)}>-</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>1</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>2</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>3</div>
        <div className="btn orange" onClick={(e)=> Operators(e)}>+</div>
        <div className="btn zero" onClick={(e)=> inputNum(e)}>0</div>
        <div className="btn" onClick={(e)=> inputNum(e)}>.</div>
        <div className="btn" onClick={(e)=>Equals(e)}>=</div>
      </div>
      
    </div>
  )
}

export default App
