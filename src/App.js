import './App.css';

import { Provider } from 'react-redux'
import React from 'react';
import { connect } from 'react-redux'
import { createStore } from 'redux'
import logo from './logo.svg';

const selectCard = id => ({
  type: 'SELECT_CARD',
  id
})

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_CARD':
      return {
        ...state,
        selectedCard: action.id
      }
  }
}

const store = createStore(reducer);

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      cards: [ 'a' , 'b', 'c', 'd']
    }
  }

  // handleSelect(card) {
  //   this.setState({ selectedCard: card });
  // }
  
  render() {

    // const mapDispatchToProps = dispatch => ({
    //   selectCard: id => dispatch(selectCard(id))
    // })

    const mapDispatchToProps = dispatch => dispatch(selectCard('a'));

    const CardsConnected = () => connect(null, mapDispatchToProps)(Cards)

    return(
      <Provider store={store}>
        <div>
          <CardsConnected 
            // cards = { this.state.cards }
          />
        </div>
      </Provider>
    )
  }
}

class Cards extends React.Component{
  constructor(){
    super();
  }

  handleSelected(card) {
    console.log(card);
    selectCard(card);
  }

  render(){
    return null;
    // return this.props.cards.map( (card, i) => 
    //   <div key={i} onClick={ () => this.handleSelected(card) }>
    //     { card }
    //   </div>
    // );
  }
}

export default App;
