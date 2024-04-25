import React from 'react'
import { PiCaretRightBold } from 'react-icons/pi'

const FormSubscribe = () => {
  return (
    <form action="" className='flex gap-3  items-center justify-center mt-12 '>
                <div className="input__wrapper m-0 w-[450px]">
                    <input type="text" name='email' required/>
                    <label htmlFor="email">Email or Mobile Number</label>
                </div>
                <button className='rounded-md bg-accent text-white text-2xl p-3 flex gap-3 items-center'>Get Started <PiCaretRightBold /></button>
            </form>
  )
}

export default FormSubscribe
