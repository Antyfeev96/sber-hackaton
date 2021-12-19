import React from 'react';
import {Link} from "react-router-dom";
import {LinkItem, LinksBlock, LinkSVG, StyledFooter} from './NavMenu.styles'

import geolocation from '../../Assets/geolocation.svg'
import scooter from '../../Assets/scooter.svg'
import tickets from '../../Assets/tickets.svg'

const pages = [
    {
        key: 1,
        to: '/tickets',
        src: tickets,
        name: 'Мои билеты'
    },
    {
        key: 2,
        to: '/home',
        src: geolocation,
        name: 'Город'
    },
    {
        key: 3,
        to: '/trips',
        src: scooter,
        name: 'Самокат'
    },
]

function NavMenu() {
    return (
        <StyledFooter>
            <LinksBlock>
                {pages.map(page =>
                    <Link key={page.key} to={page.to}>
                        <LinkItem>
                            <LinkSVG src={page.src} alt="geolocation"/>
                            <span>{page.name}</span>
                        </LinkItem>
                    </Link>)}
            </LinksBlock>
        </StyledFooter>
    );
}

export default NavMenu;
