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
    const tag = "<img src='data:image/png;base64,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'></img>";
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
                <div className="w-42 h-40 mr-32 md:w-20 sm:w-20 ">

                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.2, }}>
                        <CircularProgressbar value={jquery} text="Jquery" />
                    </motion.div>


                </div>
                <div className="w-42 h-40 mr-32">

                    <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} transition={{ duration: 1.2, }}>
                        <CircularProgressbar value={react} text="React" />
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