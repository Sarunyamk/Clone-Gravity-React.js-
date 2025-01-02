const GravityTeam = () => {
    return (
        <div>
            <section className="flex flex-col justify-center items-center gap-6 py-20">
                <h1 className="text-4xl md:text-5xl font-semi-bold">Contact Us</h1>
                <div className="w-96 text-sm text-center">
                    <p>We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!</p>
                </div>
                <button className="relative overflow-hidden border-2 border-white p-4 text-white group">
                    <span className="absolute inset-0 bg-custom-gradient translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                    <span className="relative z-10">GET IN TOUCH</span>
                </button>

            </section>
        </div>
    )
}
export default GravityTeam