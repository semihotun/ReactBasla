import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartSummary from './CartSummary';
import {Link} from 'react-router-dom';
class Navi extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg" style={{ width: '100%', marginBottom: '50px' }}>
                <Link to="/">Ansayfa</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                            
                        <CartSummary 
                         removeFromCart={this.props.removeFromCart}
                          cart={this.props.cart}></CartSummary>

                        <Nav.Link><Link to="/form1">Form1</Link></Nav.Link>

                        <Nav.Link><Link to="/form2">Form2</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navi;