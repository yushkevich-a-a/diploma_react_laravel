import React, { useState } from 'react'
import PropTypes from 'prop-types';
import ConfigSection from '../ConfigSection';
import Button from '../../atoms/Button/Button';
import { getRequest, postRequest, putRequest } from '../../../../lib/api';
import SelectHall from '../SelectHall';

function EditPrice(props) {
  const [ hallData, setHallData ] = useState(null);

  const getPriceData = async (id) => {
    try {
      const data = await getRequest(`/hall/${id}`);
      setHallData( prevState => ({ ...prevState, id: data.data.id, usual_price: data.data.usual_price, VIP_price: data.data.VIP_price }));
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = +e.target.value;
    setHallData(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reqData = {
        usual_price: hallData.usual_price,
        VIP_price: hallData.VIP_price,
      }
      const data = await putRequest(`/hall/${hallData.id}`, { reqData });
      setHallData({...data});                                 
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <ConfigSection title={'Конфигурация цен'}>
      <SelectHall handleRequestData={getPriceData} resetData={setHallData} name='hall_price'/>
      { hallData && <><p className="conf-step__paragraph">Установите цены для типов кресел:</p>
        <div className="conf-step__legend">
          <label className="conf-step__label">
            Цена, рублей
            <input type="number" name='usual_price' onChange={handleChange} className="conf-step__input" placeholder={hallData.usual_price} value={hallData.usual_price}/>
          </label>
          за <span className="conf-step__chair conf-step__chair_standart"></span> обычные кресла
        </div>  
        <div className="conf-step__legend">
          <label className="conf-step__label">
            Цена, рублей
            <input type="number"  name='VIP_price' onChange={handleChange} className="conf-step__input" placeholder={hallData.VIP_price} value={hallData.VIP_price} />
          </label>
          за <span className="conf-step__chair conf-step__chair_vip"></span> VIP кресла
        </div>  
      
      <fieldset className="conf-step__buttons text-center">
        <Button handleClick={()=>getPriceData(hallData.id)} title='Отмена' style='regular'/>
        <Button handleClick={handleSubmit} title='Сохранить'/>
      </fieldset></>
      }
    </ConfigSection>
  )
}

EditPrice.propTypes = {}

export default EditPrice
