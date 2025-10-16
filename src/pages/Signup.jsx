import React from 'react';
import { Link } from 'react-router';

const Signup = () => {
    return (
      <div className="hero bg-blue-500 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            </div>
            <div className="card bg-white/05 backdrop-blur-sm w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form action=""> 
                <fieldset className="fieldset text-white">
                <label className="label">Name</label>
                <input type="text" className="input bg-white/10 backdrop-blur-sm" placeholder="Your name" />
                <label className="label">Email</label>
                <input type="email" className="input bg-white/10 backdrop-blur-sm" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input bg-white/10 backdrop-blur-sm" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Sign Up</button>
                </fieldset>
                <p className='text-white'>Already have an account? <Link to={"/signin"} className="text-purple-500">Sign in</Link></p>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;