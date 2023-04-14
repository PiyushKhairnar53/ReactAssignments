import React from 'react'
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";


const Sidebar = () => {
    return (
        <div className="sidebar">

            <div key={0}>
                <NavLink to={'/'}
                    className="text-white">
                    <h5 className='sidebar-tab'>{'Dashboard'}</h5>
                </NavLink>
            </div>

            <div key={1}>

                <Dropdown className='sidebar-tab'>
                    <Dropdown.Toggle className='toggle-button bg-dark w-100' id="dropdown-basic">
                        Products
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavLink to={'/ProductPages/AddProductPage'}
                            className="text-white">
                            <h6 className='sidebar-tab'>Add Product</h6>
                        </NavLink>

                        <NavLink to={'/ProductPages/ListProducts'}
                            className="text-white">
                            <h6 className='sidebar-tab'>Show Products</h6>
                        </NavLink>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Sidebar