import React from 'react';
import Container from '../components/Container/Container';
import Logo from '../assets/logo.png';
import { Link } from 'react-router';

const Login = () => {
  return (
    <Container className="flex flex-col justify-center items-center h-[calc(100vh-50vh)]">
      <Link className="flex items-center gap-1 mb-5">
        <img src={Logo} alt="HomeNest" />
        <h2 className="text-lg font-bold">HomeNest</h2>
        <h2>Login</h2>
      </Link>

      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2">
        <div className="space-y-1.5">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
        </div>

        <div className="space-y-1.5">
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
        </div>

        <input
          className="btn bg-[#7065f0] text-white rounded-full mt-2 mb-0"
          type="submit"
          value="Login"
        />

        <div className="divider my-3 text-gray-500">Or sign in with</div>

        <button
          type="button"
          className="btn bg-white text-black border-[#e5e5e5] rounded-full"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center text-sm">
          Don't have an account?{'  '}
          <Link to="signup" className="text-[#7065f0]">
            Signup now
          </Link>
        </p>
      </form>
    </Container>
  );
};

export default Login;
