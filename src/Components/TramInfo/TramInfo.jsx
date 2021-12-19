import React from 'react';
import {Button} from "./TramInfo.styles";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import wifi from '../../Assets/wifi.svg'
import toilet from '../../Assets/toilet.svg'
import scooterLogo from '../../Assets/scooter-logo.svg'
import vending from '../../Assets/vending.svg'

function TramInfo() {
    const { tram } = useSelector(state => state.tramState)
    console.log({tram})

    const handleServiceName = (name) => {
        switch (name) {
            case 'WI_FI':
                return 'Wi-Fi'
            default:
            case 'TOILET':
                return 'Туалет'
            case 'SCOOTER':
                return 'Самокаты'
            case 'VENDING_MACHINE':
                return 'Торговый автомат'
        }
    }

    const handleServiceIcon = (name) => {
        switch (name) {
            case 'WI_FI':
            default:
                return wifi;
            case 'TOILET':
                return toilet;
            case 'SCOOTER':
                return scooterLogo;
            case 'VENDING_MACHINE':
                return vending
        }
    }

    return (
        <>
            <h1>{tram.name}</h1>
            <div>Координаты: [{tram.latitude}, {tram.longitude}]</div>
            <div>Время отправления: {tram.destinationTime}</div>
            <div>Следующая остановка: {tram.nextStopName}</div>
            <div>Название маршрута: {tram.routeName}</div>
            <div>Свободных мест: {tram.freeSeatsCount}</div>
            Доступные сервисы:
            <ul>
                {tram?.services?.map((service, index) =>
                    <li key={index}>
                        <img style={{
                            width: 25,
                            height: 25
                        }} src={handleServiceIcon(service)} alt="service"/>
                        <span style={{marginLeft: 15}}>{handleServiceName(service)}</span>
                    </li>)}
            </ul>
            <Link to="/tickets/newTicket"><Button>Купить билет</Button></Link>
        </>
    );
}

export default TramInfo;
