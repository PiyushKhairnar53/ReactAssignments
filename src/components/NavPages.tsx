import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../RoutePages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMatter from "../RoutePages/Matter/AddMatter";
import MatterForm from "../RoutePages/Matter/MatterForm";
import ListMattersForClient from "../RoutePages/Matter/ListMattersForClient";
import { useLocation } from "react-router-dom";
import ListInvoicesForMatter from "../RoutePages/Invoices/ListInvoicesForMatter";
import LastWeekBillings from "../RoutePages/Attorney/LastWeekBillingsForAttorney";
import ListMatterByClient from "../RoutePages/Matter/ListMattersByClient";
import ListInvoicesByMatter from "../RoutePages/Invoices/ListInvoicesByMatter";
import LastWeekBillingsByAttorney from "../RoutePages/Attorney/LastWeekBillingsByAttorney";

const Navpages = () => {

    const location = useLocation();

    return (
        <div>
            <React.Fragment>
                <section >
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/Attorney/LastWeekBillingsByAttorney" element={<LastWeekBillingsByAttorney />} />
                        <Route path="/Attorney/LastWeekBillings" element={<LastWeekBillings />} />
                        <Route path="/Matter/AddMatter" element={<AddMatter />} />
                        <Route path="/Matter/MatterForm" element={<MatterForm />} />
                        <Route path="/Matter/ListMattersForClient" element={<ListMattersForClient />} />
                        <Route path="/Matter/ListMatterByClient" element={<ListMatterByClient />} />
                        <Route path="/Invoices/ListInvoicesForMatter" element={<ListInvoicesForMatter />} />
                        <Route path="/Invoices/ListInvoicesByMatter" element={<ListInvoicesByMatter />} />
                    </Routes>
                </section>
            </React.Fragment>
        </div>
    );
}

export default Navpages