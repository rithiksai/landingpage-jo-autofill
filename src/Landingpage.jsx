import React from 'react'
import Heading from './home1'
import Points from './points';
import Waitlist from './waitlist';

const Landingpage = () => {

    return(<div className='min-h-screen w-full bg-red-300'>
        <Heading></Heading>
        <Points></Points>
        <Waitlist></Waitlist>
    </div>);
}

export default Landingpage;