// Libraries
import React from 'react';

// Components
import FormInput from '../form-input/form-imput.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

// Styles
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    // Handles form submit
    handleSubmit = event => {
        event.preventDefault();
        this.state({ email: "", password: ""});

    }

    // Handles email change
    handleChange = event => {
        const { name, value } = event.target;
        // email: value OR password: value
        this.setState({ [name]: value });
    }

    render(){
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label={"E-mail"} required/>

                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label={"Password"} required/>

                    <div className="buttons">
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            Sign in with Google 
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;