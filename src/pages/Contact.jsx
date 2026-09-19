import PageHero from "../components/common/PageHero";
import JapanImage from '../assets/Countries/Japan.jpg'
import ContactSection from "../components/contact/ContactSection";

const Contact = () =>{
    return (
        <>
        <PageHero
        title="Contact"
        breadcrumb="Contact"
        backgroundImage={JapanImage}/>
        <ContactSection/>

        </>
    )
}

export default Contact