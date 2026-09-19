import { additionServices } from "../../data/ServicesPageData/additionalServices";
import FlightWindow from '../../assets/ServiceImage/FlightWindow.png';

const AdditionalServices = () => {
    return (
        <section className="bg-[#e7f3ff] py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#073b78] mb-6">
                            Additional Services
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                            {additionServices.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <div key={service.id} className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500 shrink-0">
                                            <Icon size={16} />
                                        </div>
                                        <p className="text-[15px] font-semibold text-gray-500 leading-6">
                                            {service.title} 
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="w-full ">
                        <img
                            src={FlightWindow}
                            alt="Travel Window"
                            className="w-full h-[200px] sm:h-[200px] lg:h-[250px] rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdditionalServices