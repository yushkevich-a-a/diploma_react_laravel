import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Header from '../../organisms/Header';
import Main from '../../organisms/Main';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminData, fetchFilms } from '../../../../store/adminReducer/action';
import GlobalLoader from '../../organisms/Loaders/GlobalLoader';
import Error from '../../organisms/Errors/Error';
import { useNavigate } from 'react-router';

function AdminPage(props) {
  const { loading, error } = useSelector( store => store.adminReduser );
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(fetchAdminData());
      dispatch(fetchFilms());
    } else {
      navigate('/login', { replace: true })
    }
  }, [])
  

  return (
    <>
      <Header />
      {
        loading && <GlobalLoader />
      }
      {
        error && <Error error={error} />
      }
      <Main/>
    </>
  )
}

AdminPage.propTypes = {}

export default AdminPage;
