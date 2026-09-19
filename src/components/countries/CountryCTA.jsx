import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Map from '../../assets/Countries/Map.png'
const CountryCTA = () => {
    return (
        <section className="bg-[#F8FAFC] py-5 md:py-10">
            {/* basic sizing */}
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

                {/* basic grid layout */}
                <div className="grid grid-cols-1 items-center gap-6 rounded-xl bg-[#e5f0fb] px-6 py-7 md:grid-cols-2 md:px-8 md:py-8 lg:gap-10">
                    {/* Left Map image */}
                    <div className="flex items-center justify-center">
                        <img src={Map} alt="World Map"
                            className="w-full max-w-md object-contain rounded-xl" />
                    </div>

                    {/* right section */}
                    <div className="">
                        <h2 className="text-2xl font-bold text-[#073b78] md:text-3xl">Not Sure Where to Go?</h2>
                        <p className="mt-3 max-w-md text-[15px] leading-6 text-gray-500 lg:text-[18px] ">Get in Touch with our travel experts for personalized recommendations</p>
                        <Link to="/contact" className="mt-5 bg-blue-500 flex items-center gap-2  justify-center rounded-xl p-2 hover:scale-105 transition-all duration-300 font-semibold text-white max-w-[150px]">Contact <span><FaArrowRightLong /></span></Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CountryCTA