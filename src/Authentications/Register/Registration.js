import React from 'react';
// import {Nav} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import axios from 'axios';
import './Registration.scss'

export default function Registration() {
    const navigate=useNavigate();

    const ValidateForm=(formValue)=>{
        const errors={};
        const reg_exp=/^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/
        const reg_exp1=/^(?=.*[@!#$])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$/
        if(!formValue.username){
            errors.username="please enter username";
        }
        else if(formValue.username.length<6){
            errors.username="minimum length 6"
        }

        if(!formValue.email){
            errors.email="please enter email";
        }
        else if(!reg_exp.test(formValue.email)){
            errors.email="invalid email"
        }

        if(!formValue.password){
            errors.password="please enter password";
        }
        else if(!reg_exp1.test(formValue.password)){
            errors.password="invalid password"
        }

        console.log("eroors",errors);
        return errors;
    }

    const formik=useFormik({initialValues:{username:'',email:'',password:""},
                                          validate:ValidateForm,
                                          onSubmit:(values)=>{
                                              console.log("received values",values);
                                              axios.post('https://project-node-1.herokuapp.com/postUserData',values)
                                              .then(res=>{console.log("axios res:",res);
                                              alert('Registration completed');
                                              navigate('/login');})
                                              .catch(eror=>{console.log("error in axios:",eror);})
                                          }});

  return (
  <div className='frm-bck'>
            <div className='frm-bck2' >
            
            <form onSubmit={formik.handleSubmit}>
                <h3>Registration</h3>

                <div className="form-group">
                    <label className='login1'>User name</label>
                    <input type="text" className="form-control" placeholder="User name" name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      onBlur={formik.handleBlur} />
                    {formik.touched.username && formik.errors.username ?
             (<span style={{color:'red'}}>{formik.errors.username}</span>): null}
                

                </div>

              

                <div className="form-group">
                    <label className='login1'>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"
                     onChange={formik.handleChange}
                     value={formik.values.email}
                     onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ?
             (<span style={{color:'red'}}>{formik.errors.email}</span>): null}
                </div>

                <div className="form-group">
                    <label className='login1'>Create Password</label>
                    <input type="password" className="form-control" placeholder="Create password" name="password"
                     onChange={formik.handleChange}
                     value={formik.values.password} />
                    {formik.touched.password && formik.errors.password ?
             (<span style={{color:'red'}}>{formik.errors.password}</span>): null}
                </div>
<br />
                <button type="submit" disabled={!formik.isValid && formik.dirty} className="btn btn-primary btn-block" id='regbtn'>Registration</button>
                <p className="forgot-password text-right">
                    {/* Already registered? <Nav.Link as={Link} to="/login"> LogIn here</Nav.Link> */}
                </p>
                </form>

        </div>
        </div>
  )
}
