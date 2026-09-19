import { FaArrowRightLong } from 'react-icons/fa6'

const TraveIdeaCard = ({idea}) =>{

    return(
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm  hover:-translate-y-1 transition-all duration-200 hover:shadow-lg">
            <div className="h-40 overflow-hidden">
                <img src={idea.images}
                 alt={idea.title}
                 className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 "/>
            </div>

            <div className="p-3 ">
                <h3 className="line-clamp-2 text-md font-semibold leading-4 text-[#073b78]">{idea.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{idea.category}</p>
                <button className="mt-2 text-sm font-semibold text-[#1684e8] hover:-translate-y-1 transition-all duration-200">Read More <span><FaArrowRightLong/></span></button>
            </div>
        </article>
    )

}

export default TraveIdeaCard