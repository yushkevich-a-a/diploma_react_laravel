import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/Header';

function Login(props) {
  const [ formData, setFormData ] = useState({
    mail: '',
    pwd: '',
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData( prevState => ({...prevState, [name]: value}));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <Header />
    <main>
      <section className="login">
        <header className="login__header">
          <h2 className="login__title">Авторизация</h2>
        </header>
        <div className="login__wrapper">
          <form className="login__form" acceptCharset="utf-8">
            <label className="login__label" for="mail">
              E-mail
              <input className="login__input" type="mail" placeholder="example@domain.xyz" name="mail" required/>
            </label>
            <label className="login__label" for="pwd">
              Пароль
              <input className="login__input" type="password" placeholder="" name="pwd" required/>
            </label>
            <div className="text-center">
              <input value="Авторизоваться" type="submit" className="login__button"/>
            </div>
          </form>
        </div>
      </section>
  </main>
  </>
  )
}

Login.propTypes = {}

export default Login
