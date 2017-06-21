import React from 'react';
import Card from './Card';
import Form from './Form';

const CardList = (props) => (
  <div>
    <Form/> {props
      .cards
      .map(card => <Card {...card}/>)}
  </div>
)

export default CardList;
