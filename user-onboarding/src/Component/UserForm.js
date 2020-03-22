import React from 'react';
import { withFormik, Form, Field } from 'formik';

const UserForm = () => {
    return (
        <Form>
            <label htmlFor="name">Name:</label>
            <label htmlFor="email">Email:</label>
        </Form>
    )
};

export default UserForm;