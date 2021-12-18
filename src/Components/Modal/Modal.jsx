import React, {useState} from 'react';
import {
    MyModal,
    Content,
    Header,
    HeaderItem,
    Body
} from './Modal.styles'
import TramInfo from "../TramInfo/TramInfo";

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
                        <HeaderItem>Информация о трамвае</HeaderItem>
                        <HeaderItem>Выбрать самокат</HeaderItem>
                    </Header>
                    <Body>
                        {chosenOption === 'tram' && <TramInfo/>}
                    </Body>
                </Content>
            </MyModal>
        </>
    );
}

export default Modal
