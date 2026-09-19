import PageHero from "../components/common/PageHero";
import ColonyBeach from '../assets/ServiceImage/ColonyBeach.avif'
import ServicesGrid from "../components/services/ServicesGrid";
import AdditionalServices from "../components/services/AdditionalServices";


const Services = () =>{
    return(
        
            <>
            <PageHero
            title="Our Services"
            breadcrumb="Services"
            backgroundImage={ColonyBeach}
            />
            <ServicesGrid/>
            <AdditionalServices/>
            </>
        )
    
}

export default Services