import PageHero from "../components/common/PageHero";
import ColonyBeach from '../assets/ServiceImage/ColonyBeach.avif'
import CountryGrid from "../components/countries/CountryGrid";
import CountryCTA from "../components/countries/CountryCTA";
const Countries = () =>{
    return(
        <>
        <PageHero
        title="Countries"
        breadcrumb="Countries"
        backgroundImage={ColonyBeach}/>
        <CountryGrid/>
        <CountryCTA/>

        </>
    )
}

export default Countries