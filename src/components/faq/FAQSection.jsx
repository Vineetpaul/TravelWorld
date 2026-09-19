import { FaPlus } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import FAQRightImage from '../../assets/Layout/FAQ.png'

const FAQSection = () =>{
    const questions = [
        "How can I apply for a tourist visa?",
        "What documents are required for international travel?",
        "Do you provide flight and hotel booking services",
        "How long does the visa process take?",
        "Can I customize my tour package?",
        "What is your cancellation policy?",
        "Do you offer Travel insurance?",
        "How can I track my booking status?",

    ];

    return(
        <section className="bg-[#F8FAFC] py-5 md:py-8">
            {/* basic sizing */}
            <div className="mx-auto max-w-6xl px-5 sm:py-6 md:px-8">

                {/* heading section */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[#073b78] md:text-3xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-2 text-[15px] lg:text-[18px] leading-6 text-gray-500 font-semibold">
                        Find answers to the most common questions about our services, bookings, visas and more.
                    </p>
                </div>


                {/* grid layout  */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_350px] lg:gap-12 ">

                    {/* left section */}
                    <div className="flex flex-col gap-1">
                        {questions.map((question,index)=>(
                            <div className="flex bg-[#e9f1fa] px-3 py-3 items-center justify-between border border-gray-100 rounded-xl gap-5  " key={index}>
                                <p className="text-[15px] text-gray-600 font-semibold ">{question}</p>
                                <button className="text-blue-400 hover:scale-105 transition duration-200 cursor-pointer"><FaPlus/></button>
                            </div>
                        ))}
                    </div>

                    {/* right section image */}
                    <div className="flex flex-col items-center">
                        <img src={FAQRightImage} alt="FAQ image" className="w-full h-[350px] shadow-lg flex rounded-2xl object-cover"/>
                        <button className="mt-5 bg-blue-500 flex items-center gap-2  justify-center rounded-xl p-2 hover:scale-105 transition-all duration-300 font-semibold text-white max-w-[150px]" type="button">Contact Us <span><FaLongArrowAltRight/></span></button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default FAQSection