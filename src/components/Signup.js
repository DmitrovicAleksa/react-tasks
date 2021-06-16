import React from 'react';
import {Formik, Form} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
    const validate = Yup.object({
        userName : Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Username is required'),
        email : Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password : Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
        confirmPassword : Yup.string()
        .oneOf([Yup.ref('password'),null], 'Password must match')
        .required('Confirm password is required'),

    })
    return(
        <Formik
            initialValues={{
                userName : '',
                email : '' ,
                password : '',
                confirmPassword : ''
            }}
            validationSchema={validate}
        >
            {formik => (
                <div>
                    <h1>Sign up</h1>
                    <Form>
                        <TextField label="username:" name="userName" type="text"/>
                        <TextField label="email:" name="email" type="email"/>
                        <TextField label="password:" name="password" type="password"/>
                        <TextField label="confirm password:" name="confirmPassword" type="password"/>
                        <button type="submit">Register</button>
                        <button type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
    
}