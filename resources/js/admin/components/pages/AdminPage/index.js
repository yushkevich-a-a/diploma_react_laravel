import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Header from '../../organisms/Header';
import Main from '../../organisms/Main';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../../store/adminReducer/action';

function AdminPage(props) {
  const { loading } = useSelector( store => store.adminReduser );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [])
  

  return (
    <>
      <Header />
      {
        loading && <div>загрузка</div>
      }
      {
        !loading && <Main/>
      }
    </>
  )
}

AdminPage.propTypes = {}

export default AdminPage;
