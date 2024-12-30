import logo from '../assets/logo-light.png.png'

const Navbar = () => {
    return (
        <div>
            <nav className="container-2xl flex justify-between items-center p-4 shadow-xl">
                <div  >
                    <img src={logo} className='w-44 h-10' />
                </div>
                <div>menu</div>
                <div>get in touch</div>
            </nav>
        </div>
    )
}
export default Navbar