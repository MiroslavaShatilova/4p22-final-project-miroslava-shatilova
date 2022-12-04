import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import './Login.css';

function LoginPage () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле обязательно для заполнения');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email введён некорректно');
      if (!e.target.value) {
        setEmailError('Поле обязательно для заполнения');
      } else {
      setEmailError('');
    }
    } 
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
    }
  }
  const onClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const person = {
      email: email,
      password: password
    }
    console.log(person);
  }
  return (
    <div className="Login">
      <form className="Login-form">
        <h1 className="Login-title">Login</h1>
        <div className="Login-mail">
          {(emailDirty && emailError) && <p style={{ color: "red" }}>{emailError}</p>}
          <label htmlFor="email">Email</label><br />
          <input
            value={email}
            onChange={e => emailHandler(e)}
            onBlur={e => blurHandler(e)}
            name="email" type="text"
            id="email"
            placeholder="Enter E-mail"
          /> <br />
        </div>
        <div className="Login-password">
        <label htmlFor="password">Password</label><br />
          <input
            value={password}
            onChange={e => passwordHandler(e)}
            onBlur={e => blurHandler(e)}
            name="password"
            type="password"
            id="password"
            placeholder="Enter  password"
          /><br />
        </div>
          <Button disabled={!formValid} onClick={onClick}>Log on</Button>
      </form>
    </div>
  )
}

export default LoginPage;