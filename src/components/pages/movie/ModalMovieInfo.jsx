import React from 'react'
import { FaPlay, FaPlusCircle, FaThumbsUp, FaTimesCircle } from 'react-icons/fa'
import { baseImgUrl } from '../../helpers/functions-general'
import MovieRelatedCard from './MovieRelatedCard'
import { movies } from './data'

const ModalMovieInfo = ({setMovieInfo, movieData}) => {
    const handleClose = () =>  setMovieInfo(false)

    const getRelatedGenre = movies.filter((movie) => movie.genre === movieData.genre && movie.title !==movieData.title)

  return (
    <div className='fixed top-0 left-0 w-full h-screen isolate text-white'>
        <div className="backdrop absolute top-0 left-0 h-full w-full bg-black/70"></div>

        <main className='max-w-[700px] w-full bg-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] max-h-[1000px] h-full'>
            
            <div className='modal__banner'>
                <div className='relative'>
                    <img src={`${baseImgUrl}/movie/${movieData.img}`} alt="" className='opacity-80 w-full h-[400px] bg-cover' />
                    <button type="button" className='absolute top-4 right-4 text-primary' onClick={handleClose}><FaTimesCircle className='text-white text-xl'/></button>

                    <div className='absolute left-[20px] bottom-[30px] text-white z-[999]'>
                        <h2 className='text-4xl font-bold mb-5'>{movieData.title}</h2>
                        <ul className='flex items-center gap-2 text-white'>
                            <li><button className='py-1 px-3 text-primary flex items-center gap-2 bg-white rounded-md text-sm'><FaPlay/>Play</button></li>
                            <li><button><FaPlusCircle/></button></li>
                            <li><button><FaThumbsUp/></button></li>
                        </ul>
                    </div>
                </div>

                <div className="movie__info relative p-4 grid "></div>
                
                <div className='p-4 grid grid-cols-[3fr_1fr] gap-5 text-white'>
                    <div className="info">
                        <div className="duration mb-4">
                            <p className='text-sm mb-2'><span>{movieData.year}</span> <span>{movieData.duration}</span> <span className='p-.1 border border-white text-xs'>HD</span></p>
                            <p className='border border-white inline p-.5'>{movieData.rating}+</p>
                        </div>
                        <p>{movieData.description}</p>
                    </div>

                    <ul>
                        <li className='text-stone-500 mb-3 text-xs'><span className='text-stone-200'>Cast: </span>{movieData.cast}</li>
                        <li className='text-stone-500 mb-3 text-xs'><span className='text-stone-200'>Genre: </span>{movieData.genre}</li>
                        <li className='text-stone-500 mb-3 text-xs'><span className='text-stone-200'>This Movie is: </span>{movieData.type}</li>
                    </ul>


                </div>
            </div>

            <h5 className='pl-4 my-5 font-bold text-xl'>More like this</h5>
            <div className='h-[250px] overflow-auto px-4 custom-scroll'>
                <div className='grid grid-cols-3 gap-2'>
                    {getRelatedGenre.map((movie, key) => (<MovieRelatedCard movie={movie}/>))}

                </div>
            </div>
            
        </main>
      
    </div>
  )
}


export default ModalMovieInfo
