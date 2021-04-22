import React, { Component } from "react";
import * as CartAction from "../../redux/Actions/CartAction"
import swal from 'sweetalert';
import {Link} from "react-router-dom"
import {
  NavDropdown,
  Badge,
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CartSummary extends Component {
  renderEmpty() {
    return <NavDropdown.Item>Sepet Boş</NavDropdown.Item>;
  }
  removeFromCart(cartItem){
    this.props.action.removeFromCart(cartItem.product);
    swal("Harika!", "Başarıyla Silndi", "success");
  }
  renderSummary() {
    return (
      <div>
        {this.props.cart.map((cartItem) => (
          <NavDropdown.Item href="#action/3.1" key={cartItem.product.productID}>
            {cartItem.product.name}
            <Badge variant="primary">{cartItem.quantity}</Badge>
            <Badge variant="danger" onClick={()=>this.removeFromCart(cartItem)}>X</Badge>
          </NavDropdown.Item>
        ))}
        <span role="button" className="dropdown-item" role="button">
        <Link to="/cart" >Sepete Git</Link> 
        </span>
        
        <NavDropdown.Divider />
                               
  
      </div>
    );
  }
  render() {
    return (
      <div>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          {this.props.cart.length > 0
            ? this.renderSummary()
            : this.renderEmpty()}
        </NavDropdown>
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function MapDispatchToProps(dispatch) {
  return {
    action:{
      removeFromCart:bindActionCreators(CartAction.removeFromCart,dispatch)
    }
  };
}

export default connect(MapStateToProps,MapDispatchToProps)(CartSummary);
