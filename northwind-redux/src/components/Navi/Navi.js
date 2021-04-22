import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import CartSummary from '../Cart/CartSummary'
import {Link} from "react-router-dom"
export default class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Link to="/">React-Bootstrap</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
 
                            <CartSummary></CartSummary>                       
                        </Nav>                    
                    </Navbar.Collapse>         
                </Navbar>
               
            </div>
        )
    }
}
