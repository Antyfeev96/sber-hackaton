import React from "react";
import {Layout} from "antd";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NavMenu from "../Components/NavMenu/NavMenu";
import Map from "../Components/Map/Map"
import Tickets from '../Pages/Tickets/Tickets'
import Ticket from '../Pages/Ticket/Ticket'
import NewTicket from '../Pages/NewTicket/NewTicket'

const Router = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="/tickets/newTicket" element={<NewTicket/>} exact />
                    <Route path="/tickets/:id" element={<Ticket/>} exact />
                    <Route path="/tickets" element={<Tickets/>} />
                    <Route path="/home" element={<Map/>} />
                    <Route path="/trips" element={<div>123</div>} />
                    <Route path="/" element={<Navigate to="/home" exact />} />
                </Routes>
                <NavMenu/>
            </BrowserRouter>
        </Layout>
    )
}

export default Router
