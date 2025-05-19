import React, { useState } from 'react';

const Waitlist = () => {

    const [email, setEmail] = useState('');

    const joinWaitlist = () => {
        if (!email) {
        alert('Please enter your email.');
        return;
        }
        // TODO: send email to backend or API
        console.log('Email submitted:', email);
        alert('Thanks for joining the waitlist!');
        setEmail(''); // clear input after submit
    };


    return(<div>
        <div>Be the first to try ApplyPilot. Join the waitlist:</div>
        <div>
            <input type='email' id="emailInput" placeholder="Enter your email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <button type='button' onClick={joinWaitlist}>submit</button>
            
        </div>
    </div>);
}

export default Waitlist;