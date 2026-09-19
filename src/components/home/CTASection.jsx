import Beach from '../../assets/Layout/Beach.jpg'
import { FaArrowRightLong } from 'react-icons/fa6'

const CTASection = () => {
    return (
        <section className="relative min-h-[180px] sm:min-h-[210px] bg-cover bg-center  w-full overflow-hidden bg-[#e9f4ff] py-8"
            style={{ backgroundImage: `url(${Beach})` }} >



            {/* overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black-20 to-transparent "></div>

            <div className='relative mx-auto flex min-h-[180px] max-w-7xl items-center px-5 sm:min-h-[200px] sm:px-8'>




                {/* content */}
                <div className='max-w-[430px]'>

                    <h2 className='text-2xl font-bold text-white sm:text-3xl'>Ready To Explore The World?</h2>
                    <p className='mt-2 max-w-[400px] text-white/90 font-semibold leading-5 sm:text-sm '>Let us help you plan your perfect trip and create memories</p>
                    <button className='mt-5 bg-blue-500 flex items-center gap-2  justify-center rounded-xl p-2 hover:scale-105 transition-all duration-300 font-semibold text-white' type='button'>Plan your trip <span className=''><FaArrowRightLong/></span></button>
                </div>
            </div>
        </section>
    )
}

export default CTASection