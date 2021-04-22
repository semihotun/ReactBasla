import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'
import ProductList from '../Products/ProductList'
import CategoryList from '../Categories/CategoryList'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={3}>
                        <CategoryList></CategoryList>
                    </Col>
                    <Col md={9}>
                        <ProductList></ProductList>
                    </Col>
                </Row>
            </div>
        )
    }
}
    