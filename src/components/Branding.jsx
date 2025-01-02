import { motion } from "motion/react"

const Branding = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -60 }}  // เริ่มต้นที่ opacity 0 และ y 50
            whileInView={{ opacity: 1, y: 0 }}  // เมื่อข้อความเข้าสู่ viewport จะค่อยๆ ขึ้น
            transition={{ duration: 2 }}  // ระยะเวลาในการแอนิเมชั่น
            viewport={{ once: true, amount: 0.35 }} // เลื่อนมาถึง 20% ของข้อความให้แสดง
        >
            <main className="relative flex flex-col justify-center items-center gap-6 py-20">
                <h1 className="text-4xl md:text-6xl font-bold">Balancing</h1>
                <h1 className="text-4xl md:text-5xl font-semi-bold">Crypto Markets</h1>
                <div className="w-96 text-sm : md:text-lg text-center">
                    <p>Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.</p>
                </div>
                <button className="relative overflow-hidden border-2 border-white p-4 text-white group">
                    <span className="absolute inset-0 bg-custom-gradient translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                    <span className="relative z-10">GET IN TOUCH</span>
                </button>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: [600, 400],
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="absolute w-40 h-40 bg-custom-gradient rounded-full blur-xl top-10 center left-10">
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: [300, 600],
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="absolute w-40 h-40 bg-custom-gradient rounded-full blur-3xl bottom-10 center left-50">
                </motion.div>
            </main>
        </motion.div>
    )
}
export default Branding