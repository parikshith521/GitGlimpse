import React from 'react';
import {Link} from 'react-router-dom';
import {home,contact,about,logo} from '../../assets';

//Navbar component
const Navbar = () => {
    return ( 

        <div className='w-full flex justify-around content-around text-primary my-1.5'>

        {/* logo and the website's name */}
            <div className='flex items-center cursor-pointer'>
                <Link to="/"><img className='w-12 h-12 hidden sm:block' src={logo} alt="logo" /></Link> 
                <Link to="/"><p className='text-secondary font-Inter font-bold text-2xl p-1.5'>GitGlimpse</p></Link>
            </div>

        {/* navbar links */}
            <div className='flex justify-center items-center'>
                <Link to="/"><img className='w-6 h-6 mx-1.5 sm:hidden' src={home} alt="home"/></Link>
                <Link to="/"><p className='m-4 text-lg font-Manrope font-medium hidden sm:block'>Home</p></Link>
                <Link to="/about"><img className='w-6 h-6 mx-1.5 sm:hidden' src={about} alt="about"/></Link>
                <Link to="/about"><p className='m-4 text-lg font-Manrope font-medium hidden sm:block'>About</p></Link>
                <Link to="/contact"><img className='w-6 h-6 mx-1.5 sm:hidden' src={contact} alt="contact"/></Link>
                <Link to="/contact"><p className='m-4 text-lg font-Manrope font-medium hidden sm:block'>Contact</p></Link>
            </div>


        </div>

    );
}
 
export default Navbar;