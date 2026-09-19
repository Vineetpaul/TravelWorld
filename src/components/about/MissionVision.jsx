import { GiFlame } from 'react-icons/gi'
import { FaShieldAlt } from 'react-icons/fa'

const MissionVision = () => {
    return (
        <section className='bg-[#e8f3fd] py-10 md:py-14'>
            <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8'>

                <h2 className='text-2xl md:text-3xl font-bold text-[#073b78] mb-8'>Our Mission & Vision</h2>

                {/* mission and vision section */}

                <div className='grid grid-cols-1 md:grid-cols-2'>

                    {/* mission */}
                    <div className='flex gap-5 md:pr-10 pb-8 md:pb-0 '>
                        <div className='w-15 h-15 shrink-0 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-lg '>
                            <GiFlame />
                        </div>
                        <div>
                            <h3 className='text-[18px] font-semibold text-[#073b78]  '>
                                Our Mission
                            </h3>
                            <p className='mt-2 leading-6 text-gray-600 lg:max-w-[400px] font-semibold text-[15px] '>To make international travel accessible, safe, and hassle-free for everyone by providing reliable services and guidance</p>
                        </div>
                    </div>

                    {/* Vision */}

                    <div className='flex gap-5 md:pr-10 pb-8 md:pb-0'>
                        <div className='w-15 h-15 shrink-0 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-lg'>
                            <FaShieldAlt/>

                        </div>
                        <div>
                            <h3 className='text-[18px] font-semibold text-[#073b78]'>
                                Our Vision
                            </h3>
                            <p className='mt-2 leading-6 text-gray-600 font-semibold text-[15px] lg:max-w-[400px]'>To be the leading global travel partner trusted for our, transparency and travel experience </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MissionVision