import React from 'react';

import './Modal.css';

const modal = (props) => {
    const cssClassees = ['Modal', props.show ? 'ModalOpen' : 'ModalClosed']

    return(
        <div className={cssClassees.join(' ')}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
    );
  
};

export default modal;