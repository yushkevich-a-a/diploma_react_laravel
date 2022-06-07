import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Header from '../../organisms/Header';
import Main from '../../organisms/Main';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminData, fetchData, fetchDataComplete, fetchDataError, fetchFilms } from '../../../../store/adminReducer/action';
import GlobalLoader from '../../organisms/Loaders/GlobalLoader';
import Error from '../../organisms/Errors/Error';
import { useNavigate } from 'react-router';
import { getRequest } from '../../../../lib/api';
import AdminBackgroundWrapper from '../../templates/AdminBackgroundWrapper';

function AdminPage(props) {
  const { loading, error } = useSelector( store => store.adminReducer );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login', { replace: true });
      return;
    }
    dispatch(fetchAdminData());
    dispatch(fetchFilms());
  }, []);

  const handleLogout = async () => {
    dispatch(fetchData());
    try {
      const data = await getRequest('/logout');
      localStorage.removeItem('token');
      navigate('/login', { replace: true });
      dispatch(fetchDataComplete());
    } catch(e) {
      dispatch(fetchDataError(e.message));
    }
  }

  return (
    <AdminBackgroundWrapper>
      <div className="header-wrapper">
        <Header />
        <div className="logout-btn" onClick={handleLogout}>logout</div>
      </div>
      {
        loading && <GlobalLoader />
      }
      {
        error && <Error error={error} />
      }
      <Main/>
    </AdminBackgroundWrapper>
  )
}

AdminPage.propTypes = {}

export default AdminPage;
