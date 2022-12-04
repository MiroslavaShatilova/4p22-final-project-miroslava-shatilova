import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Registration.css';

function RegistrationPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordrepeat, setPasswordrepeat] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordrepeatDirty, setPasswordrepeatDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле обязательно для заполнения');
  const [passwordError, setPasswordError] = useState('Поле обязательно для заполнения');
  const [passwordrepeatError, setPasswordrepeatError] = useState('Пароли должны совпадать');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError || passwordrepeatError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError, passwordrepeatError]);

  const nameHandler = (e) => {
    setName(e.target.value);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email введён некорректно');
      if (!e.target.value) {
        setEmailError('Поле обязательно для заполнения');
      }
    } else {
      setEmailError('');
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError('Пароль должен быть не менее 8 символов');
      if (!e.target.value) {
        setPasswordError('Поле обязательно для заполнения');
      }
    } else {
      setPasswordError('');
    }
  }

  const passwordrepeatHandler = (e) => {
    setPasswordrepeat(e.target.value);
    if ( e.target.value !== password) {
      setPasswordrepeatError('Пароли должны совпадать');
    } else {
      setPasswordrepeatError('');
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      case 'passwordrepeat':
        setPasswordrepeatDirty(true);
        break;
    }
  }
  const onClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const person = {
      name: name,
      email: email,
      password: password
    }
    console.log(person);
  }
  return (
    <div className="Registration">
      <form className="Registration-form">
        <h1 className="Registration-title">Registration</h1>
        <div className="Registration-name">
          <label htmlFor="email">Name</label><br />
          <input
            value={name}
            onChange={e => nameHandler(e)}
            onBlur={e => blurHandler(e)}
            name="name" type="text"
            id="name"
            placeholder="Enter your name"
          /> <br />
        </div>
        <div className="Registration-mail">
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
        <div className="Registration-password">
          {(passwordDirty && passwordError) && <p style={{ color: "red" }}>{passwordError}</p>}
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
        <div className="Registration-password2">
          {(passwordrepeatDirty && passwordrepeatError) && <p style={{ color: "red" }}>{passwordrepeatError}</p>}
          <label htmlFor="passwordrepeat">Сonfirm password</label><br />
          <input
            value={passwordrepeat}
            onChange={e => passwordrepeatHandler(e)}
            onBlur={e => blurHandler(e)}
            name="passwordrepeat"
            type="password"
            id="passwordrepeat"
            placeholder="Сonfirm password"
          /><br />
        </div>
        <NavLink to={'/'}>
          <Button disabled={!formValid} onClick={onClick}>Registration</Button>
        </NavLink>
      </form>
    </div>
  )
}


export default RegistrationPage;
