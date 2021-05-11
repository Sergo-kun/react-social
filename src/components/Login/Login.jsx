import React from 'react';
import classes from './Login.module.css'
import { Form, Formik} from "formik";
import * as Yup from 'yup'
import {connect} from "react-redux";

import {Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";
import {login} from "../../redux/auth-reducer";


const initialValues = () =>{
    return (
        {
            email: '',
            password: '',
            checkBox: false,
            captcha: ''
        }
    )
}
const validate = (values) =>{
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}




const LoginForm = (props) =>{
    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {

            props.login(values)
        }, 400);
    }



    return(
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}

        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Email:"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />{errors.email && touched.email && errors.email}<br/>

                    <input
                        placeholder="Password:"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    /><br/>
                    {errors.password && touched.password && errors.password}<input

                        type="checkBox"
                        name="checkBox"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.checkBox}
                    /><br/>
                    {props.captcha && <img src={props.captcha}/>}<br/>
                    {props.captcha && <input

                        type="text"
                        name="captcha"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.captcha}
                    />}

                    <button type="submit" >
                        Submit
                    </button>
                    {props.isError ? <p className={classes.errorLOrP}>Incorrect password or email.</p> : null}
                </form>
            )}
        </Formik>
)
}

const Login = (props) => {
    const onSubmit = (formData) => {

        props.login(formData.email, formData.password, formData.checkBox, formData.captcha);
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={classes.login}>
            <h4>Login</h4>
            <LoginForm captcha={props.captcha} isError={props.isError} login={onSubmit}/>

        </div>
    );
}
const mapState = (state) => {

    return{
        isAuth: state.auth.isAuth,
        isError: state.auth.isError,
        captcha: state.auth.captcha
    }
}

export default connect(mapState,{login})(Login)












