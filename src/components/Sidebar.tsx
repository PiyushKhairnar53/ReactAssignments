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
                        Attorney
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavLink to={{pathname:'/Attorney/AddAttorney'}}
                            className="text-white">
                            <h6 className='sidebar-tab'>Add Attorney</h6>
                        </NavLink>

                        <NavLink to={'/Attorney/ViewAttorney'}
                            className="text-white">
                            <h6 className='sidebar-tab'>View Attorney</h6>
                        </NavLink>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div key={2}>

                <Dropdown className='sidebar-tab'>
                    <Dropdown.Toggle className='toggle-button bg-dark w-100' id="dropdown-basic">
                        Matter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavLink to={{pathname:'/Matter/AddMatter'}}
                            className="text-white">
                            <h6 className='sidebar-tab'>Add Matter</h6>
                        </NavLink>

                        <NavLink to={'/Matter/ViewMatter'}
                            className="text-white">
                            <h6 className='sidebar-tab'>View Matter</h6>
                        </NavLink>

                        <NavLink to={'/Matter/ListMattersForClient'}
                            className="text-white">
                            <h6 className='sidebar-tab'>Show Matters for client</h6>
                        </NavLink>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Sidebar