import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ConfigSection from '../ConfigSection';
import { getRequest, postRequest } from '../../../../lib/api';
import Hall from '../Hall';
import Button from '../../atoms/Button/Button';
import SelectHall from '../SelectHall';

function EditHall(props) {
  const [ hallData, setHallData ] = useState(null);

  const handleChangeStatusSeat = (id) => {
    const newArr = hallData.seats.slice();
    const seat = newArr.find( item => item.id === id );
    seat.status = (seat.status === 'standart') ? 'vip' : 
                  (seat.status === 'vip') ? 'disable' : 'standart';
    setHallData( prevState => ({...prevState, seats: [...newArr]}) );
  }

  const getDataHall = async (id) => {
    try {
      const data = await getRequest(`/hall/${id}`);
      setHallData(data.data);
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleChangeAmountPlaces = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const count = (name === 'rows') ? value * hallData.places : value * hallData.rows;
    const seats = [];
    for (let i = 0; i < count; i++) {
      seats.push({id: i, status: "standart"})
    }
    setHallData( prevState => ({...prevState, [name]: value, seats}));
  }

  const handleSubmit = async () => {
    try {
      let numberSeat = 1;
      const prepareSeats = hallData.seats.map( item => {
        if(item.status === 'disable') {
          item.number_seat = 0
        } else {
          item.number_seat = numberSeat;
          numberSeat++;
        }
        return item;
      })

      const data = await postRequest('/seats', {...hallData, 
                                              rows: Number(hallData.rows), 
                                              places: Number(hallData.places), 
                                              seats: prepareSeats});
      setHallData( prevState => ({...prevState, seats: data.data}));                                 
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <ConfigSection  title='Конфигурация заллов'> 
      <SelectHall handleRequestData={getDataHall} resetData={setHallData} name='hall_seats'/>
      {
        hallData && <>
          <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
          <div className="conf-step__legend">
            <label className="conf-step__label">
              Рядов, шт
              <input type="text" className="conf-step__input" name='rows' onChange={handleChangeAmountPlaces} value={hallData.rows} placeholder={hallData.rows} />
            </label>
            <span className="multiplier">x</span>
            <label className="conf-step__label">
              Мест, шт
              <input type="text" className="conf-step__input" name='places' onChange={handleChangeAmountPlaces} value={hallData.places} placeholder={hallData.places} />
            </label>
          </div>
          <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
          <div className="conf-step__legend">
            <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
            <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
            <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
            <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
          </div>  
          
          <Hall row={hallData.rows} col={hallData.places} handleClick={handleChangeStatusSeat} data={hallData.seats}/>
          
          <fieldset className="conf-step__buttons text-center">
            <Button handleClick={()=>getDataHall(hallData.id)} title='Отмена' style='regular'/>
            <Button handleClick={handleSubmit} title='Сохранить'/>
          </fieldset>
        </>
      }
    </ConfigSection>
  )
}

EditHall.propTypes = {}

export default EditHall;
