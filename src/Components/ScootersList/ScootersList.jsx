import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Select} from 'antd';
import {ChargeBlock, GoButton, IMG, ReserveButton, ScooterItem, SelectBody, SelectBodyItem} from './ScootersList.styles'
import {setCurrentScooter, setReserveButtonClicked} from '../../Store/Reducers/ScooterSlice'
import scooterImg from '../../Assets/scooter.png'

const riverStops = [
    'Автозаводский мост',
    'ЗИЛ',
    'ЗИЛ-Юг',
    'Нагатинская набережная',
    'Южный речной вокзал'
]
const { Option } = Select;

function ScootersList() {
    const dispatch = useDispatch()
    const {scooters} = useSelector(state => state.scootersList)
    const {scooter} = useSelector(state => state.scooterState)
    const navigate = useNavigate()

    const handleChargeLevel = (level) => level >= 50 ? 'Заряжен' : 'Нужно зарядить'

    const handleBackgroundColor = (scooter) => {
        if (scooter.isReserved) return 'grey'
        return scooter.chargeLevel >= 50 ? 'white' : 'yellow'
    }

    const handleGoClick = () => {
        navigate('/trips')
    }

    return (
        <div>
            {scooter?.name
                ?
                <>
                    <ScooterItem style={{backgroundColor: handleBackgroundColor(scooter)}}>
                        <ChargeBlock>
                            {scooter.chargeLevel}%
                        </ChargeBlock>
                        <div style={{marginLeft: 30}}>Самокат № {scooter.name}</div>
                        <div
                            style={{marginLeft: 30}}>{scooter.onCharge ? 'На зарядке' : handleChargeLevel(scooter.chargeLevel)}</div>
                    </ScooterItem>
                    {scooter.reserveButtonClicked
                        ?
                            <SelectBody>
                                <SelectBodyItem>
                                    <div>Откуда</div>
                                    <Select defaultValue={riverStops[0]} style={{ width: 200 }}>
                                        {riverStops.map(stop =>
                                            <Option value={stop}>
                                                {stop}
                                            </Option>
                                        )}
                                    </Select>
                                </SelectBodyItem>
                                <SelectBodyItem>
                                    <div>Куда</div>
                                    <Select defaultValue={riverStops[4]} style={{ width: 200 }}>
                                        {riverStops.map(stop =>
                                            <Option value={stop}>
                                                {stop}
                                            </Option>
                                        )}
                                    </Select>
                                </SelectBodyItem>
                                <GoButton onClick={handleGoClick}>Поехали</GoButton>
                            </SelectBody>
                        :
                        <>
                            <IMG src={scooterImg} alt="Картинка самоката"/>
                            <ReserveButton onClick={() => dispatch(setReserveButtonClicked(true))}>Забронировать по
                                подписке</ReserveButton>
                        </>}
                </>
                :
                scooters.map(scooter =>
                    <ScooterItem onClick={() => dispatch(setCurrentScooter(scooter))}
                                 style={{backgroundColor: handleBackgroundColor(scooter)}}>
                        <ChargeBlock>
                            {scooter.chargeLevel}%
                        </ChargeBlock>
                        <div style={{marginLeft: 30}}>Самокат № {scooter.name}</div>
                        <div
                            style={{marginLeft: 30}}>{scooter.onCharge ? 'На зарядке' : handleChargeLevel(scooter.chargeLevel)}</div>
                    </ScooterItem>
                )}
        </div>
    );
}

export default ScootersList;
