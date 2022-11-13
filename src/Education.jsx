import React from 'react'
import { motion } from "framer-motion";
// http://www.shemrockschool.com/images/lo10opd.png 
//shemrock
// sggs
//http://sggs35school.com/images/logo.jpg
// chitkara 
//
//
//https://static.collegedekho.com/media/img/institute/logo/Chitkara_College.png
import ll from './ll.png';
function Education() {
    return (
        <div className="row ms-4 me-4">
            <h3 className=" text-white tracking-[8px] text-center mb-20">EDUCATION</h3>
            <motion.div className="col-lg-4"
                intial={{ opacity: 0, rotate: 300 }}
                whileInView={{
                    opacity: 1, rotate: 360,
                }}
                transition={{ duration: 1.4 }}>
                <div className="card border-0 bg-[#264348]">
                    <div className="card-body rounded border-0 bg-[#264348] ">
                        <div className='d-flex text-white'>
                            <div>
                                <img className="h-20 w-20 mr-10" alt="not available" src="https://static.collegedekho.com/media/img/institute/logo/Chitkara_College.png" /></div>
                            <div>
                                <a href="https://www.chitkara.edu.in/" className="text-white text-center text-decoration-none hover:underline">Chitkara University</a>
                                <p className="text-center text-sm">Bachelor of Engineering BE-CSE</p>
                                <p className="text-center"> 2020-2024</p>
                                <p className="text-center mb-0 mt-2">Ongoing</p>
                            </div>
                        </div>


                    </div>
                </div>
            </motion.div>
            <br></br>
            <motion.div className="col-lg-4"
                intial={{ opacity: 0, rotate: 300 }}
                whileInView={{
                    opacity: 1, rotate: 360,
                }}
                transition={{ duration: 1.3 }}>
                <div className="d-flex">
                    <i className="fa-solid fa-left-long text-white mt-14 text-3xl mr-8 lg:visible md:invisible sm:invisible  "></i>
                    <div className="card border-0 bg-[#264348] w-100">
                        <div className="card-body rounded border-0 bg-[#264348]">
                            <div className='d-flex text-white'>
                                <div>
                                    <img className="h-20 w-20 mr-10" alt="not available" src="https://sggspublicschool.edu.in/upload/logo/329251632108414.png" /></div>
                                <div>
                                    <a href="http://sggs35school.com/contact_us.aspx" className="text-white text-center text-decoration-none hover:underline">SGGS Secondary School</a>
                                    <p className="text-center text-sm">Sector-35,Chandigarh</p>
                                    <p className="text-center"> 2018-2020</p>
                                    <p className="text-center mb-0 mt-2">11th - 12th</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </motion.div>

            <motion.div className="col-lg-4"
                intial={{ opacity: 0, rotate: 300 }}
                whileInView={{
                    opacity: 1, rotate: 360,
                }}
                transition={{ duration: 1.2 }}
            >
                <div className="d-flex">
                    <i className="fa-solid fa-left-long text-white mt-14 text-3xl mr-8 lg:visible md:invisible sm:invisible"></i>
                    <div className="card border-0 bg-[#264348] w-100">
                        <div className="card-body rounded border-0 bg-[#264348] ">
                            <div className='d-flex text-white'>
                                <div>
                                    <img className="h-20 w-20 mr-10" alt="not available" src={ll} /></div>
                                <div>
                                    <a href="https://www.shemrockschool.com/images/lo10opd.png" className="text-white text-center text-decoration-none hover:underline">Shemrock School</a>
                                    <p className="text-center text-sm">Sector-69,SAS-Nagar,Mohali</p>
                                    <p className="text-center"> 2006-2018</p>
                                    <p className="text-center mb-0 mt-2">LKG-10th</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Education