import React from 'react'

function Contact() {
    return (
        <div >

            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">

                    <h3 className="uppercase tracking-widest text-white text-center"> CONTACT ME</h3>
                    <div className="card border-0 text-white text-center ">
                        <div className="card-body bg-[#262626]">
                            <div className="d-flex justify-center">
                                <div>
                                    <i class="fa-solid fa-location-dot mr-14 ml-28"></i>
                                </div>

                                <div className="text-lg">Chitkara University,Punjab</div>
                            </div>
                            <div className="d-flex justify-center">
                                <div>
                                    <i className="fa-solid fa-phone mr-14 ml-0"></i>
                                </div>

                                <div className="text-lg">9501724133</div>
                            </div>
                            <div className="d-flex justify-center">
                                <div>
                                    <i className="fa-solid fa-envelope ml-20"></i>
                                </div>

                                <div className="text-lg ml-10">sarbjot852@gmail.com</div>
                            </div>

                        </div>

                    </div>


                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <form>
                        <div className="d-flex mb-4">
                            <div className="w-50 text-center text-white uppercase tracking-[6px]">Name</div>
                            <div className="w-50 text-center text-white uppercase tracking-[6px]">Email</div>
                        </div>
                        <div className="d-flex ">
                            <input type="text" placeholder="Your Name" className="bg-[#262626] mr-5  text-white border-2 border-white rounded w-50  text-xl placeholder:text-[15px]  placeholder:text-left ps-4 focus:border-blue-500" required />

                            <input type="email" placeholder="rakesh@gmail.com" className="bg-[#262626] mr-5  text-white border-2 border-white rounded w-50  text-xl placeholder:text-[15px]  placeholder:text-left ps-4 focus:border-blue-500" required />

                        </div>
                        <div className="d-flex justify-center mt-4">
                            <label className="text-center text-light uppercase tracking-[8px]">Your Message</label>
                        </div>

                        <div className="d-flex mt-2">
                            <textarea id="w3review" name="w3review" placeholder="I would like to connect with you!" className="bg-[#262626] mr-5  text-white border-2 border-white rounded w-100  text-[15px] placeholder:text-[15px]  placeholder:text-left ps-4 focus:border-blue-500" rows="5" ></textarea>

                        </div>
                        <button className=' mt-8 bg-[#262626] mr-5  text-white border-2 border-white rounded w-100'>Send Message</button>
                    </form><br></br><br></br>
                </div>

            </div>
        </div>

    )
}

export default Contact