import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6'
import FlightImage from '../../assets/Layout/ContactImage.png'
// import { useState } from 'react'

import { contactInfo } from '../../data/Contact/ContactInfo'

const ContactSection = () => {
    const icons = [FaPhone, FaEnvelope, FaLocationDot];

//     const [formData, setFormData] = useState("")

//     const handleSubmit = (e) =>{
// e.preventDefault();
// setFormData

//     }


    return (
        <section className='bg-[] py-5 md:py-8'>
            {/* basic sizing */}
            <div className='mx-auto max-w-6xl px-5 sm:px-6 lg:px-8'>

                {/* grid layout */}
                <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16'>

                    {/* left section */}
                    <div className=''>
                        <div>
                            <h2 className='text-2xl font-bold text-[] md:text-3xl'>
                                Get in Touch
                            </h2>
                            <p className='mt-3 max-w-lg text-[15px] leading-6 text-gray-500 font-semibold'>
                                We are here to help you plan and make the most travel experience. Get in touch with us for more Information.
                            </p>


                            {/* icons section */}
                            <div className='mt-7 space-y-6 bg-blue-100 p-4 rounded-xl'>
                                {contactInfo.map((item, index) => {
                                    const Icon = icons[index]
                                    return (
                                        <div className='flex items-start gap-4 ' key={item.id}>
                                            <div className='flex rounded-full bg-blue-200 h-9 w-9 shrink-0 items-center justify-center text-blue-600'>
                                                <Icon className='text-lg' />
                                            </div>
                                            <div>
                                                 <h3 className='text-[18px] font-semibold text-blue-900'>{item.title}</h3>
                                                 {item.details.map((details, detailIndex) => (<p className='mt-1 text-[13px] text-gray-500' key={detailIndex}>{details}</p>))}
                                                 </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                    {/* right section form */}
                    <div className=''>
                        <form className='space-y-4 ' onSubmit={handleSubmit}>


                            <div>
                                <label className='mb-2 block text-sm font-medium text-[#073b78]'>Your Name <span className='text-red-500'>*</span></label>
                                <input type='text' placeholder='Enter your Name'
                                className='h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none placeholder:text-gray-300 focus:border-blue-400'/>
                            </div>

                             <div>
                                <label className='mb-2 block text-sm font-medium text-[#073b78]'>Your Email <span className='text-red-500'>*</span></label>
                                <input type='email' placeholder='Enter your Email'
                                className='h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none placeholder:text-gray-300 focus:border-blue-400'/>
                            </div>

                             <div>
                                <label className='mb-2 block text-sm font-medium text-[#073b78]'>Your Phone <span className='text-red-500'>*</span></label>
                                <input type='tel' placeholder='Enter your Phone Number'
                                className='h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none placeholder:text-gray-300 focus:border-blue-400'/>
                            </div>

                             <div>
                                <label className='mb-2 block text-sm font-medium text-[#073b78]'>Subject <span className='text-red-500'>*</span></label>
                                <input type='text' placeholder='Enter Subject'
                                className='h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none placeholder:text-gray-300 focus:border-blue-400'/>
                            </div>

                             <div>
                                <label className='mb-2 block text-sm font-medium text-[#073b78]'>Message <span className='text-red-500'>*</span></label>
                                <input rows="4" placeholder='Write your message...'
                                className='h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none placeholder:text-gray-300 focus:border-blue-400'/>
                            </div>
                            <button type='button' className='mt-5 bg-blue-500 flex items-center gap-2  justify-center rounded-xl p-2 hover:scale-105 transition-all duration-300 font-semibold text-white'>Send Message</button>
                        </form>
                    </div>

                </div>

                <div className='mt-10 flex justify-center'>
                    <img src={FlightImage} alt='' className='w-full max-w-7xl h-[180px] md:h-[180px] rounded-xl'/>
                </div>

            </div>
            
        </section>
    )
}
export default ContactSection