import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import './FeedBack.css';


function FeedBackPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле обязательно для заполнения');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError]);

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

  const messageHandler = (e) => {
    setMessage(e.target.value);
  }

  const fileHandler = (e) => {
    setFile(e.target.value);
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
      name: name,
      email: email,
      message: message
    }
    console.log(person);
  }
  return (
    <div className="FeedBack">
      <form className="FeedBack-form">
        <h1 className="FeedBack-title">Feed Back</h1>
        <div className="FeedBack-name">
          <label htmlFor="name">Name</label><br />
          <input
            value={name}
            onChange={e => nameHandler(e)}
            onBlur={e => blurHandler(e)}
            name="name" type="text"
            id="name"
            placeholder="Enter your name"
          /> 
        </div>
        <div className="FeedBack-mail">
          {(emailDirty && emailError) && <p style={{ color: "red" }}>{emailError}</p>}
          <label htmlFor="mail">E-mail</label><br />
          <input
            value={email}
            onChange={e => emailHandler(e)}
            onBlur={e => blurHandler(e)}
            name="email" type="text"
            id="mail"
            placeholder="Enter E-mail"
          /> 
        </div>
        <div className="FeedBack-message">
          <label htmlFor="message">Message</label><br />
          <textarea
            value={message}
            onChange={e => messageHandler(e)}
            onBlur={e => blurHandler(e)}
            name="message" type="text"
            id="message"
            placeholder="Enter your message"
          />
          </div>
          <div className="FeedBack-radio">
            <p>Gender</p>
            <div className="FeedBack-gender">
              <input 
                name="gender"
                type="radio"
                value="Man"
                id="man"
              />
               <label htmlFor="woman">Man</label><br />
            </div>
            <div className="FeedBack-gender"> 
              <input 
                name="gender"
                type="radio"
                value="Woman"
                id="woman"
              />
             <label htmlFor="woman">Woman</label>
            </div>
          </div>
          <div className="FeedBack-file">
            <input
              value={file}
              onChange={e => fileHandler(e)}
              onBlur={e => blurHandler(e)}
              name="file" type="file"
              multiple
            />
          </div>
          <div className="FeedBack-checkbox">
            <input id="check" name="check" type="checkbox" /> 
            <label htmlFor="check">I give consent to the processing of personal data</label>
          </div>
          <Button disabled={!formValid} onClick={onClick}>Send</Button>
      </form>
    </div>
  )
}

export default FeedBackPage;