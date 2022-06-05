import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import ClientBackgroundWrapper from '../../templates/ClientBackgroundWrapper';
import Main from '../../organisms/Main';
import { getHoursAndMinutes } from '../../../../lib/functions';

function PaymentPage(props) {
  const { data, selectSeats } = useSelector( store => store.clientReduser );
  const sumTickets = selectSeats.map( item => {
    if (item.status === 'standart') {
      return  data.hall.usual_price;
    }
    return  data.hall.VIP_price;
  }).reduce((sum, current) => sum + current, 0)

  return (
    <ClientBackgroundWrapper>
      <Main>
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

          <button className="acceptin-button" >Получить код бронирования</button>

          <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
          <p className="ticket__hint">Приятного просмотра!</p>
        </div>
      </Main>
    </ClientBackgroundWrapper>
  )
}

PaymentPage.propTypes = {}

export default PaymentPage
