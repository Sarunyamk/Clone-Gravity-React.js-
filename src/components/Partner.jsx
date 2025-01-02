import { motion } from "motion/react"

import PartnerList from "./PartnerList"

const Partner = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -60 }}  // เริ่มต้นที่ opacity 0 และ y 50
                whileInView={{ opacity: 1, y: 0 }}  // เมื่อข้อความเข้าสู่ viewport จะค่อยๆ ขึ้น
                transition={{ duration: 2 }}  // ระยะเวลาในการแอนิเมชั่น
                viewport={{ once: true, amount: 0.35 }}
                className="flex flex-col gap-28 my-32 h-[500px]">
                <section className="relative grid grid-cols-1 md:grid-cols-2 mx-auto md:mx-20 lg:mx-40 gap-20 md:gap-10">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl md:text-5xl font-bold">Our Partners & Friends</h1>
                    </div>
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 6,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="absolute w-40 h-40 bg-custom-gradient rounded-full blur-2xl top-24 center -left-30">
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: [-400, 400],
                        }}
                        transition={{
                            duration: 6,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="absolute w-32 h-32 bg-custom-gradient rounded-full blur-2xl bottom-10 center right-10">
                    </motion.div>
                    <div >
                        <PartnerList />
                    </div>
                </section>
            </motion.div>
        </div>
    )
}
export default Partner