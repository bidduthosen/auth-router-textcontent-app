import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/UserContexts';

const Register = () => {

    const {createUser, signInGoogle} = useContext(authContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then( result =>{
            const user = result.user;
            console.log('registration now', user);
            form.reset();
        })
        .catch( error => console.error(error))
        
    }
    const handleSignInGoogle=()=>{
        signInGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Registration now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered"required />
                        <label className="label">
                          <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Registration Now</button>
                      </div>
                    </form>
                    <button onClick={handleSignInGoogle} className="btn btn-outline btn-secondary mb-4 mx-2">Google LogIn</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Register;