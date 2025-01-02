const Branding = () => {
    return (
        <div>
            <main className="flex flex-col justify-center items-center gap-6 py-20">
                <h1 className="text-4xl md:text-6xl font-bold">Balancing</h1>
                <h1 className="text-4xl md:text-5xl font-semi-bold">Crypto Markets</h1>
                <div className="w-96 text-sm : md:text-lg text-center">
                    <p>Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.</p>
                </div>
                <button className="relative overflow-hidden border-2 border-white p-4 text-white group">
                    <span className="absolute inset-0 bg-custom-gradient translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                    <span className="relative z-10">GET IN TOUCH</span>
                </button>
            </main>
        </div>
    )
}
export default Branding