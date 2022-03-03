import React from 'react';
import {useFormik} from 'formik'
import axios from 'axios';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate=useNavigate();

    const ValidateLoginForm=(formValue)=>{
        const errors={};
        const reg_exp=/^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/
        const reg_exp1=/^(?=.*[@!#$])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$/
        

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
    
    const formik=useFormik({initialValues:{email:'',password:''},
                                          validate:ValidateLoginForm,
                                          onSubmit:(values)=>{
                                            console.log("received1 values",values);
                                           
                                            axios.post('https://project-node-1.herokuapp.com/postLoginData',values)
                                            .then(res=>{console.log("axios res:",res);
                                        window.localStorage.setItem("Token",res.data.token);
                                        window.localStorage.setItem("username",res.data.result.userName);
                                        alert('logged in successfully');
                                    navigate('/gift-cards');})
                                            .catch(eror=>{console.log("error in axios:",eror);})
                                          }});
  return (
    <div className='frm-bck'>
    <div className='frm-bck2' >
    
    <form onSubmit={formik.handleSubmit}>
        <h3>Login</h3>

        <div className="form-group">
            <label className='login1'>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" name="email"
             onChange={formik.handleChange}
             value={formik.values.email} 
             onBlur={formik.handleBlur}/>
             {formik.touched.email && formik.errors.email ?
             (<span style={{color:'red'}}>{formik.errors.email}</span>): null}
        
        </div>
<br />
        <div className="form-group">
            <label className='login1'>Enter Password</label>
            <input type="password" className="form-control" placeholder="Enter password" name="password"
             onChange={formik.handleChange}
             value={formik.values.password}
             onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password ?
             (<span style={{color:'red'}}>{formik.errors.password}</span>): null}
        </div>
<br />
        <button type="submit" disabled={!formik.isValid && formik.dirty} className="btn btn-primary btn-block" id='loginbtn'>Login</button>
        <p className="forgot-password text-right">
            {/* Already registered? <Nav.Link as={Link} to="/login"> LogIn here</Nav.Link> */}
        </p>
        </form>

</div>
</div>
)}
