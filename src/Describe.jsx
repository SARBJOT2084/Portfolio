
import React from 'react'
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { SocialIcon } from "react-social-icons";
import car from './my_img.jpeg';
function Describe() {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Sarbjot Sharma",
            "</Guy-who-loves-to-code>",
            "Problem Solver",
            "I'm web developer",
            "A competitive programmer"
        ], loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="row">
            {/**Developer Interests */}

            <div className=" col-lg-6 col-md-6 col-12 md:text-center">
                <div className="mb-72"></div>
                
                <p className="text-center text-light lg:text-5xl md:text-2xl sm:text-xl mb-56">{text} <Cursor cursorColor="#F7AB0A" /></p>
                {/**Social Media icons */}
                <button className="btn text-white border border-t-neutral-600">Connect with me</button>
                <div class="lg:text-lg md:text-md sm:text-sm text-white tracking-widest">3rd year CSE Student</div>

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
                </motion.div>

            </div>


            <div className="col-lg-6 col-md-6  text-center md:text-center sm:text-center items-center">
                <div className="mb-32 mx-auto"></div>
                <motion.img
                    initial={{ opacity: 0, marginBottom: 12 }}
                    transition={{
                        duration: 1.2,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    className="rounded-full flex-shrink-0 w-56 h-56  object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px]" src={car} />
            </div>
        </div>
    )
}

export default Describe