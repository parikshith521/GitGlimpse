import React from 'react';

//error component, displayed when users try to access a page that doesn't exist 
const Error = () => {
    return (  
        <div className='text-primary w-full flex flex-col items-center my-64 mx-3'>
            <p className='font-inter font-bold text-5xl sm:text-7xl text-center mb-9'>Oops! That page doesn't seem to exist :(</p>
            <p className='font-Manrope font-bold text-3xl text-center'>You might want to try clicking of the links at the top.</p>
        </div>
    );
}
 
export default Error;