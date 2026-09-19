import { aboutBenefits } from "../../data/aboutBenefits";
import BeachFlight from '../../assets/AboutImages/BeachFlight.png'

const WhyChooseTravelWorld = () => {
    return (
        <section className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                {/* div for grid layout */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center'>

                    {/* left section */}
                    <div className=' lg:pr-12 lg:border-r lg:border-gray-200 lg:shadow-[4px_0_6px_-6px_rgba(0,0,0,0.25)]'>

                        <h2 className='text-3xl sm:text-4xl font-bold leading-tight text-[#073b78] max-w-lg'>
                            Why Choose TravelWorld?

                        </h2>

                        {/* Points  */}
                        <div className="space-y-6 mt-5">
                            {aboutBenefits.map((benefits) => {
                                const Icon = benefits.icon;
                                return (
                                    <div key={benefits.id} className="flex items-start gap-4 ">
                                        <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-lg"><Icon /></div>
                                        <div>
                                            <h3 className="text-[18px] md:text-lg font-semibold text-[#073b78] ">{benefits.title}</h3>
                                            <p className="mt-1 text-[15px] text-gray-500 font-semibold leading-6">{benefits.description}</p>
                                        </div>

                                    </div>
                                )
                            })}


                        </div>

                    </div>


                    {/* right image section */}
                    <div className='relative lg:pl-12'>
                        <div className='overflow-hidden rounded-xl '>
                            <img src={BeachFlight} alt='background Image' className='w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover' />
                        </div>

                    </div>




                </div>

            </div>
        </section>

    )
}

export default WhyChooseTravelWorld