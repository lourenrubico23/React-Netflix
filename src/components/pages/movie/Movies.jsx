import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { CiCircleInfo, CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import BasicSlider from './BasicSlider';
import ModalMovieInfo from './ModalMovieInfo';
import { movies } from './data';

const Movies = () => {
    const [showMovieInfo, setMovieInfo] = React.useState(false);
    const [movieData, setMovieData] = React.useState(null);

    const handleShowMovieInfo = () => setMovieInfo(true)
    


  return (
  <>
<div className='bg-primary text-white'>

   
    <div className="banner bg-[url('../../img/movie/bannerMovie.jpg')] h-[90vh] w-full bg-cover isolate relative" >
        <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/40 z-[-1]"></div>
        <div className="header py-4 px-2 bg-gradient-to-b from-[rgba(0,0,0,0.10)] to-[rgba(0,0,0,0.5)">
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-10'>
                    <img src={`${baseImgUrl}/logo.png`} className='w-[148px] h-[50px] object-cover' alt="" />
                    
                        <ul className='flex items-center gap-5 text-white'>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">TV Shows</Link></li>
                            <li><Link to="#">Movies</Link></li>
                            <li><Link to="#">New & Popular</Link></li>
                            <li><Link to="#">My List</Link></li>
                            <li><Link to="#">Browse by Language</Link></li>
                        </ul>
                    
                </div>
                <div>
                    <ul className='flex items-center gap-5 text-white'>
                        <li><button><CiSearch /></button></li>
                        <li><button><CiBellOn /></button></li>
                        <li className='flex items-center gap-3'>
                            <button><img src="https:/via.placeholder.com/50x50" alt=""  className='rounded-md'/></button></li>
                        <FaCaretDown />
                    </ul>
                </div>
            </div>
        </div>
      
      <div className="absolute left-[10%] bottom-[30%] text-white">
        <h1 className='text-[70px] font-bold '>Queen of Tears</h1>
        <ul className='flex gap-5'>
            <li><button className='btn px-5 py-1.5 rounded-md bg-white text-stone-800 text-xl font-bold flex items-center'><FaCaretRight className='text-4xl'/>Trailer</button></li>
            <li><button className='btn px-5 py-1.5 rounded-md bg-stone-700 text-white text-xl font-bold border-transparent flex items-center gap-2'><CiCircleInfo className='text-3xl'/>More Info</button></li>
        </ul>
      </div>

    </div>

    <div className='slider__wrapper px-10 py-20'>
    <BasicSlider setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="Trending" sliderHeader="Trending Movies"/>
    <BasicSlider setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="Asian" sliderHeader="Asian Movies"/>
    </div>
</div>
    
    {showMovieInfo && <ModalMovieInfo setMovieInfo={setMovieInfo} movieData={movieData}/>}
    
    </>
  )
}

export default Movies
