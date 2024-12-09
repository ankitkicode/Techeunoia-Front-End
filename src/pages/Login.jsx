
import { Link } from 'react-router-dom';
import loginpageGraphics from '../assets/loginpageGraphics.png';
import InputField from '../components/InputField';

const Login = () => {
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
            <p className="text-[1.1rem] text-[#AAAAAA] ml-1">Please login to your account</p>
          </div>
          <div className="btn-google-linkdIn h-12 flex items-center justify-between gap-6 my-5 ">
            <button className="btn-google w-1/2 h-full border-2 border-[#CACACA] flex items-center justify-center rounded-[.2rem] gap-2">
              <img src="/icons/google.svg" className='h-6' alt="" />
              <span className='text-[1.08rem] text-[#8a8a8a] mulish-600'>Google</span>
            </button>
            <button className="btn-google w-1/2 h-full border-2 border-[#CACACA] flex items-center justify-center rounded-[.2rem] gap-2">
              <img src="/icons/linkdIn.svg" className='h-6' alt="" />
              <span className='text-[1.08rem] text-[#8a8a8a] mulish-600'>Linkd In</span>
            </button>

          </div>
          <div className="or-login-with-email relative flex items-center justify-center">
            <p className='text-[#595959] text-[1.07rem] mb-1 mulish-500'>Or login with </p>
          </div>
          <form action="" class="w-full ">
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


            <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
  <input 
    type="checkbox" 
    name="remember" 
    id="remember" 
    className="w-4 h-4 " 
  />
  <label htmlFor="remember" className="text-[#A3A3A3] text-[1.01rem] mulish-700">
    Remember me
  </label>
</div>  
 <a href="#" className='text-[#008196] text-[1.01rem] mulish-600'>Forgot password?</a>
            </div>
            <button className="btn-login w-full h-12 mt-5 text-white bg-[#119EB5] mulish-600">Login</button>
            {/* <div className='w-full '>
            <div className="or-sign-with-email relative flex items-center justify-center mt-4">
            <p className='text-[#595959] text-[1.07rem] mb-1 mulish-500'>Do you have an account? </p>
          </div>            
            <button className="btn-login w-full h-12 mt-5 text-white bg-[#119EB5] mulish-600">Sign up</button> 
              </div> */}
              <p className='w-full text-center mt-4 mulish-600 text-[#595959]'>
                Do you have an account? <Link  to={'/auth/register'} className='text-[#008196] text-[1.01rem] mulish-600'>Sign up</Link>
              </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
