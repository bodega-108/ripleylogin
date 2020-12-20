// @flow 
import * as React from 'react';

export const Error = ({mensaje}) => {
    
    return (
        <div className='mb-3'>
          
            <p className='error-mensaje'>{mensaje}</p>

        </div>
    );
};

export default Error;