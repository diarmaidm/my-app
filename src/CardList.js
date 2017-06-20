import React from 'react';
import Card from './Card';

const CardList = (props) => (
    <div>
      {/*{props.cards.map(card => <Card name={card.name} avatar_url={card.avatar_url} company={card.company} />)}*/}
      {props.cards.map(card => <Card {...card} />)}
    </div>
  )

export default CardList;
