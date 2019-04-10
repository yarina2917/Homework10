import React from 'react';

const input = ({inputConfig, changed}) => {
    let classInvalid = '';

    if (!inputConfig.valid && inputConfig.touched) {
        classInvalid = 'invalid'
    }

    return (
        <div className='fields'>
            <input
                className={classInvalid}
                {...inputConfig.elementConfig}
                value={inputConfig.value}
                onChange={changed}/>
            <p className='error'>{inputConfig.validation.errorName}</p>
        </div>
    );

};

export default input;