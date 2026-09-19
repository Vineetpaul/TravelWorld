
import { NavigationItems } from '../../data/navigation'
import Logo from '../../assets/Layout/paper.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] bg-[#F8FAFC] flex p-4  justify-between items-center shadow-2xl '>

        {/* creating lest logo */}
        <div className='flex items-center p-4 gap-2 w-full  h-[60px]'>
            <img className='w-10 h-10' src={Logo} alt='logo'/>
            <h1 className='text-gray-800 font-bold text-2xl'>TravelWorld</h1>

        </div>

        {/* creating right Navigation */}
        <div className='flex items-center justify-center w-full  h-[60px]'>
            {/* navigation items */}
            <div className='lg:flex items-center justify-center hidden w-full  h-[60px]'>
                <ul className='flex gap-4 '>
                    {NavigationItems.map((items)=>(
                        <li  className='text-gray-600 font-semibold cursor-pointer hover:text-blue-500 transition-colors duration-300' key={items.id}><Link to={items.path}>{items.name}</Link></li>
                    ))}
                </ul>

            </div>

            {/* button */}
            <div className='flex items-center justify-center w-full  h-[60px]'>
                <button className='bg-blue-500 flex rounded-xl p-2 hover:scale-105 transition-all duration-300 font-semibold text-white   '>Plan your trip</button>

            </div>
        </div>

      
    </div>
  )
}

export default Navbar
