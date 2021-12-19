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

function Modal ({isModalOpen, setModalOpen}) {
    const [chosenOption, setChosenOption] = useState('tram')
    return (
        <>
            <MyModal visible={isModalOpen}
                     cancelText="Отменить"
                     onCancel={() => setModalOpen(false)}
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
