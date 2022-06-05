import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import ClientBackgroundWrapper from '../../templates/ClientBackgroundWrapper';
import Main from '../../organisms/Main';
import { getHoursAndMinutes } from '../../../../lib/functions';
import { useNavigate } from 'react-router';
import { postRequest } from '../../../../lib/api';

function PaymentPage(props) {
  const { data, selectSeats, dateSeans } = useSelector( store => store.clientReducer );
  const [ orderData, setOrderData ] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data === null) {
      navigate('/client', { replace: true });
    }
  }, []) 

  const sumTickets = selectSeats.map( item => {
    if (item.status === 'standart') {
      return  data.hall.usual_price;
    }
    return  data.hall.VIP_price;
  }).reduce((sum, current) => sum + current, 0);

  const handleSubmit = async () => {
    try {
      const stringToQR = `Билет на фильм: ${data.film.title}
Места: ${selectSeats.map( item => { return item.number_seat }).join(', ')}
В зале: ${data.hall.name}
Начало сеанса: ${getHoursAndMinutes(data.start_session)}
Дата: ${dateSeans}`;
      const obj = { 
        session_id: data.id,
        date_session: dateSeans,
        text_data: stringToQR,
        selectSeats: selectSeats,
      };
      const respData = await postRequest('/client/ticket', obj);
      setOrderData(respData);
      localStorage.clear();
      // dispatch(resetStateClient());
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <ClientBackgroundWrapper>
      { data && <Main>
      <header className="tichet__check">
        <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
      </header>
        <div className="ticket__info-wrapper">
          <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{data.film.title}</span></p>
          <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">
            { selectSeats.map( item => { return item.number_seat }).join(', ')}
            </span></p>
          <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{data.hall.name}</span></p>
          <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{getHoursAndMinutes(data.start_session)}</span></p>
          <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{sumTickets}</span> рублей</p>
          {
            !orderData && <>
            <button onClick={handleSubmit} className="acceptin-button" >Получить код бронирования</button>

            <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
            <p className="ticket__hint">Приятного просмотра!</p>
          </>
          }
          {
            orderData && <>
              <img className="ticket__info-qr" src={`${process.env.MIX_APP_URL}${orderData.url_code}`}/>
              <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
              <p className="ticket__hint">Приятного просмотра!</p>          
            </>
          }
        </div>
      </Main>}
    </ClientBackgroundWrapper>
  )
}

PaymentPage.propTypes = {}

export default PaymentPage
