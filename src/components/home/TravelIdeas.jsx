import { travelIdeas } from "../../data/travelIdeas";
import TravelIdeaCard from '../travelIdeas/TravelIdeaCard'
import { FaArrowRightLong } from 'react-icons/fa6'

const TravelIdeas = () => {
    return (
        <section className="w-full bg-[#e9f4ff] py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* left section */}
                <div className="grid grid-cols-[1fr_auto] items-start gap-6">

                    {/* Section Header */}
                    <div className="">
                        <p className="text-md font-bold uppercase tracking-[1.5px] text-blue-400">Travel Inspiration</p>
                        <h2 className="mt-1 text-xl font-bold text-blue-950 sm:text-2xl ">Popular Travel Ideas</h2>
                        <p className="mt-2 text-sm leading-5 text-gray-400 sm:text-sm font-semibold">Get Inspired with our Travel ideas and guides</p>

                    </div>

                    {/* right section */}
                    <button className="hidden text-sm font-semibold text-[#1684e8] sm:block hover:-translate-y-1 transition-all duration-200">View all Blogs <span><FaArrowRightLong /></span></button>


                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {travelIdeas.map((idea) => (
                        <TravelIdeaCard key={idea.id} idea={idea} />
                    ))}
                </div>


                <button className="mt-5 ml-auto shrink-0  text-sm font-semibold text-[#1684e8] sm:hidden hover:-translate-y-1 transition-all duration-200">View all Blogs <span><FaArrowRightLong /></span></button>

            </div>
        </section>
    )
}

export default TravelIdeas