import React from 'react'

const home1 = ({className}) => {

    return( <div className={`flex flex-col items-center justify-center bg-transparent px-4 pt-10 text-center ${className}`}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Apply to Jobs 10x Faster with ApplyPilot
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
                    Your job search co-pilot—auto-fill applications and track progress in one sleek dashboard.
                </p>
            </div>
);
}

export default home1;