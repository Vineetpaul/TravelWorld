
import { FaArrowRightLong } from 'react-icons/fa6'
import destinations from '../../data/destinations'
import DestinationCard from '../destinations/DestinationCard'

const PopularDestinations = () => {
    return (
        <section className='bg-[#F8FAFC] py-16'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>

                {/* section Header */}
                <div className='mb-8 flex items-end justify-between'>
                    <div>
                        <p className='mb-2 text-md font-bold uppercase tracking-[2px] text-blue-500'>
                            Top Destinations
                        </p>
                        <h2 className='text-3xl font-bold text-blue-950 md:text-4xl '>
                            Popular Destinations
                        </h2>
                        <p className='mt-2 text-sm text-gray-500'> Discover the most loved travel destinations around the world.</p>
                    </div>
                    <a href='' className='hidden items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800 md:flex'>View All Countries <span><FaArrowRightLong /></span></a>
                </div>

                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5'>
                    {destinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularDestinations
