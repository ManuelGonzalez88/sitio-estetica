import React from "react";

import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to='/' className={({ isActive }) =>
                        isActive ? 'activo' : undefined
                    }>Home</NavLink></li>
                    <li><NavLink to='/servicio' className={({ isActive }) =>
                        isActive ? 'activo' : undefined
                    }>Servicio</NavLink></li>
                    <li><NavLink to='/promos' className={({ isActive }) =>
                        isActive ? 'activo' : undefined
                    }>Promos</NavLink></li>
                    <li><NavLink to='/contacto' className={({ isActive }) =>
                        isActive ? 'activo' : undefined
                    }>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;