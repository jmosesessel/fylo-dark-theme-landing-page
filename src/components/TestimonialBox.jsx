import React from 'react'

function TestimonailBox(props) {
    const testimonials = props.testimonials
    return (
        <>
            {testimonials.map((testimonial)=>{
                return(
                    <div className=' text-white bg-dark-blue-testimonials mb-[1.5rem] text-[10px] rounded-lg flex flex-col p-5' key={testimonial.id}>
                        <p className=' text-[0.625rem] lg:text-[0.875rem]'>{testimonial.text}</p>
                        <div className='flex gap-1 items-center mt-4'>
                            <img className='w-6 h-6 rounded-full' src={testimonial.image} alt="" />
                            <div className='flex flex-col'>
                                <h3 className=' font-[700] text-[0.625rem] mb-1'>{testimonial.name}</h3>
                                <p className=' text-[0.4375rem]'>{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
        
  )
}

export default TestimonailBox