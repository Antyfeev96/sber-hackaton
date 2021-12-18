import React/*,{useState}*/ from 'react';
import {
    MyModal,
    Content,
    Header,
    HeaderItem,
    Body
} from './Modal.styles'

function Modal ({isModalOpen, setModalOpen}) {
    // const [chosenOption, setChosenOption] = useState('tram')1
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
