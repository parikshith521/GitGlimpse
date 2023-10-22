import React from 'react';

// about page component
const About = () => {

    
    return (  
        

            <div className= 'max-w-screen-xl my-80 mx-7'>

            {/*about section header */}
                <div className='text-secondary font-Inter p-3 font-bold text-6xl sm:text-8xl'>
                    <p>Who we are.</p>
                </div>

            {/* about section content */}
                <div className='text-primary font-Manrope p-2 text-base sm:text-xl'>
                    <p>
                        At GitGlimpse, we wholeheartedly believe that behind every GitHub username lies a unique narrative  of passion, collaboration, and innovation. Our platform is not just about displaying information; it's about unraveling the tales woven within your repositories and contributions.
                    </p>
                </div>


            </div>
        
    );
}
 
export default About;