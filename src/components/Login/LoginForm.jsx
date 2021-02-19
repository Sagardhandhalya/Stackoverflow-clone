import React,{useContext} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useAuth } from '../../context/auth-context';
import { Redirect } from 'react-router-dom'
import {AuthContext} from './../../context/auth-context'

const LoginForm = () => {

    const auth = useContext(AuthContext)
    console.log(auth);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''

        },
        validationSchema: Yup.object({

            email: Yup.string().email('* Invalid email address').required('* This Field Required'),
            password: Yup.string().required('* This Field Required').min(8, '* password is too short')
        }),
        onSubmit: values => {

            auth.login(values)
        },
    });
    return (

        auth.loggedIn() ? <Redirect to="/dashboard" /> :
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
            ) : null}


            <lable className="loginform-forgotpassword">
                <span htmlFor="password">Password</span>
                <a href="#"><small>Forgot password?</small></a> </lable>
            <input

                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
            ) : null}


            <button className="login-button" type="submit" disabled={formik.isSubmitting && formik.errors}>
                Submit
            </button>
        </form>
    );
};

export default LoginForm


// Method 1: 

// => use useAuth that you exported from auth useContext. have to import 1. useAuth

// Method 2 :

// => use useContext hook give context as argument . have to import 1. context 2. usecontext

// Method 3.

// => use Authcontext Consumer their children function has access of all value import 1.Context 2.Wrap component 

//  <AuthContext.Consumer>
//          { (auth) => ( <p>Sagar ... {JSON.stringify(auth)}</p>)
//          }
//          </AuthContext.Consumer>