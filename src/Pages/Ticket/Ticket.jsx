import React from 'react';
import {useSelector} from "react-redux";
import {Body, QR, TicketBlock, TicketItem, TicketsParams} from "../Tickets/Tickets.styles";
import qr from '../../Assets/qr.png'

function Ticket() {
    const {ticket} = useSelector(state => state.ticketState)
    return (
        <Body>
            <TicketBlock>
                <TicketsParams>
                    <div>Дата</div>
                    <div style={{marginLeft: 65}}>Место прибытия</div>
                    <div style={{marginLeft: 'auto'}}>Статус поездки</div>
                </TicketsParams>
                <TicketItem>
                    <div style={{marginLeft: 5}}>{ticket.date}</div>
                    <div>{ticket.pier}</div>
                    <div style={{marginRight: 5}}>{ticket.status}</div>
                </TicketItem>
                <QR src={qr} alt="QR code"/>
            </TicketBlock>
        </Body>
    );
}

export default Ticket;
