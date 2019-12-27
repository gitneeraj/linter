import React from 'react';

import '../../styles/toggle-switch.scss';

const ToggleSwitch = ({ ...props }) => {
    return (
      <div className="switch-container mb-3">
        <span className={props.isMonthly ? 'term active' : 'term'}>billed monthly</span>
        <label className="switch my-0 mx-2">
            <input type="checkbox" value="" onChange={props.changeTerm} />
            <span className="slider round"></span>
        </label>
        <span className={!props.isMonthly ? 'term active' : 'term'}>billed yearly</span>
      </div>
    );
};

export default ToggleSwitch;