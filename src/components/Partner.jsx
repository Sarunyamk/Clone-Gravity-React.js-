import PartnerList from "./PartnerList"

const Partner = () => {
    return (
        <div>
            <div className="flex flex-col gap-28 my-32 h-[500px]">
                <section className="grid grid-cols-2 mx-20 lg:mx-40 gap-10">
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl font-bold">Our Partners & Friends</h1>
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