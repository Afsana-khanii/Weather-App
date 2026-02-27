import React, { useState ,useEffect,useRef} from "react";
const Otp=()=>{
  const [inputs,setInputs] = useState(new Array(4).fill(''))
  const [msg,setMsg]=useState(false)
  const [inputArr,setInputArr]= useState(inputs)
  const refs = [useRef(),useRef(),useRef(),useRef()];
  const handleInput=(e,index)=>{
    const val = e.target.value
    if(!Number(val))
    return;

    const copyArr= [...inputArr]
    copyArr[index]=val
    setInputArr(copyArr)
    refs[index + 1].current.focus()
  }
  const handleKey = (e,index)=>{
    if(e.keyCode == 8){
        const copyArr=[...inputArr]
        copyArr[index]= ''
        setInputArr(copyArr)
        if(index>0){
        refs[index-1].current.focus()}
    }
    if(index < inputArr.length-1){
if(e.keyCode==39){
    refs[index+1].current.focus()
}
}

if(index > 0) {
if(e.keyCode==37){
    refs[index-1].current.focus()
}
}
}
const handlePaste=(e)=>{
const data = e.clipboardData.getData('text')
console.log(data)
const dataArray = data.split("")
setInputArr(dataArray)
refs[inputArr.length-1].current.focus()
}
const handleSubmit=()=>{
    inputArr.map((curVal,index)=>{
  if(curVal==""){
 setMsg(false)
  }else{
    setMsg(true)
  }
    })
}
  useEffect(()=>{
refs[0].current.focus()
  },[])
  
  return(
        <div className="Container">
            <h1>OTP Fields</h1>
            <h3>{msg?"Verifified":"Please fill the OTP"}</h3>
            {inputs.map((curVal,index)=>{
                return <input ref={refs[index]}
                onKeyDown={(e)=>handleKey(e,index)}
                onPaste={handlePaste}
                maxLength="1" value={inputArr[index]} key  ={index} type = "text" onChange = {(e)=>handleInput(e,index)}></input>
            })}
            <br></br>
            <button onClick = {handleSubmit}>verify</button>
        </div>
    )
}
export default Otp