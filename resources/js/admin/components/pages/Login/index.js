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


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const  data = await postRequest('/tokens/create', formData);
      debugger;
    } catch (e) {

    }
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
            <label className="login__label" htmlFor="mail">
              E-mail
              <input className="login__input" type="mail" 
              value={formData.mail} onChange={handleChange} 
              placeholder="example@domain.xyz" name="mail" required/>
            </label>
            <label className="login__label" htmlFor="pwd">
              Пароль
              <input className="login__input" type="password" 
              value={formData.pwd} onChange={handleChange} 
              placeholder="" name="pwd" required/>
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
