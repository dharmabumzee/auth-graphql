import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { grahpql } from 'react-apollo';
import mutation from '../mutations/Signup'; 


class SignupForm extends Component {
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm />
            </div>
        )
    }
}

export default grahpql(mutation)(SignupForm);