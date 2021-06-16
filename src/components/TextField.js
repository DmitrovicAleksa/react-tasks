import React from 'react';
import {ErrorMessage, useField } from 'formik';


export const TextField = ({label, ...props}) => {
    const [field,meta] = useField(props);
    return(
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input type="text" {...field} {...props}></input>
            <ErrorMessage name={field.name}/>
        </div>
    );
}