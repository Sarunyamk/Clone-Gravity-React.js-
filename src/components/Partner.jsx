import PartnerList from "./PartnerList"

const Partner = () => {
    return (
        <div>
            <div className="flex flex-col gap-28 my-32 h-[500px]">
                <section className="grid grid-cols-1 md:grid-cols-2 mx-auto md:mx-20 lg:mx-40 gap-20 md:gap-10">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl md:text-5xl font-bold">Our Partners & Friends</h1>
                    </div>
                    <div >
                        <PartnerList />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Partner