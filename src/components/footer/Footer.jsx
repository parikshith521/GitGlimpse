import React from 'react';
import {Link} from 'react-router-dom';
import {phone,mail,ig,fb,x,logo} from '../../assets';

//footer component
const Footer= () => {
    return ( 
        
            <div className='flex justify-center flex-wrap mb-20'>

            {/* defines the logo, name, tagline and copyright statement of the footer */}

                <div className='max-w-[200px] sm:w-80 sm:max-w-none flex flex-col items-center mx-4 my-7'>

                    {/*logo and name */}

                    <Link to="/"><div className='cursor-pointer flex items-center justify-center px-4 pb-1 pt-2.5'>
                        <img className='w-12 h-12 mr-1'src={logo} alt="logo" /> 
                        <p className='font-Inter text-2xl font-bold text-secondary'>GitGlimpse</p>
                    </div></Link>

                    {/*tagline and copyright statement */}

                    <div className='text-center font-Manrope text-base sm:text-lg text-primary'>
                        <p className='p-3'>GitGlimpse, illuminating your GitHub universe, one insight at a time!</p>
                        <p className='p-3'>&copy; GitGlimpse 2023, All Rights Reserved</p>
                    </div>


                </div>

                {/* list of other services offered by gitglimpse */}

                <div className='max-w-[200px] sm:w-80 sm:max-w-none flex flex-col items-center mx-4 my-7'>


                    <div className='font-Inter text-center text-secondary font-bold text-2xl p-4'>
                        <p>Our Services</p>
                    </div>


                    <div className='flex flex-col items-center text-center text-base sm:text-lg font-Manrope text-primary'>
                        <p className='cursor-pointer p-2.5'>RepoMetrics</p>
                        <p className='cursor-pointer p-2.5'>SourcePulse</p>
                        <p className='cursor-pointer p-2.5'>DevStatsExplorer</p>
                        <p className='cursor-pointer p-2.5'>StackMedia</p>
                    </div>


                </div>

                {/* contact methods which includes mail, phone and social media handles*/}

                <div className='max-w-[200px] sm:w-80 sm:max-w-none flex flex-col items-center mx-4 my-7'>

                    <div className='font-Inter text-center text-secondary font-bold p-4 text-2xl'>
                        <p>Find Us</p>
                    </div>

                    <div className='font-Manrope text-primary flex flex-col text-center items-center text-base sm:text-lg'>
                        
                        <div className='text-center flex flex-col items-center'>
                            <img className='mx-1 w-5 h-5'src={mail} alt="mail"/>
                            <p>88 Colin P Kelly Jr St San Francisco California 94107</p>
                        </div>

                        <div className='flex p-4'>
                            <img className='mx-1 w-5 h-5' src={phone} alt="phone"/>
                            <p>+91 9873216721</p>
                        </div>
                        
                        <div className='flex p-4 '>
                            <img className='mx-1 w-5 h-5 cursor-pointer' src={ig} alt="instagram" />
                            <img className='mx-1 w-5 h-5 cursor-pointer' src={fb} alt="facebook" />
                            <img className='mx-1 w-5 h-5 cursor-pointer' src={x} alt="x" />
                        
                        </div>

                    </div>

                </div>


            </div>
        
     );
}
 
export default Footer;