import React from 'react';

import './House.css';

const house = (props) => {
  return (
    <div className={ props.status ? 'House Infected' : 'House'}></div>
  )
};

export default house;