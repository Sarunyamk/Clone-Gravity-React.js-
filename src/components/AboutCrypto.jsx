import CryptoExchange from "./CryptoExchange"
import CryptoExchangeShow from "./CryptoExchangeShow"

const AboutCrypto = () => {
    return (
        <div>
            <section className="flex flex-col justify-center items-center gap-6 py-20">
                <h1 className="text-4xl md:text-5xl font-semi-bold">Crypto Market Making</h1>
                <div className="w-96 text-sm md:text-lg  text-center">
                    <p>We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.</p>
                </div>
            </section>
            <div className="flex flex-col gap-28 mt-32">
                <section className="grid grid-cols-1 md:grid-cols-2 mx-20 lg:mx-40 gap-28 items-center">
                    <div>
                        <CryptoExchangeShow />
                    </div>
                    <div>
                        <CryptoExchange />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default AboutCrypto