import React from 'react'
import Heading from './home1'
import Points from './points';
import Waitlist from './waitlist';

const Landingpage = () => {

    return(<div className='grid min-h-screen w-full px-6 py-12 bg-gradient-to-b from-white via-blue-200 to-white'>
        <Heading></Heading>
        <Waitlist></Waitlist>
        <Points></Points>
        
    </div>);
}

export default Landingpage;