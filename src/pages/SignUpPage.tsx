import React from 'react';
import SignUp from '../components/Auth/SignUp';
import '../styles/global.css';

const SignUpPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="header">Sign Up</h1>
            <SignUp />
        </div>
    );
};

export default SignUpPage;