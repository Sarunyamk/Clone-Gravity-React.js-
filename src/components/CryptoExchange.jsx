import { GoArrowLeft } from "react-icons/go";

const CryptoExchange = () => {
    return (
        <div>
            <section className="w-full text-start flex flex-col gap-4">
                <h1 className="text-3xl md:text-4xl font-semi-bold">Market Making for Crypto Exchanges</h1>
                <div className="w-96 text-lg ">
                    <p>Attract more traders and projects with deep order books & liquidity</p>
                </div>
                <div className="w-96 text-sm ">
                    <p>Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.</p>
                </div>

                <a className="flex gap-2 items-center hover:text-blue-500 duration-200" href="/"> <GoArrowLeft /><span className="underline underline-offset-4">Learn more</span> </a>

            </section>
        </div>
    )
}
export default CryptoExchange