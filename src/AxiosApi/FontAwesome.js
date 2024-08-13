import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCog, faSpinner } from '@fortawesome/free-solid-svg-icons';

function FontAwesome() {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faCog} />
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
}

export default FontAwesome;
