import React from 'react';
import { toast } from 'react-toastify';

const Profile = () => {
    return (
        <div className='text-white min-h-screen flex flex-col justify-center items-center gb-gredient bg-linear-to-r from-cyan-500 to-blue-500'>
            <h1 className='text-5xl font-bold mb-3'>Profile Page in commig soon</h1>
            <p>Stay tuned! we are crafting something amazing for you.</p>
            <div className='mt-5'>
                 <button onClick={() => toast("Wow so easy!")} className='btn btn-outline btn-white'>Click me</button>
            </div>

        </div>
    );
};

export default Profile;