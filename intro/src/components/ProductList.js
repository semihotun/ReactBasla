import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap"

class ProductList extends Component {

    render() {
        return (
            <div>

                <h3>{this.props.info.title}</h3>
                <h5>{this.props.currentCategory}</h5>

                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>İsim</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.productID}>
                                <td>{product.productID}</td>
                                <td>{product.name}</td>
                                <td>{product.unitPrice}</td>
                                <td><Button
                                    onClick={() => this.props.addToCart(product)}
                                    color="info">Ekle</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default ProductList;