import React from 'react';

import './House.css';

const house = (props) => {
  return (
    <div className={ props.status ? 'house infected' : 'house'}></div>
  )
};

export default house;