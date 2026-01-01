import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Todos=()=>{
    const[task,setTask]= useState();
    const[data,setData] = useState([]);
 
    const getInput=(e)=>{
    setTask(e.target.value)
    }
       const getData=()=>{
        let store=[...data,task]
        setData(store)
        setTask('')
    }
 const deleteTask = (index)=>{
    let filterData = data.filter((curEle,id)=>{
    return id != index })
    setData(filterData)
 }
    return(
        <>
            <div className = 'container'>
         <div className = 'inputTask'>
            <input placeholder = 'Enter Task' value = {task} type = 'text' onChange = {getInput}/>
            <button onClick={getData}>Add</button>
         </div>
         {data.map((curVal,index)=>{
            return(
                <>
                <div className = 'taskData'>
                    <p>{curVal}</p>
              <p onClick  ={()=>deleteTask(index)}><FontAwesomeIcon icon={faXmark} /></p>
                </div>
                </>
            )
         })}
</div>
        </>
    )
}
export default Todos