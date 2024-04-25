import React from 'react'
import Header from '../../partials/Header'
import { LiaEye, LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [hasValue, setHasValue] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [getEmail, setGetEmail] = React.useState('');
    const [getPassword, setGetPassword] = React.useState('');


let email = "louren@gmail.com";
let password = "12345";

    const handleChange = (e) => {
        if(e.target.value !== ""){
            setHasValue(true);
            setGetPassword(e.target.value)
        }else{
            setHasValue(false);
        }
    }

    const handleGetEmail = (e) => setGetEmail(e.target.value)

    const handleShowPassword = () => setShowPassword(!showPassword)
    console.log(showPassword)

    const handleCheckLogin = () => {
        if((getEmail === email) && (getPassword === password)) {
            navigate('/home');
        }else{
            console.log("Access not granted")
        }
    }

  return (
    <>
    <div className="login bg-[url('../../img/bg-login.jpg')] h-screen w-full bg-cover isolate relative">
        <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/70 z-[-1]"></div>
        
    <Header isLogin={true}/>

    <div className="form absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[450px] bg-black/80 h-[800px] rounded-md p-14">
            <h1 className='text-3xl text-white mb-8 font-bold'>Sign Up</h1>

            <form action="" className='text-white'>
                <div className="input__wrapper">
                    <input type="text" name='email' required onChange={(e) => handleGetEmail(e)}/>
                    <label htmlFor="email">Email or Mobile Number</label>
                </div>
                <div className="input__wrapper">
                    <input type={showPassword ? "text" : "password"} name='password' required onChange={(e) => handleChange(e)}/>
                    <label htmlFor="password">Password</label>
                    {hasValue && (<button type="button" className='text-white absolute top-5 right-3  text-lg' onClick={handleShowPassword}>
                    {showPassword ? <LiaEyeSlashSolid/> : <LiaEyeSolid/> }</button>)}
                </div>

                <button type="button" className="w-full p-2 rounded-md bg-accent text-white" onClick={handleCheckLogin}>Sign In</button>
                <span className='block text-center my-3 uppercase'>or</span>
                <button type="button" className="w-full p-2 rounded-md bg-white/20 text-white">Use a Sign-in code</button>
                <Link className='block text-center my-4 hover:underline'>Forgot Password</Link>

                <div className='mb-3 flex gap-2'>
                    <input type="checkbox" />
                    Remember Me
                </div>
                
                <p className='mb-5'>New to Netflix? <Link to="#" className='font-bold'>Sign Up Now</Link>.</p>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className='text-blue-600 hover:underline'>Learn more.</Link></p>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login
