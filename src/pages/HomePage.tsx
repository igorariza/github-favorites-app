import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to GitHub Favorites</h1>
                <p>Discover and manage your favorite GitHub repositories with ease.</p>
            </header>
            <div className="homepage-buttons">
                <button onClick={() => handleNavigation('/signup')} className="btn btn-signup">
                    Sign Up
                </button>
                <button onClick={() => handleNavigation('/login')} className="btn btn-login">
                    Login
                </button>
                <button onClick={() => handleNavigation('/profile')} className="btn btn-profile">
                    Profile Page
                </button>
            </div>
        </div>
    );
};

export default HomePage;