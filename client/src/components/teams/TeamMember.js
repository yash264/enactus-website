import React from 'react';

const TeamMember = (props) => {
    return (
        <div className='grid gap-2 content-center'>
            <div className='h-80 w-80 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 flex items-center justify-center'>
                <img className="rounded-md object-scale-down max-h-full max-w-full" src={props.image} alt={props.name} style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
            </div>
            <div>
                <h2 className="font-bold text-gray-600 text-center">{props.name}</h2>
                <h3 className="text-gray-500 italic text-center">{props.position}</h3>
            </div>
        </div>
    );
};

export default TeamMember;