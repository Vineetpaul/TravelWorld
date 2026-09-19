
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot, FaPlane } from 'react-icons/fa6'
import { SlCalender } from 'react-icons/sl'
import HeroBG from '../../assets/Layout/HeroBG.png'

const Hero = () => {
    return (
        <section className='relative min-h-screen overflow-hidden bg-gray-800'>
            <img
                className='absolute inset-0 h-full w-full object-cover opacity-80'
                src={HeroBG}
                alt=''
            />
            {/* <div className='absolute inset-0 bg-gray-900/60' /> */}

            <div className='relative mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pb-36 pt-24 text-center lg:px-8'>
               
               
                <div>
                    <p className='mb-2 text-md font-bold uppercase tracking-[2px] text-white/80 '>
                        Top Destinations
                    </p>
                    <h2 className='font-bold text-[30px] text-white text-5xl md:text-4xl '>
                        Explore the World
                    </h2>

                     <h2 className='text-4xl lg:text-7xl font-bold text-[#00BFFF] text-shadow-lg md:text-4xl '>
                       With Us
                    </h2>
                    <p className='mt-2 text-sm text-white/80'> Discover the most loved travel destinations around the world.</p>
                </div>

                

                <div className='absolute bottom-6 left-6 right-6 flex flex-col gap-2 rounded-xl bg-[#F8FAFC] p-4 text-left shadow-xl sm:bottom-8 lg:bottom-24 lg:left-8 lg:right-8 lg:flex-row lg:items-center lg:gap-3'>
                    <div className='flex h-[80px] w-full items-center gap-4 rounded-xl bg-white p-4'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-md bg-blue-200'>
                            <FaLocationDot className='text-blue-800' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold text-gray-800'>Destination?</h2>
                            <p className='text-sm text-gray-600'>Where to?</p>
                        </div>
                    </div>

                    <div className='flex h-[80px] w-full items-center gap-4 rounded-xl bg-white p-4'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-md bg-blue-200'>
                            <SlCalender className='text-blue-800' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold text-gray-800'>Travel Date</h2>
                            <p className='text-sm text-gray-600'>Select Date?</p>
                        </div>
                    </div>

                    <div className='flex h-[80px] w-full items-center gap-4 rounded-xl bg-white p-4'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-md bg-blue-200'>
                            <FaPlane className='text-blue-800' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold text-gray-800'>Travel Type</h2>
                            <p className='text-sm text-gray-600'>Air?</p>
                        </div>
                    </div>

                    <button className='flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 p-2 font-semibold text-white transition-all duration-300 hover:scale-105 lg:max-w-[120px]'>
                        <FaSearch />
                        Search
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
