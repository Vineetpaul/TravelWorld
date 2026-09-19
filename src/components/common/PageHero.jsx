const PageHero = ({ title, breadcrumb, backgroundImage }) => {
    return (
        <section
            className="relative h-[150px] bg-center bg-no-repeat shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent"> </div>

            {/* content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
                <div className="text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
                    <p className="text-sm md:text-base text-white/90">Home <span>,</span> {breadcrumb}</p>
                </div>
            </div>

        </section>
    )
}


export default PageHero