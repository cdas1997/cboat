import React,{useState} from 'react'
import './Contact.scss'
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import axios from 'axios';
export default function Contact() {
    const navigate=useNavigate();
const validetemail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
const validetpassword=RegExp('^(?=.*[@!#$])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$');
const validetphone=RegExp('^(?:(?:.+|0{0,2})91(.*[.-].*)?|[0]?)?[6789].{9}$');
	const [inputState,setInputState]=useState({isError:{fname:"",lname:"",email:"",phone:"",password:""}});
	const handlChange=(event)=>{
     event.persist();
// console.log("event value",event);
let {name,value}=event.target;
let errMsg={...inputState.isError};
switch(name)
{
	              case "fname" :errMsg.fname =value.length<5 ?"Atleast 5 characters required" :"";
	              break;
				  case "lname" :errMsg.lname =value.length<3 ?"Atleast 3 characters required" :"";
	              break;
				  case "email" :errMsg.email =validetemail.test(value)?"" :"Give a valid email";
	              break;
				  case "phone" :errMsg.phone =validetphone.test(value)?"" :"Giva a valid phone number";
	              break;
				  case "password" :errMsg.password =validetpassword.test(value)?"" :"Password must contain atleast one Capital letter atleast one Small letter atleast one Number and atleast one Special character";
	              break;
				  default: break;
}
    setInputState({...inputState,[name]:value,isError:errMsg});
    console.log("InputState:",inputState);
	}


	const submitHandler=(event)=>{
		event.preventDefault();
		console.log(" after sumissionInputState:",inputState);
		axios.post('https://jsonplaceholder.typicode.com/users',inputState)
		.then(res=>{console.log("axios res:",res);
    
        alert('Your Response has been submitted successfully ');
        navigate('/home');})
        
		.catch(eror=>{console.log("error in axios:",eror);})
	}

    return (
        <Form className="container contact" onSubmit={submitHandler}>
	<div className="row">
		<div className="col-md-3">
			<div className="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="Error"/>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-2" >First Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" onChange={handlChange}></input>
					{inputState.isError.fname.length>0 && (<span className='span'>{inputState.isError.fname}</span>)}
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" >Last Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" onChange={handlChange}></input>
					{inputState.isError.lname.length>0 && (<span className='span'>{inputState.isError.lname}</span>)}
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" >Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={handlChange}></input>
					{inputState.isError.email.length>0 && (<span className='span'>{inputState.isError.email}</span>)}
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" >Phone no:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="phone" placeholder="Enter phone no" name="phone" onChange={handlChange}></input>
					{inputState.isError.phone.length>0 && (<span className='span'>{inputState.isError.phone}</span>)}
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" >Password:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" id="password" placeholder="Enter password" name="password" onChange={handlChange}></input>
					{inputState.isError.password.length>0 && (<span className='span'>{inputState.isError.password}</span>)}
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" >Comment:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="4" id="comment" name="comment" onChange={handlChange}></textarea>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="contactbtn">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</Form>

    )
}
