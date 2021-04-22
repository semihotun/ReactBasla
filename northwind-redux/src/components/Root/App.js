import React from 'react';
import { Container } from 'react-bootstrap';
import Navi from '../Navi/Navi';
import Dashboard from './Dashboard';
import { Route, Switch } from 'react-router-dom'
import CartDetail from '../Cart/CartDetail'
import AddOrUpdateProduct from '../Products/AddOrUpdateProduct';
import NotFound from '../Common/NotFound';
function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/product" exact component={Dashboard}></Route>
          <Route path="/cart" exact component={CartDetail}></Route>
          <Route path="/saveProduct/:productID"  component={AddOrUpdateProduct}></Route>
          <Route path="/saveProduct/"  component={AddOrUpdateProduct}></Route>
          <Route exact component={NotFound}></Route>
        </Switch>

      </Container>
    </div>
  );
}

export default App;
