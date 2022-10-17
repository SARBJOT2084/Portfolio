import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { motion } from "framer-motion";
function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg bg-[rgb(36,36,36)] navbar-dark fixed-top tracking-[5px] z-20'>
            <button className="text-light navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="text-white navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <motion.ul
                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, }}
                    className="navbar-nav ps-5 ">
                    <li className="nav-item me-5">
                        <a href="#about" className="uppercase text-decoration-none text-white space-x-20 text-xl font-semibold hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
                            About
                        </a>
                    </li>
                    <li className="nav-item me-5">
                        <a href="#education" className="uppercase text-decoration-none text-white space-x-20 text-xl font-semibold hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
                            Education
                        </a>
                    </li>
                    <li className="nav-item me-5">
                        <a href="#projects" className=" uppercase text-decoration-none text-white space-x-20 text-xl font-semibold hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
                            Projects
                        </a>
                    </li>
                    <li className="nav-item me-5 ">
                        <a href="#skills" className=" uppercase text-decoration-none text-white space-x-20 text-xl font-semibold hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
                            Skills
                        </a>
                    </li>
                </motion.ul>
            </div>

            <motion.ul
                initial={{ x: 300, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, }}

                className="navbar-nav  pe-5 text-white tracking-widest right-5" >
                <li className="nav-item me-3">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </li>
                <li className="nav-item lg:block md:block sm:hidden">
                    Search
                </li>
            </motion.ul>
        </nav>
    )
}

export default Navbar