import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <nav className="container-2xl flex justify-between items-center py-4 px-10 shadow-xl fixed top-0 w-full z-20 bg-[#141619]">
                <div  >
                    <a href='/' className='w-44 h-10 text-2xl font-bold'> CloneGravity</a>
                </div>
                <div className='flex gap-10'>
                    <a href='/' className='hover:text-blue-600 duration-300'>
                        About us
                    </a>

                    <div className='uppercase relative cursor-pointer group hover:text-blue-600  flex items-center'>
                        Our services
                        <span className="ml-2 transition-all duration-500">
                            <FaChevronDown className="hidden group-hover:inline" />
                            <FaChevronUp className="group-hover:hidden" />
                        </span>
                        <div className='absolute text-sm top-10 -left-10 w-48 bg-[#242529] p-4 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <ul className='flex gap-2 flex-col'>
                                <li className="hover:bg-custom-gradient hover:bg-opacity-10 hover:backdrop-blur-lg transition-all p-1 rounded-md text-white">Crypto Project</li>
                                <li className='hover:bg-custom-gradient hover:bg-opacity-10 hover:backdrop-blur-lg transition-all p-1 rounded-md text-white'>Crypto Exchange</li>
                            </ul>
                        </div>
                    </div>



                    <a href='/' className='hover:text-blue-600 duration-300'>
                        Careers
                    </a>
                    <a href='/' className='hover:text-blue-600 duration-300'>
                        Blog
                    </a>
                </div>

                <div className='uppercase relative cursor-pointer group '>
                    Get in touch
                    <div className='absolute top-2 -left-6 w-3 h-3 bg-custom-gradient rounded-full'></div>
                    <div className='absolute text-sm top-10 -left-10 w-48 bg-[#242529]  p-4 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                        <ul className='flex gap-2 flex-col'>
                            <li className="hover:bg-custom-gradient hover:bg-opacity-10 hover:backdrop-blur-lg transition-all  p-1 rounded-md">Crypto Project</li>
                            <li className=' hover:bg-custom-gradient hover:bg-opacity-10 hover:backdrop-blur-lg transition-all  p-1 rounded-md '>Crypto Exchange</li>
                            <li className=' hover:bg-custom-gradient hover:bg-opacity-10 hover:backdrop-blur-lg transition-all  p-1 rounded-md '>Crypto VC</li>
                            <li className=' hover:bg-custom-gradient hover:bg-opacity-10 hover:backdrop-blur-lg transition-all  p-1 rounded-md '>Other</li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )

}
export default Navbar