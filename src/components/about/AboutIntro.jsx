import AboutBG from '../../assets/Layout/AboutBackground.png'
import { FaArrowRight } from 'react-icons/fa'

const AboutIntro = () => {
    return (
        <section className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                {/* div for grid layout */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center'>

                    {/* left section */}
                    <div className='lg:pr-12 lg:border-r lg:border-gray-200 lg:shadow-[4px_0_6px_-6px_rgba(0,0,0,0.25)]'>
                        <p className='text-md font-semibold tracking-wider text-blue-600 uppercase'>
                            About TravelWorld

                        </p>
                        <h2 className='text-3xl sm:text-4xl font-bold leading-tight text-[#073b78] max-w-lg'>
                            We Believe in Making Travel Simple, Safe & Memorable

                        </h2>
                        <p className='mt-5 text-gray-600 font-semibold leading-7 max-w-lg'>
                            TravelWorld is a premier travel and visa consultancy company, dedicated to helping individuals, families, and businesses explore the world with confidence. With years of experience and a team of travel experts, we provide end-to-end travel solutions including flight bookings, hotel reservations, tour packages, visa assistance and personalised travel planning.
                        </p>
                        <button type='button'
                            className='mt-5 lg:w-30 bg-blue-500 flex items-center gap-2  justify-center rounded-xl p-2 hover:scale-105 transition-all duration-300 font-semibold text-white'>Our Story <FaArrowRight /></button>
                    </div>


                    {/* right image section */}
                    <div className='relative lg:pl-12'>
                        <div className='overflow-hidden rounded-xl '>
                            <img src={AboutBG} alt='background Image' className='w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover' />
                        </div>

                    </div>




                </div>

            </div>
        </section>

    )
}

export default AboutIntro