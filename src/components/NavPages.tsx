import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../RoutePages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProductPage from "../RoutePages/ProductPages/AddProductPage";
import ListProducts from "../RoutePages/ProductPages/ListProducts";
import { Product } from "./Product";
import { useState } from 'react';

const Navpages = () => {

    const [itemName, setItemName] = useState<Product[]>([]);

    const handleAddItem = (productName: string, productDesc: string, productPrice: number, productQty: number) => {
        const newItem: Product = {
            id: Date.now(),
            product_name: productName,
            product_desc: productDesc,
            product_price: productPrice,
            product_qty: productQty,
        };
        setItemName([...itemName, newItem]);
    };

    const filteredItems = {
        list: itemName.filter((item) =>
            item.product_name.toLowerCase()
        ),
    };

    return (
        <div>
            <React.Fragment>
                <section >
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/ProductPages/AddProductPage" element={<AddProductPage onProductSave={handleAddItem} />} />
                        <Route path="/ProductPages/ListProducts" element={<ListProducts products={filteredItems.list} />} />
                    </Routes>
                </section>
            </React.Fragment>
        </div>
    );
}

export default Navpages