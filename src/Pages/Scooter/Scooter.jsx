import React from 'react';
import {useSelector} from "react-redux";
import {Body, Bonuses, Info, TicketBlock, TicketItem, TicketsParams} from "../ScootersHistory/ScootersHistory.styles";
import bonus from "../../Assets/bonus.png";
import scooterImg from '../../Assets/scooter.png'
import {IMG} from "../../Components/ScootersList/ScootersList.styles";

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
                    <div style={{marginLeft: 65}}>Название самоката</div>
                    <div style={{marginLeft: 'auto'}}>Статус поездки</div>
                </TicketsParams>
                    <TicketItem>
                        <div style={{marginLeft: 5, marginRight: 'auto'}}>{scooter.date}</div>
                        <div>{scooter.name}</div>
                        <div style={{marginRight: 5, marginLeft: 'auto'}}>{handleStatus(scooter.status)}</div>
                    </TicketItem>
            </TicketBlock>
            <Info>
                <div style={{marginLeft: 5}}>Время поездки: 15 минут</div>
                <div style={{textAlign: "center"}}><b>Вы проехали 5 км и сэкономили 25 минут</b></div>
                <IMG src={scooterImg} alt="Картинка самоката"/>
                <div style={{textAlign: "center"}}><b>Вы можете получить 50 бонусов, если поставите самокат на зарядку в пункте остановки.</b></div>
            </Info>
        </Body>
    );
}

export default Scooter;
