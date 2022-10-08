import React, {useState, useEffect} from 'react'
import './App.css' 

function App() {

  const [input, setInput]=useState('0')
  const [operator, setOperator]=useState(null)
  const [total, setTotal]=useState(false)
  const [current, setCurrent]=useState('')
  const [previous, setPrevious]=useState('')

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen"></div>
        <div className="btn grey" >AC</div>
        <div className="btn grey">+/-</div>
        <div className="btn">%</div>
        <div className="btn orange" onClick={(e)=> Operators(e)}>/</div>
        <div className="btn" >7</div>
        <div className="btn" >8</div>
        <div className="btn" >9</div>
        <div className="btn orange" onClick={(e)=> Operators(e)}>x</div>
        <div className="btn" >4</div>
        <div className="btn" >5</div>
        <div className="btn" >6</div>
        <div className="btn orange" onClick={(e)=> Operators(e)}>-</div>
        <div className="btn" >1</div>
        <div className="btn" >2</div>
        <div className="btn" >3</div>
        <div className="btn orange" onClick={(e)=> Operators(e)}>+</div>
        <div className="btn zero" onClick={(e)=> inputNum(e)}>0</div>
        <div className="btn" >.</div>
        <div className="btn" >=</div>
      </div>
      
    </div>
  )
}

export default App

