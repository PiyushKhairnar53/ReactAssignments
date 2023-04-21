import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../RoutePages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCustomer from "../RoutePages/CustomerLocation/AddCustomer";
import ViewCustomer from "../RoutePages/CustomerLocation/ViewCustomer";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import CustomerLocationForm from "../RoutePages/CustomerLocation/CustomerLocationForm";

const Navpages = () => {

    const location = useLocation();

    return (
        <div>
            <React.Fragment>
                <section >
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/CustomerLocation/AddCustomer" element={<AddCustomer/>}/>
                        <Route path="/CustomerLocation/ViewCustomer" element={<ViewCustomer />} />
                        <Route path="/CustomerLocation/CustomerLocationForm" element={<CustomerLocationForm />} />
                    </Routes>
                </section>
            </React.Fragment>
        </div>
    );
}

export default Navpages