import PageHero from "../components/common/PageHero";
import FAQImage from '../assets/Countries/China.avif'
import FAQSection from "../components/faq/FAQSection";

const FAQ = ()=>{
    return(
        <>
        <PageHero title="FAQ"
        breadcrumb="FAQ"
        backgroundImage={FAQImage}/>
        <FAQSection/>

        </>
    )
}

export default FAQ