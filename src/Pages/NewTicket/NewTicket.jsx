import React from 'react';
import {Select} from "antd";
import {Body, GoButton, SelectBody, SelectBodyItem} from "./NewTicket.styles";
import {useNavigate} from "react-router-dom";

const riverStops = [
    'Автозаводский мост',
    'ЗИЛ',
    'ЗИЛ-Юг',
    'Нагатинская набережная',
    'Южный речной вокзал'
]
const {Option} = Select;

function NewTicket() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/tickets')
    }

    return (
        <Body>
            <SelectBody>
                <SelectBodyItem>
                    <div>Откуда</div>
                    <Select defaultValue={riverStops[0]} style={{width: 200}}>
                        {riverStops.map(stop =>
                            <Option value={stop}>
                                {stop}
                            </Option>
                        )}
                    </Select>
                </SelectBodyItem>
                <SelectBodyItem>
                    <div>Куда</div>
                    <Select defaultValue={riverStops[4]} style={{width: 200}}>
                        {riverStops.map(stop =>
                            <Option value={stop}>
                                {stop}
                            </Option>
                        )}
                    </Select>
                </SelectBodyItem>
                <div style={{ marginTop: 15 }}>Ваша подписка: Мультиподписка</div>
                <GoButton onClick={handleClick}>Купить билет</GoButton>
            </SelectBody>
        </Body>
    );
}

export default NewTicket;
