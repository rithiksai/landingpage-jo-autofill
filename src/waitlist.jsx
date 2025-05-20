import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const joinWaitlist = async () => {
    if (!email) {
      alert('Please enter your email.');
      return;
    }

    setStatus('Submitting...');

    const { data, error } = await supabase.from('waitlist').insert([{ email }]);

    if (error) {
      console.error('Supabase error:', error);
      setStatus('Something went wrong. Please try again.');
    } else {
      setStatus('Thanks for joining the waitlist! 🎉');
      setEmail('');
    }

    await fetch('http://localhost:5000/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
        });
  };

  return (
    <div className="bg-transparent py-12 px-4">
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
        {status && (
          <p className="mt-4 text-sm text-gray-600">{status}</p>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
