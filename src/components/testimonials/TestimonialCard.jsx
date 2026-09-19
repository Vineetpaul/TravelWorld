import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {

    return (
        <div className="rounded-xl border border-blue-50 bg-[#fbfdff] bg-blue-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">


            <div className="flex items-center gap-3">
                <img src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover" />
                <div>
                    <h3 className="text-md font-semibold text-[#073b78]">{testimonial.name}</h3>
                    <p className="mt-0.5 text-sm text-gray-400">{testimonial.country}</p>
                </div>
            </div>

            <p className="mt-4 leading-5 text-gray-500 ">"{testimonial.review}"</p>

            <div className="mt-3 flex gap-1 text-sm text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                ))}
            </div>

        </div>
    )

}

export default TestimonialCard;