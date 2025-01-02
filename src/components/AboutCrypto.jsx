import { motion } from "motion/react"

import CryptoExchange from "./CryptoExchange"
import CryptoExchangeShow from "./CryptoExchangeShow"

const AboutCrypto = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -60 }}  // เริ่มต้นที่ opacity 0 และ y 50
                whileInView={{ opacity: 1, y: 0 }}  // เมื่อข้อความเข้าสู่ viewport จะค่อยๆ ขึ้น
                transition={{ duration: 2 }}  // ระยะเวลาในการแอนิเมชั่น
                viewport={{ once: true, amount: 0.35 }}
            >
                <section className="relative flex flex-col justify-center items-center gap-6 py-20">
                    <h1 className="text-4xl md:text-5xl font-semi-bold">Crypto Market Making</h1>
                    <div className="w-96 text-sm md:text-lg  text-center">
                        <p>We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.</p>
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
                        className="absolute w-60 h-60 bg-custom-gradient rounded-full blur-2xl top-10 center -left-30">
                    </motion.div>

                </section>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -60 }}  // เริ่มต้นที่ opacity 0 และ y 50
                whileInView={{ opacity: 1, y: 0 }}  // เมื่อข้อความเข้าสู่ viewport จะค่อยๆ ขึ้น
                transition={{ duration: 2 }}  // ระยะเวลาในการแอนิเมชั่น
                viewport={{ once: true, amount: 0.35 }}
                className="flex flex-col gap-28 mt-32">
                <section className="grid grid-cols-1 md:grid-cols-2 mx-20 lg:mx-40 gap-28 items-center">
                    <div>
                        <CryptoExchangeShow />
                    </div>
                    <div>
                        <CryptoExchange />
                    </div>
                </section>
            </motion.div>
        </div>
    )
}
export default AboutCrypto