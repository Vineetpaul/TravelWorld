import { ImMail2 } from 'react-icons/im'

const Newsletter = () => {
    return (
        <section className='bg-[#edf5fb] py-10 sm:py-12 '>
            <div className='mx-auto flex max-w-3xl flex-col items-center px-5 text-center '>

                {/* Heading Section */}
                <div className='flex items-center gap-3 '>
                    <ImMail2 className='text-3xl text-[#0879df]'></ImMail2>
                    <h2 className='text-xl font-bold text-[#073b78]/90 sm:text-2xl'>Subscribe to Our Newsletter</h2>
                </div>



                {/* description */}
                <p className='mt-3 text-md text-[#6b88a8]'>
                    Get travel tips, updates and special offers straight to your inbox

                </p>




                {/* form section */}
                <form className='mt-5 w-full max-w-[520px] flex gap-3 '>
                    <input type='email'
                        placeholder='Enter your email address'
                        className='h-10 min-w-0 flex-1 rounded-md border border-gray-200 bg-[#f8fbfe] px-4 text-sm text-gray-700 outline-none focus:border-[#0879df] ' />
                    <button type='submit'
                        className='lg:w-30 bg-blue-500 flex items-center gap-2  justify-center rounded-xl p-2 hover:scale-105 transition-all duration-300 font-semibold text-white'>Subscribe</button>
                </form>




            </div>

        </section>
    )
}

export default Newsletter