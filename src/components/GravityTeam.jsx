import { motion } from "motion/react"

const GravityTeam = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -60 }}  // เริ่มต้นที่ opacity 0 และ y 50
            whileInView={{ opacity: 1, y: 0 }}  // เมื่อข้อความเข้าสู่ viewport จะค่อยๆ ขึ้น
            transition={{ duration: 2 }}  // ระยะเวลาในการแอนิเมชั่น
            viewport={{ once: true, amount: 0.35 }}
        >
            <section className="relative flex flex-col justify-center items-center gap-6 py-20">
                <h1 className="text-4xl md:text-5xl font-semi-bold">Contact Us</h1>
                <div className="w-96 text-sm text-center">
                    <p>We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!</p>
                </div>
                <motion.div
                    initial={{ scale: 1.5 }}
                    animate={{
                        scale: [1, 1.8, 1.5],
                        opacity: [0.8],
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="absolute w-32 h-32 bg-custom-gradient rounded-full blur-2xl top-10 center -left-30">
                </motion.div>
                <motion.div
                    initial={{ scale: 1.5 }}
                    animate={{
                        scale: [1, 1.8, 1.5],
                        opacity: [0.8],
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="absolute w-32 h-32 bg-custom-gradient rounded-full blur-2xl bottom-10 center right-24">
                </motion.div>
                <button className="relative overflow-hidden border-2 border-white p-4 text-white group">
                    <span className="absolute inset-0 bg-custom-gradient translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                    <span className="relative z-10">GET IN TOUCH</span>
                </button>

            </section>
        </motion.div>
    )
}
export default GravityTeam