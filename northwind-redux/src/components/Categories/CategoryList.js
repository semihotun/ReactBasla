import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/Actions/CategoryActions"
import * as ProductAction from "../../redux/Actions/ProductAction"

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategoriesData()
    }
    selectcategory = (category) =>{
        this.props.actions.changeCategory(category);
        this.props.actions.productListForCategoryData(category.categoryID);
    }
    render() {
        return (
            <div>
                <h3>Categories {this.props.categories.length}</h3>
                <ListGroup>
                    {
                        this.props.categories.map(category => (
                            <ListGroupItem active={category.categoryID === this.props.currentCategory.categoryID ? true : false}
                                onClick={() => this.selectcategory(category) }
                                key={category.categoryID}>{category.name}
                            </ListGroupItem>
                        ))
                    }

                </ListGroup>
            
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategoriesData: bindActionCreators(categoryActions.getCategoriesData, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            productListForCategoryData: bindActionCreators(ProductAction.productListForCategoryData, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);