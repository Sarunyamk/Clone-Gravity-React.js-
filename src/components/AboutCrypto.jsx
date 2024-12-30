import CryptoExchange from "./CryptoExchange"
import CryptoExchangeShow from "./CryptoExchangeShow"
import CryptoProject from "./CryptoProject"

const AboutCrypto = () => {
    return (
        <div>
            <section className="flex flex-col justify-center items-center gap-6 py-20">
                <h1 className="text-4xl font-bold">Crypto Market Making</h1>
                <div className="w-96 text-sm text-center">
                    <p>We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.</p>
                </div>
            </section>
            <div className="flex flex-col gap-28 mt-32">
                <section className="grid grid-cols-2 mx-20 lg:mx-40 gap-10">
                    <div>
                        <CryptoProject />
                    </div>
                    <div>
                        <CryptoProject />
                    </div>
                </section>
                <section className="grid grid-cols-2 mx-20 lg:mx-40 gap-10 items-center">
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