const DestinationCard = ({ destination }) => {
    return (
        <article className='group cursor-pointer'>
            <div className='overflow-hidden rounded-lg'>
                <img
                    className='h-44 w-full object-cover transition duration-500 group-hover:scale-105 md:h-48'
                    src={destination.image}
                    alt={destination.country}
                />
            </div>
            <div className='mt-3'>
                <h3 className='text-base font-bold text-blue-950 md:text-lg'>{destination.country}</h3>
                <p className='mt-1 text-[11px] text-gray-400'>{destination.details}</p>
            </div>
        </article>
    )
}

export default DestinationCard