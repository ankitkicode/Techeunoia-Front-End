import InputField from "../components/InputField"
import loginpageGraphics from '../assets/loginpageGraphics.png';
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className="h-screen w-full bg-red-600 flex items-center justify-between bg-zinc-600">
    <div className="h-full w-1/2 bg-[#008196] flex items-center justify-center">
      <img src={loginpageGraphics} alt="" />
    </div>
    <div className="h-full w-1/2 bg-white py-6 px-10 flex items-center justify-center">
      <div className="rightContent  h-auto w-[64%]  px-1 ">
        <div className="text-group my-3">
          <h1 className='text-3xl mulish-600 text-[#605E5E] my-1'>Welcome,</h1>
          <p className='text-[#595959] text-[1.20rem] mb-1 mulish-500'>Connectiong the office world in one place.</p>
          <p className="text-[1.1rem] text-[#AAAAAA] ml-1">Please register to your account</p>
        </div>
       
        <form action="" class="w-full ">
        <InputField
      type="text"
      icon="/icons/user.svg" // Email icon
      placeholder="Full Name"
      id="text"
    />

      <InputField
      type="email"
      icon="/icons/email.svg" // Email icon
      placeholder="Email"
      id="email"
    />
      <InputField
      type="password"
      icon="/icons/Password.svg" // Password icon
      placeholder="Password"
      id="password"
    />
        <InputField
      type="text"
      icon="/icons/location.svg" // Email icon
      placeholder="Location"
      id="text"
    />
          <button className="btn-login w-full h-12 mt-0 text-white bg-[#119EB5] mulish-600">Register</button>
          {/* <div className='w-full '>
          <div className="or-sign-with-email relative flex items-center justify-center mt-4">
          <p className='text-[#595959] text-[1.07rem] mb-1 mulish-500'>Do you have an account? </p>
        </div>            
          <button className="btn-login w-full h-12 mt-5 text-white bg-[#119EB5] mulish-600">Sign up</button> 
            </div> */}
            <p className='w-full text-center mt-4 mulish-600 text-[#595959]'>
              Do you have an account? <Link  to={'/auth/login'} className='text-[#008196] text-[1.01rem] mulish-600'>Sign In</Link>
            </p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register
