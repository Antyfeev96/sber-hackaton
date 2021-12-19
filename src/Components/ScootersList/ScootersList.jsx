import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ScooterItem, ChargeBlock, IMG, ReserveButton} from './ScootersList.styles'
import {setCurrentScooter} from '../../Store/Reducers/ScooterSlice'
import scooterImg from '../../Assets/scooter.png'

function ScootersList() {
    const dispatch = useDispatch()
    const {scooters} = useSelector(state => state.scootersList)
    const {scooter} = useSelector(state => state.scooterState)

    const handleChargeLevel = (level) => level >= 50 ? 'Заряжен' : 'Нужно зарядить'

    const handleBackgroundColor = (scooter) => {
        if (scooter.isReserved) return 'grey'
        return scooter.chargeLevel >= 50 ? 'white' : 'yellow'
    }

    useEffect(() => {
        console.log({scooter})
    }, [])

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
                    <IMG src={scooterImg} alt="Картинка самоката"/>
                    <ReserveButton>Забронировать по подписке</ReserveButton>
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
