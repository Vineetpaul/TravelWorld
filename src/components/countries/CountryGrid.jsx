import countries from "../../data/CountriesData/countries";
import CountryCard from "./CountryCard";

const CountryGrid = () =>{
    return(
        <section className="bg-[#F8FAFC] py-5 md:py-10">
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mb-7">
                    <h2 className="text-2xl font-bold text-[#073b78] md:text-3xl">Explore Our Top Destination</h2>
                    <p className="mt-2 max-w-3xl text-[15px] leading-6 text-gray-500 md:text-[16px]">From iconic landmarks to hidden gems, these countries offer unforgettable experiences.</p>
                </div>

{/* Countries */}
<div className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
    {countries.map((country)=>(
        <CountryCard key={country.id} country={country} />
    ))}
</div>

            </div>
        </section>
    )
}

export default CountryGrid