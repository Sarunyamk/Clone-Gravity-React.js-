import { GoArrowRight } from "react-icons/go";

const CryptoProject = () => {
    return (
        <div>
            <section className="w-full text-start flex flex-col gap-4">
                <h1 className="text-4xl font-bold">Market Making for Crypto Projects</h1>
                <div className="w-96 text-lg ">
                    <p>Accelerate your token’s journey by boosting its liquidity</p>
                </div>
                <div className="w-96 text-sm ">
                    <p>We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.</p>
                </div>

                <a className="flex gap-2 items-center hover:text-blue-500 duration-200" href="/"><span className="underline underline-offset-4">Learn more</span> <GoArrowRight /></a>

            </section>
        </div>
    )
}
export default CryptoProject