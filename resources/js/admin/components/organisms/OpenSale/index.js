import React, { useEffect, useState } from 'react';
import ConfigSection from '../ConfigSection';
import SelectHall from '../SelectHall';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { getRequest, putRequest } from '../../../../lib/api';
import { fetchData, fetchDataComplete, fetchDataError } from '../../../../store/adminReducer/adminSlice';

function OpenSale(props) {
  const { data } = useSelector( store => store.admin );
  const [ hallData, setHallData ] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setHallData({...data[0]});
  },[]);

  const getDataHall = async (id) => {
    dispatch(fetchData());
    try {
      const data = await getRequest(`/hall/${id}`);
      dispatch(fetchDataComplete());
      setHallData(data.data);
    } catch (e) {
      dispatch(fetchDataError(e.message));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchData());
    try {
      const reqData = {
        on_sale: !hallData.on_sale,
      }
      const data = await putRequest(`/hall/${hallData.id}`, { reqData });
      dispatch(fetchDataComplete());  
      setHallData( prevState => ({...prevState, on_sale: data.data.on_sale}))                            
    } catch (e) {
      dispatch(fetchDataError(e.message));
    }
  }
  
  return (
    <ConfigSection title={'открыть продажи'}>
      <SelectHall handleRequestData={getDataHall} resetData={setHallData} name='on_sale'/>
      {
        hallData && !hallData.on_sale && <Button handleClick={handleSubmit} title='открыть продажу билетов'/>
      }
      {
        hallData && hallData.on_sale && <Button handleClick={handleSubmit} title='закрыть продажу билетов' style='regular'/>
      }
    </ConfigSection>
  )
}

export default OpenSale;
