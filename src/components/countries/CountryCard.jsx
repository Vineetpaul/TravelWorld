const CountryCard = ({ country }) => {
    return (
        <article className="group text-center">
            <div className="relative aspect-[1.84/1] overflow-hidden rounded-md border border-white/15 bg-white/10 shadow-[0_12px_24px_rgba(0,34,73,0.25)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_30px_rgba(0,34,73,0.36)]">
                <img
                    src={country.image}
                    alt={country.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"></div>

                <p className="absolute bottom-2 left-1/2 max-w-[92%] -translate-x-1/2 truncate rounded-full bg-black/24 px-3 py-1 text-xs font-semibold leading-none text-white shadow-sm backdrop-blur-[1px]">
                    {country.details}
                </p>
            </div>
            <h3 className="mt-2 text-sm font-semibold leading-5 text-white md:text-base">{country.name}</h3>
        </article>
    );
};

export default CountryCard;
