import {testimonials} from '../../data/testimonials'
import TestimonialCard from '../../components/testimonials/TestimonialCard'

const Testimonials = () =>{
    return (
        <section className='w-full bg-[#F8FAFC] py-16'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>

                
                {/* Section Header */}
                <div className="">
                    <p className="text-md font-bold uppercase tracking-[1.5px] text-blue-400">Travel Stories</p>
                    <h2 className="mt-1 text-xl font-bold text-blue-950 sm:text-2xl ">What Our Travelers Say?</h2>
                    <p className="mt-2 text-sm leading-5 text-gray-400 sm:text-sm font-semibold">Real People, Real experience, Trusted by Thousands.</p>

                </div>

                {/* Testimonials */}
                <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-3'>
                    {testimonials.map((testimonial)=>(
                        <TestimonialCard key={testimonial.id}
                        testimonial={testimonial}/>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Testimonials