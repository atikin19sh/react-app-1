import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loginWithData } from "../../redux/auth-reducer";
import { Navigate } from 'react-router-dom';
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import styles from './Login.module.css';

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field
        component={Input}
        name='email'
        type='email'
        placeholder='E-Mail'
        validate={[required]}
      />
    </div>
    <div>
      <Field
        component={Input}
        name='password'
        type='password'
        placeholder='Password'        
        validate={[required]}
      />
    </div>
    <div>
      <Field
        component='input'
        name='rememberMe'
        type='checkbox'
      />
      remember me
    </div>
    <div className={props.error ? styles.error : ''}>
      {props.error && <span>{props.error}</span>}
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
    return <Navigate to={'/profile'} replace={true} />
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
