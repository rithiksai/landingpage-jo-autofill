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


    return(<div className="bg-white py-12 px-4">
                <div className="max-w-md mx-auto text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-4">
                    Be the first to try ApplyPilot. Join the waitlist:
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={joinWaitlist}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Join Waitlist
                    </button>
                    </div>
                </div>
            </div>
);
}

export default Waitlist;