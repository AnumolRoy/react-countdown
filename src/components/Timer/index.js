import React, { useEffect, useState } from 'react'
import './style.css'

function Timer() {
    const [time,setTime]=useState(0);
    const [startTimer,setStartTimer]=useState(false);
    const [timerId,setTimerId]=useState(0);

  
  useEffect(()=>{
let intervalid=null;
if(startTimer){
    intervalid=setInterval(()=>{
        setTime(prev=>prev+=1);
    },1000);
    setTimerId(intervalid)
}else{
    clearInterval(timerId);
}
  },[startTimer])
  
  
    return (
    <div className='container'>
        <div className='time'>{time}</div>
        <div className='button-wrap'>
            <button className='button btn-start' onClick={()=>setStartTimer(true)}>Start</button>
            <button className='button btn-stop' onClick={()=>setStartTimer(false)}>Stop</button>

        </div>
    </div>
  )
}

export default Timer