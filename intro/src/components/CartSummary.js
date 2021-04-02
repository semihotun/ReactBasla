import React, { Component } from 'react';
import { NavDropdown, Badge } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {Link} from 'react-router-dom';

class CartSummary extends Component {
    renderSummary() {
        let sepetTitle = "Sepet(" + this.props.cart.length + ")";
        return (
                <NavDropdown title={sepetTitle} id="basic-nav-dropdown">
                    {this.props.cart.length > 0 ? (
                        this.props.cart.map(product => (
                            <NavDropdown.Item href="#"
                                key={product.product.productID}>
                                {product.product.name}
                                <Badge variant="success ml-2"> ({product.quantity})</Badge>
                                <Badge variant="danger ml-2" onClick={()=>this.props.removeFromCart(product.product)}>X</Badge>
                            </NavDropdown.Item>
                        ))
                    ) : (<b>Sepet Boş</b>)}
                    <DropdownItem>
                        <Link to="cart">Sepete Git</Link>
                    </DropdownItem>
                </NavDropdown>
        );
    }
    render() {
        return (
            <div>
                {this.renderSummary()}
            </div>
        );
    }
}

export default CartSummary;