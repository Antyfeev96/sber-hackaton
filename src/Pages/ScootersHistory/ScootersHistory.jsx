import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Body, TicketBlock, TicketItem, TicketsParams, Bonuses} from "./ScootersHistory.styles";
import { setCurrentScooter } from '../../Store/Reducers/ScootersHistorySlice'

import bonus from '../../Assets/bonus.png'

function ScootersHistory() {
    const dispatch = useDispatch()
    const { scooters } = useSelector(state => state.scootersHistoryState);
    const navigate = useNavigate();

    const handleClick = (scooter) => {
        dispatch(setCurrentScooter(scooter))
        navigate(`/trips/${scooter.id}`)
    }

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
                {scooters.map(scooter =>
                    <TicketItem onClick={() => handleClick(scooter)} isReserved={scooter.status === 'reserved'}>
                        <div>{scooter.date}</div>
                        <div style={{marginLeft: 15}}>{scooter.name}</div>
                        <div style={{marginRight: 0, marginLeft: 'auto'}}>{handleStatus(scooter.status)}</div>
                    </TicketItem>
                )}
            </TicketBlock>
        </Body>
    );
}

export default ScootersHistory;
