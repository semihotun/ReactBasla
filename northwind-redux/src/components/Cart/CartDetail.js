import React, { Component } from 'react'
import { Badge } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartAction from "../../redux/Actions/CartAction"
import swal from 'sweetalert';
class CartDetail extends Component {
    renderEmpty() {
        return <p>Sepet Boş</p>;
    }
    removeFromCart(cartItem){
        this.props.action.removeFromCart(cartItem.product);
        swal("Harika!", "Başarıyla Silndi", "success");
    }
    renderSummary() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Adet</th>
                        <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((cartItem) => (
                            <tr key={cartItem.product.productID}>
                                <td> {cartItem.product.name}</td>
                                <td> <Badge variant="primary">{cartItem.quantity}</Badge></td>
                                <td> <Badge variant="danger" onClick={() => this.removeFromCart(cartItem)}>X</Badge></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    render() {
        return (
            <div>
                    {this.props.cart.length > 0
                        ? this.renderSummary()
                        : this.renderEmpty()}
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
        action: {
            removeFromCart: bindActionCreators(CartAction.removeFromCart, dispatch)
        }
    };
}

export default connect(MapStateToProps, MapDispatchToProps)(CartDetail);