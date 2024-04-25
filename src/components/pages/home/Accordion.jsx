import React from 'react'
import { GoPlus } from 'react-icons/go'

const Accordion = ({faq}) => {
    const [active, setActive] = React.useState(false)
    const body = faq.answer;

    const handleActive = () =>  setActive(!active)



  return (
    <div className="accordion p-5 bg-stone-800 hover:bg-stone-700 mb-2">
                <div className='flex justify-between items-center py-2 border-b border-stone-600 cursor-pointer' onClick={handleActive}>
                    <h4 className='question text-2xl '>{faq.question}</h4>
                    <GoPlus className={`text-5xl transition-all ${active ? "rotate-45" : "rotate-0"}`}/>
                </div>
                <div className={`${active ? "max-h-[500px]" : "max-h-[0]"} overflow-hidden transition-all h-full answer`}>
                    <div className='mt-5 text-xl' dangerouslySetInnerHTML={{__html: body}}>
                       
                    </div>
                    
                </div>
            </div>
  )
}

export default Accordion
