import React from 'react';
import {ig,fb,x} from '../../assets';

//contact page component
const Contact = () => {
    return (  
        
            <div className='max-w-screen-xl my-60 mx-7'>
            
            {/*contact page header */}

                <div className='text-secondary text-6xl sm:text-8xl font-Inter font-bold p-3'>
                    <p>Reach Out To Us.</p>
                </div>

                <div className='text-primary flex flex-col items-start'>

                    {/*mail address */}

                    <div className='p-8'>
                        <h3 className='font-Inter text-2xl sm:text-3xl'>Write to us.</h3>
                        <p className='font-Manrope text-lg sm:text-xl m-1'>88 Colin P Kelly Jr St San Francisco California 94107</p>
                    </div>

                    {/*phone number */}

                    <div className='p-8'>
                        <h3 className='font-Inter text-2xl sm:text-3xl'>Talk to us.</h3>
                        <p className='font-Manrope text-lg sm:text-xl m-1'>+91 9873216721</p>
                    </div>

                    {/*social media handles */}

                    <div className='p-8'>
                        <h3 className='font-Inter text-2xl sm:text-3xl'>Connect with us.</h3>
                        <img className='cursor-pointer w-6 h-6 inline m-1' src={ig} alt="instagram" />
                        <img className='cursor-pointer w-6 h-6 inline m-1' src={fb} alt="facebook" />
                        <img className='cursor-pointer w-6 h-6 inline m-1' src={x} alt="twitter/x" />
                    </div>

                </div>
            </div>
        
    );
}
 
export default Contact;