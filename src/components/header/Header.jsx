import React from 'react';
import {leftArrow,rightArrow,downArrow} from '../../assets'

//header component
const Header = () => {
    return ( 

        <div className='max-w-screen-xl mx-4 my-60 flex flex-col items-center'>

            {/*downward arrow is only shown for screens smaller than xl */}
            <div>
                <img className='block xl:hidden max-w-[200px] max-h-[300px] mb-10'src={downArrow} alt="down arrow" />
            </div>

            {/*contains header content and left and right arrows which are only displayed for screens larger than xl */}
            <div className='flex justify-center items-center'>
                <div className=''>
                    <img className='hidden xl:block max-w-[200px] max-h-[300px]'src={leftArrow} alt="left arrow" />
                </div>
                <div className='font-Inter font-bold text-primary text-5xl sm:text-7xl text-center max-w-4xl'>
                    <p>Details & statistics, just a search away.</p>
                </div>
                <div className=''>
                    <img className='hidden xl:block max-w-[200px] max-h-[300px]' src={rightArrow} alt="right arrow" />
                </div>
            </div>
            


        </div>

     );
}
 
export default Header;