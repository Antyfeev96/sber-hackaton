import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Body, Bonuses, TicketBlock, TicketItem, TicketsParams, Info} from "../ScootersHistory/ScootersHistory.styles";
import bonus from "../../Assets/bonus.png";

function Scooter() {
    const { scooter } = useSelector(state => state.scootersHistoryState);

    const handleStatus = (status) => status === 'reserved' ? 'Забронирован' : 'Завершён'

    return (
        <Body>
            <Bonuses>
                <img src={bonus} alt="bonus"/>
                <div>У вас 300 бонусов</div>
            </Bonuses>
            <TicketBlock>
                <TicketsParams>
                    <div>Дата</div>
                    <div style={{marginLeft: 65}}>Название скутера</div>
                    <div style={{marginRight: 0, marginLeft: 'auto'}}>Статус поездки</div>
                </TicketsParams>
                    <TicketItem>
                        <div>{scooter.date}</div>
                        <div style={{marginLeft: 15}}>{scooter.name}</div>
                        <div style={{marginRight: 0, marginLeft: 'auto'}}>{handleStatus(scooter.status)}</div>
                    </TicketItem>
            </TicketBlock>
            <Info>
                <div>Время поездки: 15 минут 28 секунд</div>
                <div><b>Вы проехали 5 км и сэкономили 25 минут!!!</b></div>
                <div><b>Вы можете получить 50 бонусов, если поставите самокат на зарядку в пункте остановки.</b></div>
            </Info>
        </Body>
    );
}

export default Scooter;
