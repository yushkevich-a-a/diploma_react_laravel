import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ConfigSection from '../ConfigSection';
import SelectHall from '../SelectHall';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { putRequest } from '../../../../lib/api';
import { fetchDataSuccess } from '../../../../store/adminReducer/action';

function OpenSale(props) {
  const { data } = useSelector( store => store.adminReduser );
  const [ hallData, setHallData ] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setHallData({...data[0]});
  },[])

  const setOnSale = (id) => {
    setHallData({...data.find( item => item.id === id )});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reqData = {
        on_sale: !hallData.on_sale,
      }
      const data = await putRequest(`/hall/${hallData.id}`, { reqData });
      dispatch(fetchDataSuccess([...data.data]));                                 
    } catch (e) {
      console.log(e.message);
    }
  }
  
  return (
    <ConfigSection title={'открыть продажи'}>
      <SelectHall handleRequestData={setOnSale} resetData={setHallData} name='on_sale'/>
      {
        hallData && !hallData.on_sale && <Button handleClick={handleSubmit} title='открыть продажу билетов'/>
      }
      {
        hallData && hallData.on_sale && <Button handleClick={handleSubmit} title='закрыть продажу билетов' style='regular'/>
      }
    </ConfigSection>
  )
}

OpenSale.propTypes = {};

export default OpenSale;
