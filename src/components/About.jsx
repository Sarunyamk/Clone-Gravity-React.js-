const About = () => {

    const card = [
        {
            title: "~$100 billion",
            content: "cumulative trading volume to date"
        },
        {
            title: "0.8%",
            content: "of the global crypto spot trading volume"
        },
        {
            title: "~30",
            content: "Gravity Teammates (& growing)"
        },
        {
            title: "25+",
            content: "leading global and local crypto exchanges"
        },
        {
            title: "2017",
            content: "start, crypto-natives"
        },
        {
            title: "1,200+",
            content: "crypto-asset pairs"
        },
        {
            title: "24/7",
            content: "liquidity"
        },
        {
            title: "5 billion+",
            content: "trades done to date"
        },
    ]
    return (
        <div>
            <section className="flex flex-col justify-center items-center gap-6 py-20">
                <h1 className="text-4xl md:text-5xl font-semi-bold">About Gravity Team</h1>
                <div className="w-96 text-sm text-center">
                    <p>At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.</p>
                </div>
            </section>
            <section>
                <div class="grid grid-cols-1 md:grid-cols-4 p-8 text-white  text-center mx-10 md:mx-24 lg:mx-28">

                    {
                        card.map((item, index) => {
                            return (
                                <div class="custom-card-about border hover:bg-custom-gradient" key={index}>
                                    <span class="text-lg md:text-xl">{item.title}</span>
                                    <p class="text-sm md:text-lg ">{item.content}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </section>
        </div>
    )
}
export default About