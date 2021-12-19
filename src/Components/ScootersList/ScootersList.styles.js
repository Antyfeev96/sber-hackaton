import styled from 'styled-components';

export const ScooterItem = styled.div`
  width: 100%;
  padding: 2px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid grey;

  :hover {
    cursor: pointer;
  }
`

export const ChargeBlock = styled.div`
  padding: 10px;
`

export const IMG = styled.img`
  display: block;
  margin: 25px auto 0;
  width: 128px;
  height: 200px;
`

export const ReserveButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 25px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
`

export const SelectBody = styled.div`
  margin-top: 15px;
`

export const SelectBodyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :last-of-type {
    margin-top: 15px;
  }
`

export const GoButton = styled(ReserveButton)``
