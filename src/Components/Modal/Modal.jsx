import React from 'react';
import {
    MyModal,
    Content,
    Header,
    HeaderItem,
    Body
} from './Modal.styles'

function Modal ({isModalOpen, setModalOpen}) {
    console.log({isModalOpen})
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

                    </Body>
                </Content>
            </MyModal>
        </>
    );
}

export default Modal
