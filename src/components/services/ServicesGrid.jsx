import { services } from "../../data/services";
import ServiceCard from "../home/Services/ServiceCard";

const ServicesGrid = () =>{
    return (
        <section className="w-full bg-[#F8FAFC] py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">


                {/* Section Header */}
                <div className="">
                    <p className="text-md font-bold uppercase tracking-[1.5px] text-blue-400">Our Services</p>
                    <h2 className="mt-1 text-xl font-bold text-[#073b78] sm:text-2xl ">Comprehensive Travel Solutions</h2>
                    <p className="mt-2 text-sm leading-5 text-gray-400 sm:text-sm font-semibold">We offer a wide range of services to make your travel experience smooth, comfortable and worry-free</p>

                </div>


                {/* Services Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                    {services.map((service)=>(
                        <ServiceCard key={service.id} service={service}/>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default ServicesGrid