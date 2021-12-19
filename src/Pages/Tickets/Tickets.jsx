import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {Body, TicketBlock, TicketItem, TicketsParams} from './Tickets.styles'
import {setCurrentTicket} from '../../Store/Reducers/TicketSlice'

function Tickets() {
    const dispatch = useDispatch()
    const {tickets} = useSelector(state => state.ticketsState);
    const navigate = useNavigate();

    const handleClick = (ticket) => {
        dispatch(setCurrentTicket(ticket))
        navigate(`/tickets/${ticket.id}`)
    }

    return (
        <Body>
            <TicketBlock>
                <TicketsParams>
                    <div>Дата</div>
                    <div style={{marginLeft: 65}}>Место прибытия</div>
                    <div style={{marginLeft: 'auto'}}>Статус поездки</div>
                </TicketsParams>
                {tickets.map(ticket =>
                    <TicketItem key={ticket.id} onClick={() => handleClick(ticket)}>
                        <div style={{marginLeft: 5}}>{ticket.date}</div>
                        <div>{ticket.pier}</div>
                        <div style={{marginRight: 5}}>{ticket.status}</div>
                    </TicketItem>
                )}
            </TicketBlock>
        </Body>
    );
}

export default Tickets;
