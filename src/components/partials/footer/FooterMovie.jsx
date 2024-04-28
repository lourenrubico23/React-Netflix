import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks, moviefooter } from './links'
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { CiFacebook, CiInstagram } from 'react-icons/ci'
import { CgFacebook, CgTwitter, CgYoutube } from 'react-icons/cg'
import { FiInstagram } from 'react-icons/fi'

const FooterMovie = () => {
  return (
    <div className='bg-primary'>
    <footer className='container ml-auto text-white max-w-[1200px] mx-auto px-4 py-[3rem]'>
      <div className='flex gap-7 text-3xl'>
          <Link><CgFacebook/></Link>
          <Link><FiInstagram/></Link>
          <Link><BsTwitter/></Link>
          <Link><BsYoutube/></Link>
      </div>

        <div className='grid grid-cols-4 w-[80%] gap-10'>
            {moviefooter.map((item, key)=>{
                return(
                    <div className='footer-link my-10' key={key}>
                        <ul className='opacity-70 space-y-6'>
                            {item.links.map((link, key) => <li key={key} className='text-gray-400'><Link to={`${link}`}>{link.label}</Link></li>)}
                        </ul>
                    </div>
                )
            })}
        </div>

        <div className="footerbtn text-gray-400 ">
          <button className='btn mb-5 border-gray-400 text-gray-400'>Service Code</button>
            <p>&copy; 1997-2024 Netflix, Inc.</p>
        </div>
        
                
                
    </footer>
    </div>
  )
}

export default FooterMovie
