import React from 'react';
import { Card } from '../card/card.component';

import "./card-container.styles.css";

export const CardContainer = props => {
  return (
    <>
      {
        props.aliens.map(alien => (
          <Card key={alien.id} alien={alien} />
        ))
      }
    </>
  )
}