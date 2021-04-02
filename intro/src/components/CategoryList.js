import React, { Component } from 'react';
import {  ListGroup } from 'react-bootstrap';

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
            
        }
    }

    componentDidMount(){
        this.getCategories();
    }

    getCategories=()=>{
        fetch(this.props.siteUrl+"category")
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}));
    }
 
    render() {
        return (
            <div>
                {this.props.currentCategory.length>0 ?(<h4 variant="success ml-2"> {this.props.currentCategory}</h4>) :(<h4>{this.props.info.title}</h4>) }
                
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroup.Item 
                        onClick={() => this.props.changeCategory(category)} 
                        key={category.categoryID}
                        active={category.name===this.props.currentCategory}>

                            {category.name}

                        </ListGroup.Item>
                    ))}
                </ListGroup>
               
            </div>
        );
    }
}

export default CategoryList;