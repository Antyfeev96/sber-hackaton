import React from "react";
import {Layout} from "antd";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NavMenu from "../Components/NavMenu/NavMenu";
import Map from "../Components/Map/Map"

const Router = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
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
