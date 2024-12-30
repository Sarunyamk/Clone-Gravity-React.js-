import { motion } from "framer-motion";
import logo1 from '../assets/binance@2x.png.png'
import logo2 from '../assets/coinbase@2x.png.png'
import logo3 from '../assets/bitstamp@2x.png.png'

const PartnerList = () => {
    return (
        <div className="overflow-hidden h-[500px] flex gap-20 ">

            <motion.div
                className="image-list flex flex-col gap-8 w-40 h-full"
                initial={{ opacity: 0 }} // เริ่มเลื่อนเบาๆ จากด้านล่าง
                animate={{
                    opacity: [0, 1, 0], // ค่อยๆ ปรากฏ และค่อยๆ หายไป
                    y: [300, -800], // เลื่อนขึ้นอย่างนุ่มนวล
                }}
                transition={{
                    duration: 6, // ทำให้การเคลื่อนไหวช้าลง
                    ease: "linear", // เพิ่มความสมูทของการเลื่อน
                    repeat: Infinity, // วนลูปตลอดไป
                    repeatType: "loop", // ลูปซ้ำ
                }}
            >
                <img
                    src={logo1}
                    alt="Logo 1"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
                <img
                    src={logo2}
                    alt="Logo 2"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
                <img
                    src={logo3}
                    alt="Logo 3"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
                <img
                    src={logo2}
                    alt="Logo 2"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
                <img
                    src={logo3}
                    alt="Logo 3"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
            </motion.div>
            <motion.div
                className="image-list flex flex-col gap-8 w-40 h-full"
                initial={{ opacity: 0 }} // เริ่มเลื่อนเบาๆ จากด้านล่าง
                animate={{
                    opacity: [0, 1, 1, 0], // ค่อยๆ ปรากฏ และค่อยๆ หายไป
                    y: [120, -600], // เลื่อนขึ้นอย่างนุ่มนวล
                }}
                transition={{
                    duration: 6, // ทำให้การเคลื่อนไหวช้าลง
                    ease: "linear", // เพิ่มความสมูทของการเลื่อน
                    repeat: Infinity, // วนลูปตลอดไป
                    repeatType: "loop", // ลูปซ้ำ
                }}
            >
                <img
                    src={logo1}
                    alt="Logo 1"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
                <img
                    src={logo2}
                    alt="Logo 2"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
                <img
                    src={logo3}
                    alt="Logo 3"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
                <img
                    src={logo2}
                    alt="Logo 2"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
                <img
                    src={logo3}
                    alt="Logo 3"
                    className="object-contain border-2 w-40 h-40 p-6 rounded-lg bg-partner-gradient"
                />
            </motion.div>


        </div>
    )
}
export default PartnerList