import React from 'react';

import './Modal.css';

const modal = (props) => {
    const cssClassees = ['Modal', 
    props.show === 'entering'
     ? 'ModalOpen' 
     : props.show === 'exitiing' ? 'ModalClosed' : null
    ];

    return(
        <div className={cssClassees.join(' ')}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
    );
  
};

export default modal;