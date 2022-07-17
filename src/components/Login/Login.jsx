import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loginWithData } from "../../redux/auth-reducer";
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component='input' name='email' type='email' placeholder='E-Mail' />
    </div>
    <div>
      <Field component='input' name='password' type='password' placeholder='Password' />
    </div>
    <div>
      <Field component='input' name='rememberMe' type='checkbox' />remember me
    </div>
    <div>
      <button type='submit'>
        Log In
      </button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    let { email, password, rememberMe } = formData;
    props.loginWithData(email, password, rememberMe);
  }

  if (props.isAuth) {
      return <Navigate to={'/profile'} replace={true}/>
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { loginWithData })(LoginPage);
