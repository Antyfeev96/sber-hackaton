import styled from 'styled-components'
import { Modal } from 'antd';

export const MyModal = styled(Modal)``

export const Content = styled.div`
  margin-top: 25px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`

export const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  :hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`

export const Body = styled.div``
