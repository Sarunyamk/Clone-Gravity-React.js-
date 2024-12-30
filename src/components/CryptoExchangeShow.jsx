import screen from '../assets/exchange-screens-new.png.png'
import hover from '../assets/middle-left-2.png.png'

const CryptoExchangeShow = () => {
    return (
        <div className="relative group">

            <img src={screen} alt="Screen" className="relative z-10" />

            <div className="w-[600px] h-[600px] absolute -top-15 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 group-hover:shadow-2xl transition-all  ease-in-out bg-hover-gradient  rounded-full">
            </div>

        </div>
    )
}
export default CryptoExchangeShow