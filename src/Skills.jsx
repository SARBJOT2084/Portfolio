import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";
function Skills() {
    const html = 88;
    const css = 80;
    const js = 70;
    const react = 75;
    const bootstrap = 78;
    const jquery = 60;
    const cpp = 90;
    const java = 82;
    const python = 84;
    const office = 90;
    return (
        <div className="mb-40">
            <h1 className="uppercase text-white tracking-widest text-center">SkillS</h1>
            <h3 className="uppercase text-white text-center mt-24">Web Technologies</h3>
            <div className="d-flex justify-center mt-24">
                <div className="w-42 h-40 mr-32">

                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.3, }}>
                        <CircularProgressbar value={html} text="HTML" />
                    </motion.div>


                </div>
                <div className="w-42 h-40 mr-32">

                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.3, }}>
                        <CircularProgressbar value={css} text="CSS" />
                    </motion.div>


                </div>
                <div className="w-42 h-40 mr-32">

                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.3, }}>
                        <CircularProgressbar value={js} text="JS" />
                    </motion.div>


                </div>
                <div className="w-42 h-40 mr-32">

                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.3, }}>
                        <CircularProgressbar value={bootstrap} text="Bootstrap" />
                    </motion.div>


                </div>
                <div className="w-42 h-40 mr-32 ">

                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.2, }}>
                        <CircularProgressbar value={jquery} text="Jquery" />
                    </motion.div>


                </div>
                <div className="w-42 h-40 mr-32">

                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.2, }}>
                        <CircularProgressbar value={react} text="React" />
                    </motion.div>


                </div>
                <div className="w-42 mr-32">

                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.2, }}>
                        <CircularProgressbar value={office} text="Office" />
                    </motion.div>


                </div>
            </div>

            <h3 className="uppercase text-white text-center tracking-[5px] mt-20">
                Programming Languages
            </h3>
            <div className="row mt-20 text-center">
                <div className="col-4 ">
                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.2, }}>
                        <CircularProgressbar value={cpp} text="C++" className="h-40 w-40 md:w-20 sm:w-14" />
                    </motion.div>
                </div>
                <div className="col-4">
                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.2, }}>
                        <CircularProgressbar value={python} text="Python" className="h-40 w-40  md:w-20 sm:w-14" />
                    </motion.div>
                </div>
                <div className="col-4">
                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.2, }}>
                        <CircularProgressbar value={java} text="Java" className="h-40 w-40 md:w-20 sm:w-14" />
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Skills