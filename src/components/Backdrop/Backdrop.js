import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClassees = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed']
    
    return <div className={cssClassees.join(' ')}></div>
};

    


export default backdrop;