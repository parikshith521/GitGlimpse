import React from 'react';

import {waitcat} from '../../assets';

//loading screen component
/*
this is shown when the user has made a search and the data is being fetched.
Once the data is fetched this component is no longer displayed

*/
const Wait = () => {
    return (  

        <div className='mt-40 w-40 p-2 sm:w-64 sm:p-4 flex flex-col items-center'>
      
            <img src={waitcat} alt="loading" />
            <p className='text-primary font-Manrope font-medium p-2 text-base sm:p-4 sm:text-lg text-center'>Please Wait, Our Cat Is Working Hard...</p>
       
        </div>
    );
}
 
export default Wait;