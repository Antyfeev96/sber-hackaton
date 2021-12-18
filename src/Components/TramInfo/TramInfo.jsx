import React from 'react';
import { Body } from "./TramInfo.styles";
import {useSelector} from "react-redux";

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

    return (
        <>
            <h1>{tram.boatName}</h1>
            <div>Координаты: [{tram.latitude}, {tram.longitude}]</div>
            <div>Время отправления: {tram.destinationTime}</div>
            <div>Следующая остановка: {tram.nextStopName}</div>
            <div>Название маршрута: {tram.routeName}</div>
            <div>Свободных мест: {tram.freeSeatsCount}</div>
            Доступные сервисы:
            <ul>
                {tram?.services?.map((service, index) =>
                    <li key={index}>
                        {handleServiceName(service)}
                    </li>)}
            </ul>
        </>
    );
}

export default TramInfo;
