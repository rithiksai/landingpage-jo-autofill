import React from 'react'
import Heading from './home1'
import Points from './points';
import Waitlist from './waitlist';

const Landingpage = () => {

    return(<div className='grid min-h-screen w-full'>
        <Heading></Heading>
        <Waitlist></Waitlist>
        <Points></Points>
        
    </div>);
}

export default Landingpage;