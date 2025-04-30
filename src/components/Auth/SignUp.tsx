import React from "react";
import { useAuth0, RedirectLoginOptions } from "@auth0/auth0-react";

interface CustomRedirectLoginOptions extends RedirectLoginOptions {
  screen_hint?: string;
}

const SignUp: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    try {
      await loginWithRedirect({
        screen_hint: "signup",
      } as CustomRedirectLoginOptions);
    } catch (err) {
      console.error("Sign up failed:", err);
    }
  };

  const handleGoBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="form">
      <h2>Sign Up</h2>
      <div className="button-group">
        <button onClick={handleSignUp} className="button button-primary">
          Sign Up with Auth0
        </button>
        <button onClick={handleGoBack} className="button button-secondary">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SignUp;
