import {stats} from '../../data/stats';
import Mountains from '../../assets/Layout/Mountains.jpg'

const Stats = () =>{
    return (
        <section className='relative overflow-hidden bg-cover bg-center py-10 sm:py-12'
        style={{backgroundImage:`url(${Mountains})`}}
        >

            {/* Blue overlay */}
            <div className='absolute inset-0 bg-[#0D47A1]/80'></div>


            <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>

                <h2 className='mb-8 text-center text-2xl font-bold text-white'>
                    Numbers That Show Commitment
                </h2>


                {/* stats */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
                    {stats.map((stat,index)=>{
                        const Icon = stat.icon;

                        return(
                            <div key={stat.label}
                            className= {`text-center text-white ${index %2 === 0? "border-r border-white/30" : "" } md:border-r ${index === 3 ? "md:border-r-0 " :""}`}>
                                <Icon className='mx-auto mb-2 '/>
                                <h3 className='text-2xl font-bold '>{stat.value}</h3>
                                <p className='text-sm mt-1 text-white/85 '>{stat.label}</p>

                            </div>
                        )


                    })}
                </div>



            </div>
        </section>
    )
}

export default Stats