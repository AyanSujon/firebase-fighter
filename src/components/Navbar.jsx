import React from 'react';
import { NavLink } from 'react-router';
import MyComponent from './MyComponent';
import MyLink from './MyLink';

const Navbar = () => {
const links = <>
    <li><MyLink to={"/"} className={"text-blue-500"}>Home</MyLink></li>
    <li><MyLink to={"/about-us"}  className={"text-blue-500"}>AboutUs</MyLink></li>
    <li><MyLink to={"/profile"}  className={"text-blue-500"}>Profile</MyLink></li>
    {/* <li><NavLink to={'/'} className={({isActive})=> isActive? "text-purple-500":"" }>Home</NavLink></li>
    <li><NavLink to={'/about-us'} className={({isActive})=> isActive? "text-purple-500":"" }>AboutUs</NavLink></li>
    <li><NavLink to={'/profile'} className={({isActive})=> isActive? "text-purple-500":"" } >Profile</NavLink></li> */}
</>
    return (
        <nav className='shadow-sm'>
            <MyComponent className={"flex items-center justify-between"}>
                <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
                </div>
            </MyComponent>
        </nav>
    );
};

export default Navbar;