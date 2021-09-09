import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getAllCate } from '../../Api/CategoryApi';
import '../../style.css';
const NavClient = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
          try {
            const { data } = await getAllCate();
            setCategories(data)
          } catch (error) {
            console.log(error)
          }

        };
        getCategories();
      }, []);
      
    return (
        <nav>
            <ul>
                <li className="has-dropdown">
                    <NavLink className="main-menu-link" to="/home" activeClassName="active-menu-main">Trang Chủ</NavLink>
                </li>
                <li className="has-dropdown">
                    <NavLink to="shops" activeClassName="active-menu-main">Cửa hàng <i className="fa fa-angle-down" /></NavLink>
                    {/* Sub Menu */}
                    <ul className="sub-menu">
                        {categories.map((item,index)=>(
                            <li key={index}>
                                <NavLink to={`/shops/${item.id}/category`} >{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <NavLink to="about-us" activeClassName="active-menu-main">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="contact-us" activeClassName="active-menu-main">Contact Us</NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default NavClient
