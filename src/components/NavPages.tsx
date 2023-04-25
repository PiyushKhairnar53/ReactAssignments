import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../RoutePages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import AddAttorney from "../RoutePages/Attorney/AddAttorney";
import ViewAttorney from "../RoutePages/Attorney/ViewAttorney";
import AddMatter from "../RoutePages/Matter/AddMatter";
import ViewMatter from "../RoutePages/Matter/ViewMatter";
import MatterForm from "../RoutePages/Matter/MatterForm";
import ListMattersForClient from "../RoutePages/Matter/ListMattersForClient";
import { useLocation } from "react-router-dom";
import CustomerLocationForm from "../RoutePages/Attorney/CustomerLocationForm";

const Navpages = () => {

    const location = useLocation();

    return (
        <div>
            <React.Fragment>
                <section >
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/Attorney/AddAttorney" element={<AddAttorney/>}/>
                        <Route path="/Attorney/ViewAttorney" element={<ViewAttorney />} />
                        <Route path="/Attorney/CustomerLocationForm" element={<CustomerLocationForm />} />

                        <Route path="/Matter/AddMatter" element={<AddMatter />} />
                        <Route path="/Matter/ViewMatter" element={<ViewMatter />} />
                        <Route path="/Matter/MatterForm" element={<MatterForm />} />
                        <Route path="/Matter/ListMattersForClient" element={<ListMattersForClient />} />

                    </Routes>
                </section>
            </React.Fragment>
        </div>
    );
}

export default Navpages