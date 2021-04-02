import Navi from './components/Navi.js'
import CategoryList from './components/CategoryList.js'
import ProductList from './components/ProductList.js'
import { Container, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react';
import swal from 'sweetalert';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound.js';
import CartDetail from './components/CartDetail.js';
import FormDemo1 from './components/FormDemo1.js';
import Form2 from './components/Form2.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siteUrl: "http://localhost:3000/",
      currentCategory: "",
      products: [],
      cart: []
    }
  }
  componentDidMount() {
    this.getProduct();
  }

  addToCart = (product) => {
    console.log(this.state.cart);
    let newCart = this.state.cart;
    let addedItem = newCart.find(c => c.product.productID === product.productID);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }
    swal("Harika!", "Başarıyla Eklendi", "success");
    this.setState({ cart: newCart });
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.name })
    this.getProduct(category.categoryID);
  }

  getProduct = (categoryId) => {
    let url = this.state.siteUrl + "products";
    if (categoryId) {
      url += "?categoryID=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(x => x.product.productID !== product.productID)
    this.setState({ cart: newCart });
  }

  render() {

    let ProductInfo = {
      title: "Ürün Listesi"
    }
    let CategoryInfo = {
      title: "Kategori Listesi"
    }
    return (
      <div>
        <Container>
          <Row>
            <Navi
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
            ></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList siteUrl={this.state.siteUrl}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={CategoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" component={()=>
                  <ProductList
                    siteUrl={this.state.siteUrl}
                    currentCategory={this.state.currentCategory}
                    changeCategory={this.changeCategory}
                    addToCart={this.addToCart}
                    products={this.state.products}
                    info={ProductInfo}></ProductList>
                  }
                ></Route>

                <Route exact path="/cart" component={()=>
                  <CartDetail
                    siteUrl={this.state.siteUrl}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                  ></CartDetail>
                  }
                ></Route>

                <Route exact path="/form1" component={()=>
                <FormDemo1></FormDemo1>
                }>
                </Route>
                <Route exact path="/form2" component={()=>
                <Form2></Form2>
                }>
                </Route>

                <Route component={NotFound}></Route>
              </Switch>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
