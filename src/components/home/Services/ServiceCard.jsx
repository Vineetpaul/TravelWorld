const ServiceCard = ({service})=>{
    const Icon = service.icon;

    return(
        <div className="rounded-xl bg-blue-50 px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-10 w-10 items-center justify-center justify-center rounded-full bg-blue-100 text-blue-500"><Icon size={16}/></div>
            <h3 className="mt-3 text-sm font-semibold text-blue-950">{service.title}</h3>
            <p className="mx-auto mt-2 max-w-[150px] text-sm leading-4 text-gray-400">{service.description}</p>
        </div>
    )
}

export default ServiceCard