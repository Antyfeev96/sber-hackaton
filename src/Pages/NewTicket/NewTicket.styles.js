import styled from "styled-components";
import {ReserveButton} from "../../Components/ScootersList/ScootersList.styles";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export const SelectBody = styled.div``

export const SelectBodyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :nth-child(n + 2) {
    margin-top: 20px;
  }
`

export const GoButton = styled(ReserveButton)``
