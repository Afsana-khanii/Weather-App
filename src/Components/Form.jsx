import React, { useState } from "react"
const Form=()=>{
    const[name,setName]=useState()
      const[email,setEmail]=useState()
      const[password,setPassword]=useState()
      const[confirmPass,setConfirmPass]=useState()
      const handleSubmit=(e)=>{
        event.preventDefault();
        if(name && email && password && confirmPass ){
            if(password === confirmPass){
                alert("Signup successfull")
            }else{
                alert("ERROR:password and confirm password must be same")
            }
        } else {
            alert("All fields are required")
        }
      }
     
    return(
        <div>
  < form onSubmit = {handleSubmit}>
    <div className='heading'>Sign up</div>
    <div>
        <p className='fieldName'>Name</p>
        <input type = 'text' onChange={(e)=>setName(e.target.value)}/>
        <p className={name?"data":'noData'}>{name ? "":"Name is required"}</p>
    </div>
    <div>
        <p className='fieldName'>Email</p>
        <input type = 'email' onChange={(e)=>setEmail(e.target.value)}/>
        <p className={email?"data":'noData'}>{email? "":"Email is required"}</p>
    </div>
    <div>
        <p className='fieldName'>password</p>
        <input type = 'password' onChange={(e)=>setPassword(e.target.value)}/>
        <p className={password?"data":'noData'}>{password ? "":"password is required"}</p>
    </div>
    <div>
        <p className='fieldName'>confirm password</p>
        <input type = 'password' onChange={(e)=>setConfirmPass(e.target.value)}/>
        <p className={confirmPass?"data":'noData'}>{confirmPass ? "":"confirm password is required"}</p>
    </div>
    <div> <button> Sign up
        </button></div>
  </form>
        </div>
    )
}
export default Form;