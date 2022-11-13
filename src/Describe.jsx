
import React from 'react'
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { SocialIcon } from "react-social-icons";
import car from './my_img.jpeg';
import my_img from './my_img_2.jpg';
import y from './ne.png'
import llll from './llll.png'
function Describe() {
    const [text] = useTypewriter({
        words: [
            "Hi, I'm Sarbjot Sharma",
            "</Guy-who-loves-to-code>",
            "Problem Solver",
            "I'm web developer",

        ], loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="row ">
            {/**Developer Interests */}

            <div className=" col-lg-6 col-md-6 col-12 text-center ">
                <div className="mb-72"></div>

                <p className="text-center text-light lg:text-5xl md:text-4xl sm:text-2xl mb-56">{text} <Cursor cursorColor="#F7AB0A" /></p>
                {/**Social Media icons */}
                <a className="btn text-white border border-t-neutral-600 md:text-center sm:text-center mb-5" href="#contact">Connect with me</a>
                <div class="lg:text-lg md:text-md sm:text-sm text-white tracking-widest mb-5">3rd year CSE Student</div>

                <motion.div initial={{ textAlign: 'left', scale: 0.5, }}
                    animate={{ textAlign: 'center', scale: 1, }}
                    transition={{ duration: 1.3 }} className="d-flex justify-content-center">
                    <motion.div initial={{ scale: 1, }} whileHover={{ scale: 1.5, color: "blue" }} transition={{ duration: 0.34 }}>
                        <SocialIcon url="https://github.com/SARBJOT_2084" fgColor="gray" bgColor="transparent" />
                    </motion.div>
                    <motion.div initial={{ scale: 1, }} whileHover={{ scale: 1.5, color: "blue" }} transition={{ duration: 0.34 }}>
                        <SocialIcon url="https://twitter.com/sarbjot852" fgColor="gray" bgColor="transparent" />

                    </motion.div>
                    <motion.div initial={{ scale: 1, }} whileHover={{ scale: 1.5, color: "blue" }} transition={{ duration: 0.34 }}>
                        <SocialIcon url="https://www.linkedin.com/in/sarbjotsharma/" fgColor="gray" bgColor="transparent" />

                    </motion.div>
                    <motion.div initial={{ scale: 1, }} whileHover={{ scale: 1.5, color: "blue" }} transition={{ duration: 0.34 }}>
                        <SocialIcon url="https://facebook.com/Sarbjot" fgColor="gray" bgColor="transparent" />

                    </motion.div>
                    <motion.div initial={{ scale: 1, }} whileHover={{ scale: 1.5, color: "blue" }} transition={{ duration: 0.34 }}>
                        <SocialIcon url="https://leetcode.com/sarbjot_2084/" fgColor="gray" bgColor="transparent" />

                    </motion.div>

                    <motion.div initial={{ scale: 1, }} whileHover={{ scale: 1.5, color: "blue" }} transition={{ duration: 0.34 }}>
                        <SocialIcon url="https://www.codechef.com/users/sarbjot_2084" fgColor="gray" bgColor="transparent" />

                    </motion.div>
                </motion.div>

            </div>


            <div className="col-lg-6 col-md-6 text-center ">
                <div className="mb-40"></div>
                <motion.div initial={{ opacity: 0, }} animate={{ scale: [1, 2, 2, 3, 1], opacity: [0, 1, 0.2, 0.4, 0.8, 0.1, 1.0], borderRadius: ["20%", "20%", "50%", "80%", "20%"], }} className="relative xl:visible lg:visible md:visible sm:invisible  ">
                    <div className="absolute border border-[#333333] border-500 rounded-full h-[300px] w-[300px] top-14 ml-14 animate-ping  " />
                    <div className="  border border-[#333333]  rounded-full h-[400px] w-[400px]  absolute top-3 ml-5 " />


                </motion.div>
                <div className=" md:text-center sm:text-center pt-3 ">
                    
                    <div className="ml-20 md:text-center sm:text-center">  <motion.img
                        initial={{ opacity: 0, marginBottom: 12 }}
                        transition={{
                            duration: 1.2,
                        }}
                        animate={{
                            opacity: 1
                        }}
                        className="z-20  rounded-full mt-14 w-56 h-56    md:w-64 md:h-95 xl:w-[280px] xl:h-[280px]" src={llll} /></div>
                </div>

            </div>
        </div>
    )
}

export default Describe