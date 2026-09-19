import PageHero from "../components/common/PageHero";

import aboutHero from '../assets/Layout/About.jpg'
import AboutIntro from "../components/about/AboutIntro";
import MissionVision from "../components/about/MissionVision";
import WhyChooseTravelWorld from "../components/about/WhyChooseTravelWorld";

const About = () =>{
    return(
        <>
        <PageHero title="About Us"
        breadcrumb="About Us"
        backgroundImage={aboutHero}/>

        <AboutIntro/>
        <MissionVision/>
        <WhyChooseTravelWorld/>


        
        </>
    )
}


export default About