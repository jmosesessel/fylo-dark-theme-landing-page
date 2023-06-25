import React from 'react'
import QuoteIcon from '../assets/images/bg-quotes.png'
import Satish from '../assets/images/profile-1.jpg'
import Bruce from '../assets/images/profile-2.jpg'
import Iva from '../assets/images/profile-3.jpg'
import TestimonialBox from './TestimonialBox'

const testimonials = [
    {
        id: 1,
        text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image: Satish,
        name: 'Satish Patel',
        position: 'Founder & CEO, Huddle'
    },
    {
        id: 2,
        text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image: Bruce,
        name: 'Bruce McKenzie',
        position: 'Founder & CEO, Huddle'
    },
    {
        id: 3,
        text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image: Iva,
        name: 'Iva Boyd',
        position: 'Founder & CEO, Huddle'
    }
]
function TestimonialList() {
  return (
    <div className='mx-12 mb-40'>
        <img className='w-8 text-[5rem]' src={QuoteIcon} alt="" />
        <TestimonialBox testimonials={testimonials} />
    </div>
  )
}

export default TestimonialList