import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from './links'

const Footer = () => {
  return (
    <div className='bg-black'>
    <footer className='container ml-auto text-white max-w-[1200px] mx-auto px-4 py-[3rem]'>
      <div>
          <Link className=' underline'>Questions? Contact us</Link>
      </div>

        <div className='grid grid-cols-4 w-[80%] gap-10'>
            {footerLinks.map((item, key)=>{
                return(
                    <div className='footer-link my-10' key={key}>
                        <ul className='opacity-70 space-y-6'>
                            {item.links.map((link, key) => <li key={key} className='underline'><Link to={`${link}`}>{link.label}</Link></li>)}
                        </ul>
                    </div>
                )
            })}
        </div>

        <div className="footerbtn">
          <button className='btn mb-5'>English</button>
            <p>Netflix Philippines</p>
        </div>
        
                
                
    </footer>
    </div>
  )
}

export default Footer
