import React from 'react';

import {LinkItem, LinksBlock, LinkSVG, StyledFooter} from './NavMenu.styles'

import geolocation from '../../Assets/geolocation.svg'
import {Link} from "react-router-dom";

const pages = [
    {
        key: 1,
        to: '/home',
        name: 'Город'
    },
    {
        key: 2,
        to: '/trips',
        name: 'Мои поездки'
    }
]

function NavMenu() {
    return (
        <StyledFooter>
            <LinksBlock>
                {pages.map(page =>
                    <Link to={page.to}>
                        <LinkItem key={page.key}>
                            <LinkSVG src={geolocation} alt="geolocation"/>
                            <span>{page.name}</span>
                        </LinkItem>
                    </Link>)}
            </LinksBlock>
        </StyledFooter>
    );
}

export default NavMenu;
