import React, {useState} from 'react';
import {
    MyModal,
    Content,
    Header,
    HeaderItem,
    Body
} from './Modal.styles'
import TramInfo from "../TramInfo/TramInfo";
import ScootersList from "../ScootersList/ScootersList";
import { clearState } from '../../Store/Reducers/ScooterSlice'
import {useDispatch} from "react-redux";

function Modal ({isModalOpen, setModalOpen}) {
    const dispatch = useDispatch()
    const [chosenOption, setChosenOption] = useState('tram')

    const handleClose = () => {
        dispatch(clearState())
        setModalOpen(false)
    }

    return (
        <>
            <MyModal visible={isModalOpen}
                     footer={null}
                     // cancelText="Отменить"
                     onCancel={() => handleClose()}
            >
                <Content>
                    <Header>
                        <HeaderItem active={chosenOption === 'tram'} onClick={() => setChosenOption('tram')}>Информация о трамвае</HeaderItem>
                        <HeaderItem active={chosenOption === 'scooter'} onClick={() => setChosenOption('scooter')}>Выбрать самокат</HeaderItem>
                    </Header>
                    <Body>
                        {chosenOption === 'tram' && <TramInfo/>}
                        {chosenOption === 'scooter' && <ScootersList/>}
                    </Body>
                </Content>
            </MyModal>
        </>
    );
}

export default Modal
