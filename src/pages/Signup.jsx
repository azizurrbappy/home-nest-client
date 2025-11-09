import React, { useContext, useState } from 'react';
import Container from '../components/Container/Container';
import Logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [emailRegEx, setEmailRegEx] = useState(false);
  const [passRegEx, setPassRegEx] = useState(false);
  const { signupUser, signInWithGoogle, setLoading, loading } =
    useContext(AuthContext);

  const handleSignup = async e => {
    e.preventDefault();
    setLoading(true);

    // Get data
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!emailRegex.test(email)) {
      return setEmailRegEx(true);
    }

    if (!passwordRegex.test(password)) {
      return setPassRegEx(true);
    }

    try {
      const userCredential = await signupUser(email, password);
      const user = userCredential.user;
      const token = userCredential.accessToken;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      setLoading(false);
      toast.success('Signed up successfully');
    } catch (error) {
      setLoading(false);
      toast.error(error.code, error.message);
      throw error;
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);

    try {
      const credential = await signInWithGoogle();
      const token = credential.accessToken;

      setLoading(false);
      toast.success('Google signin successfully');
    } catch (error) {
      setLoading(false);
      toast.error(error.code, error.message);
      throw error;
    }
  };

  return (
    <Container className="flex flex-col justify-center items-center h-[calc(100vh-25vh)]">
      <Link className="flex items-center gap-1 mb-5">
        <img src={Logo} alt="HomeNest" />
        <h2 className="text-lg font-bold">HomeNest</h2>
        <h2>Signup</h2>
      </Link>

      <form
        onSubmit={handleSignup}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2"
      >
        <div className="space-y-1.5">
          <label className="label">Name</label>
          <input
            required
            name="name"
            type="text"
            className="input"
            placeholder="Name"
          />
        </div>

        <div className="space-y-1.5">
          <label className="label">Photo URL</label>
          <input
            name="photoURL"
            type="text"
            className="input"
            placeholder="Photo URL"
          />
        </div>

        <div className="space-y-1.5">
          <label className="label">Email</label>
          <input
            name="email"
            required
            type="email"
            className="input"
            placeholder="Email"
          />
          {emailRegEx && (
            <p className="text-red-500">Enter valid email address</p>
          )}
        </div>

        <div className="space-y-1.5 relative">
          <label className="label">Password</label>
          <input
            name="password"
            required
            type={isShowPassword ? 'text' : 'password'}
            className="input"
            placeholder="Password"
          />
          {passRegEx && (
            <p className="text-red-400">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </p>
          )}

          <button
            type="button"
            onClick={() => setIsShowPassword(!isShowPassword)}
            className=" absolute top-9 right-4 cursor-pointer z-50"
          >
            {isShowPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        </div>

        <button className="btn bg-[#7065f0] text-white rounded-full mt-2 mb-0">
          Signup
          {loading && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
        </button>

        <div className="divider my-3 text-gray-500">Or signup with</div>

        <button
          onClick={handleGoogleSignup}
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
          Signup with Google
        </button>

        <p className="text-center text-sm">
          You have an account?{'  '}
          <NavLink to="../login" className="text-[#7065f0]">
            Login now
          </NavLink>
        </p>
      </form>
    </Container>
  );
};

export default Signup;
