import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = event => {
    this.setState({ [event.target.name]: event.target.value})
    console.log(this.state)
}

handleIngredientChange = event => {
  event.preventDefault()
  this.setState({ ingredients: [...this.state.ingredients, event.target.name]})
}

  handleSubmit = e => {
    e.preventDefault();
    if(!!this.state.name && this.state.ingredients.length !== 0 ){
      this.props.makeOrder({ name: this.state.name, ingredients: this.state.ingredients})
      this.clearInputs();
    } else {
      this.setState({ error: 'Enter your name and at least one ingredient for your burrito!!'})
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  showButtons = () => {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    return possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { this.showButtons() }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;

OrderForm.propTypes = {
  handleIngredientChange: PropTypes.func,
  handleNameChange: PropTypes.func, 
  handleSubmit: PropTypes.func
}
