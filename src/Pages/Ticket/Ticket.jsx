import React from 'react';
import {useSelector} from "react-redux";
import {Body, TicketBlock, TicketItem, TicketsParams, QR} from "../Tickets/Tickets.styles";
import qr from '../../Assets/qr.png'

function Ticket() {
    const {ticket} = useSelector(state => state.ticketState)
    return (
        <Body>
            <TicketBlock>
                <TicketsParams>
                    <div>Дата</div>
                    <div style={{marginLeft: 65}}>Место прибытия</div>
                    <div style={{marginRight: 0, marginLeft: 'auto'}}>Статус поездки</div>
                </TicketsParams>
                <TicketItem>
                    <div>{ticket.date}</div>
                    <div style={{marginLeft: 15}}>{ticket.pier}</div>
                    <div style={{marginRight: 0, marginLeft: 'auto'}}>{ticket.status}</div>
                </TicketItem>
                <QR src={qr} alt="QR code"/>
            </TicketBlock>
        </Body>
    );
}

export default Ticket;
