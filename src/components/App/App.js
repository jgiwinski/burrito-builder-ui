import React, { Component } from 'react';
import './App.css';
import {getOrders, postOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super(); 
    this.state = {
      orders: [], 
      error: ''
    }
  }

  componentDidMount() {
    getOrders() 
      .then(orders => this.setState({ orders : orders.orders}))
      .catch(error => this.setState({ error: 'Something went wrong!'}))
  }

  makeOrder = (newOrder) => {
    postOrder(newOrder)
      .then(res => {
        if (res.id) {
          this.setState({ orders: [...this.state.orders, res], error: '' })
        } else {
          this.setState({ error: 'Oopsies, please try again'})
        }
      })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm makeOrder={this.makeOrder}/>
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
