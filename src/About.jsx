import React from 'react'
import { motion } from "framer-motion"
import my_img_2 from "./my_img_2.jpg"
function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row
             max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl mb-30">
                About
            </h3>
            <motion.img
                initial={{ x: -200, opacity: 0, }}
                transition={{ duration: 1.2, }}
                whileInView={{ opacity: 1, x: 0 }}

                src={my_img_2}
                className="-mb-20 mt-60 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]" />

            <div className="space-y-10 px-0 md:px-10 mt-20 text-white space-x-8">


                <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50"> little</span>{" "}about me</h4>
                <p className="lg:text-lg md:text-md sm:text-sm  text-white px-0 md:px-10 space-y-10">
                    My name is Sarbjot Sharma.I am currently pursuing
                    BE of Computer Science from Chitkara University.
                    I ❤️ to solve real life problems using DSA and like to develop responsive websites using React ,Javascript,Bootstrap.
                    I have a good hold on problem solving using DSA . I solved about 500+ coding problems on different coding platforms.
                    I looking to out for more oppurtunties.

                </p>
            </div>
        </motion.div>
    )
}

export default About