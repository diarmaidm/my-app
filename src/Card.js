import React from 'react';

const Card = (props) => (
    <div>
      <img width="75" src="https://avatars2.githubusercontent.com/u/8445?v=3" alt="card"/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          Paul O’Shannessy
          </div>
        <div>Facebook</div>
      </div>
    </div>
  )

export default Card;
