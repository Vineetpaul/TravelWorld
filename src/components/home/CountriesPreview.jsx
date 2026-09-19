import countries from '../../data/countries';
import CountryCard from '../countries/CountryCard';

const CountriesPreview = () => {
    return (
        <section className='relative overflow-hidden bg-[#064c83] py-12 text-white sm:py-14'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(37,150,210,0.32),transparent_24%),linear-gradient(180deg,rgba(0,36,81,0.22),rgba(0,75,125,0.08))]'></div>
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#00366d]/80 to-transparent'></div>

            <div className='relative mx-auto max-w-6xl px-5 lg:px-8'>
                <div className='mx-auto max-w-3xl text-center'>
                    <h2 className='text-2xl font-bold tracking-normal text-white md:text-3xl'>Explore by Country</h2>
                    <p className='mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/78'>Choose from the most popular travel destinations and create unforgettable memories.</p>
                </div>

                <div className='mt-8 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {countries.map((country) => (
                        <CountryCard key={country.id} country={country} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountriesPreview;
