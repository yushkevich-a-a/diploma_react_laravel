import React, { useState } from 'react';
import Header from '../../organisms/Header';
import { postRequest } from '../../../../lib/api';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchDataComplete, fetchDataError } from '../../../../store/adminReducer/adminSlice';
import GlobalLoader from '../../organisms/Loaders/GlobalLoader';
import Error from '../../organisms/Errors/Error';
import Button from '../../atoms/Button/Button';
import AdminBackgroundWrapper from '../../templates/AdminBackgroundWrapper';

function Login(props) {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector( store => store.admin );
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData( prevState => ({...prevState, [name]: value}));
  }


  const handleSubmit = async (e) => {

    e.preventDefault();
    dispatch(fetchData());
    try {
      const data = await postRequest('/token', formData);
      localStorage.setItem('token', data.data);
      dispatch(fetchDataComplete());
      navigate('/admin', { replace: true });
    } catch (e) {
      dispatch(fetchDataError(e.message));
    }
  }

  return (
    <AdminBackgroundWrapper>
      <Header />
      {
        loading && <GlobalLoader />
      }
      {
        error && <Error error={error} />
      }
      <main>
        <section className="login">
          <header className="login__header">
            <h2 className="login__title">Авторизация</h2>
          </header>
          <div className="login__wrapper">
            <form onSubmit={handleSubmit} className="login__form" acceptCharset="utf-8">
              <label className="login__label" htmlFor="email">
                E-mail
                <input className="login__input" type="mail" 
                value={formData.email} onChange={handleChange} 
                placeholder="example@domain.xyz" name="email" required/>
              </label>
              <label className="login__label" htmlFor="pwd">
                Пароль
                <input className="login__input" type="password" 
                value={formData.password} onChange={handleChange} 
                placeholder="" name="password" required/>
              </label>
              <div className="text-center">
                <Button type="submit" handleClick={handleSubmit} title='Авторизоваться'/>
              </div>
            </form>
          </div>
        </section>
      </main>
    </AdminBackgroundWrapper>
  )
}

export default Login;
