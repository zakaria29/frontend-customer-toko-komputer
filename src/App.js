import React from "react"
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login"
import Product from "./pages/Product"
import Transaction from "./pages/Transaction"
import Cart from "./pages/Cart"

export default class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/cart" component={Cart} />
      </Switch>
    )
  }
}