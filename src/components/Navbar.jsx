import logo from '../assets/logo-light.png.png'

const Navbar = () => {
    return (
        <div>
            <nav className="container-2xl flex justify-between items-center p-4 shadow-xl">
                <div  >
                    <a href='/' className='w-44 h-10 text-2xl font-bold'> CloneGravity</a>
                </div>
                <div>menu</div>
                <div>get in touch</div>
            </nav>
        </div>
    )
}
export default Navbar