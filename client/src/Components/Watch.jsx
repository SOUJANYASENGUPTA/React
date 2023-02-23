import { useEffect, useRef, useState } from "react"
import './watch.css';
const Watch = ()=>{
    const [seconds,setSecond] = useState(0);
    const [minute,setMinute]  = useState(0);
    const [hour,setHour] = useState(0);
    const [pause,setPause] = useState(false);
    const [butt,setButt] = useState("Start");
    const [res,setRes] = useState(false);
    function changeText(){
        if(pause){
            setButt("Pause");
        }
        else{
            setButt("Resume");
        }
    }
    
    useEffect(()=>{
        handleTime();
        return ()=>clearInterval(id.current);
        
    },[]);
     
    let id = useRef();
    

    function handleTime(){
        setPause(!pause)
        if(pause){
        id.current = setInterval(()=>{
            setSecond(seconds=>seconds+1);
        },1000);
        //console.log(seconds);
        //setMinute(minute=>(seconds==59 ? minute+1:minute));
    }
        else
        clearInterval(id.current);
    }

    function reset(){
         clearInterval(id.current);
         setSecond(0);
         if(pause===false){
         changeText();
         handleTime();
         }
    }
      
    if(seconds===60){
        setMinute(minute=>minute+1);
        setSecond(0);
    }
    if(minute===60){
        setHour(hour=>hour+1);
        setMinute(0);
    }
    return(
       <div align="center" className="card">
        <div className="container">
        <h1 className="head1">React Stopwatch</h1>
        <h1 className="head2">{hour<10?"0"+hour:hour}:{minute<10?"0"+minute:minute}:{seconds<10?"0"+seconds:seconds}</h1>
        <button className = "button1" onClick={()=>{handleTime();changeText();setRes(true);}}>{butt}</button>
        <button className="button2" disabled={!res} onClick={()=>{reset();setButt("Start");setRes(false);}}>Reset</button>
         </div>        
        </div>
        
    );
}
export default Watch;