import { motion } from "framer-motion";
import logo1 from '../assets/binance@2x.png.png'
import logo2 from '../assets/coinbase@2x.png.png'
import logo3 from '../assets/bitstamp@2x.png.png'

const PartnerList = () => {

    const imgGroup1 = [
        {
            image: "https://gravityteam.co/wp-content/uploads/2022/07/kranken@2x.png"
        },
        {
            image: "https://gravityteam.co/wp-content/uploads/2022/07/bitso@2x.png"
        },
        {
            image: "https://gravityteam.co/wp-content/uploads/2024/12/Bitkub-Logo-Square.png"
        },
        {
            image: "https://gravityteam.co/wp-content/uploads/2022/07/bitbank@2x.png"
        },
        {
            image: "https://gravityteam.co/wp-content/uploads/2022/07/binance@2x.png"
        },


    ]

    const imgGroup2 = [

        {
            image: "https://gravityteam.co/wp-content/uploads/2022/07/bitstamp@2x.png"
        },
        {
            image: "https://gravityteam.co/wp-content/uploads/2022/07/bitfinex@2x.png"
        },
        {
            image: "https://gravityteam.co/wp-content/uploads/2022/07/coinbase@2x.png"
        },
        {
            image: "https://gravityteam.co/wp-content/uploads/2022/07/9CCjJYuc_400x400.png"
        },
        {
            image: "https://gravityteam.co/wp-content/uploads/2024/04/Cryptocom.jpg"
        },
    ]

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
                {
                    imgGroup1.map((item, index) => {
                        return (
                            <img
                                key={index}
                                src={item.image}
                                alt="Logo 1"
                                className="object-contain border-2 w-32 h-32 md:w-40 md:h-40 p-6 rounded-lg bg-partner-gradient"
                            />
                        )
                    })
                }

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
                {
                    imgGroup2.map((item, index) => {
                        return (
                            <img
                                key={index}
                                src={item.image}
                                alt="Logo 1"
                                className="object-contain border-2 w-32 h-32 md:w-40 md:h-40 p-6 rounded-lg bg-partner-gradient"
                            />
                        )
                    })
                }

            </motion.div>


        </div>
    )
}
export default PartnerList