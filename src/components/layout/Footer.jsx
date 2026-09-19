import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'
import Logo from '../../assets/Layout/paper.png'

import { Link } from 'react-router-dom'
import { NavigationItems } from '../../data/navigation'

const Footer = () => {
    return (
        <footer className='bg-[#032b59] text-white'>
            <div className='mx-auto max-w-7xl px-6 py-7 sm:px-10 lg:px-12'>

                <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>

                    {/* logo section */}
                    {/* creating lest logo */}
                    <div className='flex h-15 w-full items-center gap-2 md:w-auto'>
                        <img className='h-10 w-10' src={Logo} alt='TravelWorld logo' />
                        <div>
                            <h1 className='text-2xl font-bold text-white'>TravelWorld</h1>
                            <p className='text-sm text-white/70'>Explore Dream Discover</p>
                        </div>

                    </div>

                    {/* navigation items */}

                    <nav className='flex flex-wrap items-center gap-x-7 gap-y-2'>
                        {NavigationItems.map((item) => (
                            <Link key={item.id} to={item.path} className="text-sm font-medium text-white/90 transition hover:text-white">{item.name}</Link>
                        ))}
                    </nav>


                    {/* Social */}
                    <div className='flex flex-col items-center'>
                        <div className='flex gap-2'>
                            <a href='#' aria-label='Facebook' className='flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-white/20'><FaFacebook /></a>
                            <a href='#' aria-label='Instagram' className='flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-white/20'><FaInstagram /></a>
                            <a href='#' aria-label='Twitter' className='flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-white/20'><FaTwitter /></a>
                            <a href='#' aria-label='YouTube' className='flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-white/20'><FaYoutube /></a>
                        </div>
                        <span className='mt-2 text-sm text-white/60'>Follow Us</span>


                    </div>
                </div>

                {/* copyright */}
                <div className='mt-9 text-center '>
                    <p className='text-sm text-white/60'>
                        © 2026 TravelWorld. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer