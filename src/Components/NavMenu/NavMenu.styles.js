import styled from 'styled-components'
import {Layout} from "antd";

const {Footer} = Layout

export const StyledFooter = styled(Footer)`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: -1px;
  height: 50px;
  padding: 5px;
  z-index: 9999;
  background: linear-gradient(90deg, #00ADEE 0%, #202C80 100%);
`

export const LinksBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const LinkItem = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-underline: none;
  text-decoration: none;
`

export const LinkSVG = styled.img`
  width: 25px;
  height: 25px;
`
