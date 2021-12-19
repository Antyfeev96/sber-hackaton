import React from 'react';
import { ScooterItem, ChargeBlock } from './ScootersList.styles'
import {useDispatch, useSelector} from "react-redux";

function ScootersList() {
    const dispatch = useDispatch()
    const { scooters } = useSelector(state => state.scootersList)

    const handleChargeLevel = (level) => level >= 50 ? 'Заряжен' : 'Нужно зарядить'

    const handleBackgroundColor = (scooter) => {
        if (scooter.isReserved) return 'grey'
        return scooter.chargeLevel >= 50 ? 'white' : 'yellow'
    }

    return (
        <div>
            {scooters.map(scooter =>
            <ScooterItem style={{ backgroundColor: handleBackgroundColor(scooter) }}>
                <ChargeBlock>
                    {scooter.chargeLevel}%
                </ChargeBlock>
                <div style={{ marginLeft: 30 }}>Самокат № {scooter.name}</div>
                <div style={{ marginLeft: 30 }}>{scooter.onCharge ? 'На зарядке' : handleChargeLevel(scooter.chargeLevel)}</div>
            </ScooterItem>
            )}
        </div>
    );
}

export default ScootersList;
