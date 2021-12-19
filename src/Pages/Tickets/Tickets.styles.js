import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  //padding: 10px;
  width: 100vw;
  height: 100vh;
`

export const TicketBlock = styled.div`
  width: 100%;
  padding: 5px;
`

export const TicketsParams = styled.div`
  display: flex;
`

export const TicketItem = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  border: 1px solid black;
  transition: all 0.3s;

  :hover {
    cursor: pointer;
    background: #b0adad;
  }

  :nth-child(n + 2) {
    margin-top: 15px;
  }
`

export const QR = styled.img`
  display: block;
  margin: 25px auto 0;
  width: 300px;
  height: 300px;
`
