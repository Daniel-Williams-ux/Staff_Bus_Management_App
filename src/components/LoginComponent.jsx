import { useState } from 'react';
import LoginApi from '../api/AuthApi';
import { RegisterAPI } from '../api/AuthApi';
import GoogleButton from 'react-google-button'
import '../Sass/LoginComponent.scss';
import Logo from "../assets/bustraklogo.jpg";

const LoginComponent = () => {

  const [credentials, setCredentials] = useState({})
  const login = async () => {
    try {
      let res = LoginApi(credentials.email, credentials.password);
      toast.success("You have successfully signed-in to CareerLink")
      return res
    } catch (err) {
      return err
    }
  };
  return (
    
    <div className="login-wrapper">
      <img src={Logo} className="carrerLinkLogo" />

      <div className="auth-inputs">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay informed while on the way.</p>

        <div className="auth-form-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton  className="google-btn" onClick={() => {
           console.log('Google button click')
        }} />
        <p className="go-to-signup">
          New to BusTrak?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  )
}

export default LoginComponent;