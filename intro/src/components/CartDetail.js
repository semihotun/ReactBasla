import React, { Component } from 'react';
import { Table,Button } from 'react-bootstrap'

class CartDetail extends Component {
    renderCart() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>İsim</th>
                        <th>Adet</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(x => (
                            <tr key={x.product.productID}>
                                <td>{x.product.productID}</td>
                                <td>{x.product.name}</td>
                                <td>{x.quantity}</td>
                                <td><Button  onClick={()=>this.props.removeFromCart(x.product)}>Sil</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>

                {this.renderCart()}

            </div>
        );
    }
}

export default CartDetail;