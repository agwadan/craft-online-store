import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonStyler} from './Button'




export default class Navbar extends Component {
    render() {
        return (
            <NavStyler className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */
}
            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand" />
            </Link>

            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">merchandise</Link>
                </li>
            </ul>

            <Link to='/Cart' className="ml-auto">
                <ButtonStyler>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                     Basketi Yange
                </ButtonStyler>
            </Link>
            </NavStyler>       
        )
    }
}

const NavStyler = styled.nav `
    background-color: var(--mainBrown)!important;
    .nav-link{
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }

`