import React from 'react';
import { Link } from 'react-router';

const Signin = () => {
    return (
        <div className="hero bg-blue-500 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            </div>
            <div className="card bg-white/05 backdrop-blur-sm w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form action=""> 
                <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input bg-white/05 backdrop-blur-sm" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input bg-white/05 backdrop-blur-sm" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>New to our webstie? <Link to={"/signup"} className="text-purple-500">SignUp</Link></p>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Signin;