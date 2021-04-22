import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ProductAction from "../../redux/Actions/ProductAction"
import { bindActionCreators } from "redux"
import { Button, Table } from 'react-bootstrap';
import * as cartActions from "../../redux/Actions/CartAction"
import swal from 'sweetalert';
import { Link } from 'react-router-dom';


class ProductList extends Component {
    componentDidMount() {
        this.props.actions.productListForCategoryData();
    }
    addToCart=(product)=>{
        this.props.actions.addToCart({quantity:1,product});
        swal("Harika!", "Başarıyla Eklendi", "success");
    }
    render() {
        return (
            <div>

                <br></br>
                {
                    this.props.currentCategory.name === null ? null : <h1>Category {this.props.currentCategory.name} Products</h1>
                }

                <Table>
                    <thead>
                        <tr>
                        <th>Product Name</th>
                        <th> </th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.products.map(product => (
                            <tr key={product.productID}>
                                <td>{product.productID}</td>
                                <td><h5><Link to={"/saveProduct/"+product.productID}>{product.name}</Link></h5></td>
                                <td><Button onClick={()=>this.addToCart(product)}>Sepete Ekle</Button></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>


            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListForCategoryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            productListForCategoryData: bindActionCreators(ProductAction.productListForCategoryData, dispatch),
            addToCart:bindActionCreators(cartActions.addToCart,dispatch)
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);