import React from 'react'
import my_img1 from "./my_img_3.png";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import jquery from "./jquery.png";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from "react-social-icons";
import netflix from "./netflix.png";
import bagsite from "./bagssite.com.png";
import tindog from "./tindog.png";
function Experience() {

    return (
        <div className="text-white">
            <h1 className="uppercase tracking-[10px]  mt-40 text-center">Experience</h1>
            <h5 className="mt-9 text-center uppercase"> My Projects</h5>
            <div className="overflow-auto md:overflow-scroll text-white mt-24 pl-20 pr-20">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 md:mt-20 sm:mb-20">
                        <div className="card border-0 bg-[#36454F] text-white rounded" >
                            <div className="card-body bg-[#36454F] text-center">
                                <h5 className="text-center">PROJECT 1</h5>
                                <h7>GadgetsCart.com</h7>
                                <p>Electronics Ecommerce </p>
                                <img className="card-img h-60 mt-10" src={my_img1}></img>
                                <p>Techonologies used </p>
                                <div className="d-flex justify-center">
                                    <img alt="not avialbale" src={html}
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src={css}
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src={js}
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxkaq7mOTOVYdCtsLufQn2J29U1nf2V505Q&usqp=CAU"
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src={jquery}
                                        className="w-12 h-12 me-2"></img>
                                </div>
                                <div className="text-md">
                                    No. of Pages - 7
                                </div>
                                <a className="text-lg text-decoration-none text-light" href="https://github.com/SARBJOT2084/Ecommerce_Project">
                                    <SocialIcon url="https://github.com/SARBJOT2084/Ecommerce_Project" fgColor="gray" bgColor="transparent" />
                                    Github link
                                </a><br></br>
                                <div className="d-flex">
                                    <i className="fa fa-check mt-1 ms-4 me-1" aria-hidden="true"></i>

                                    <p>Responsiveness</p>
                                </div>
                                <div className="d-flex">
                                    <i className="fa fa-check mt-1 ms-4 me-1" aria-hidden="true"></i>

                                    <p>All Browsers Support.</p>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 md:mt-20 sm:mb-20">
                        <div className="card border-0 bg-[#36454F] text-white rounded" >
                            <div className="card-body bg-[#36454F] text-center">
                                <h5 className="text-center">PROJECT 2</h5>
                                <h7>BagsSite.com</h7>
                                <p>Bags Ecommerce </p>
                                <img className="card-img h-60 mt-10" src={bagsite}></img>
                                <p>Techonologies used </p>
                                <div className="d-flex justify-center">
                                    <img alt="not avialale" src={html}
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src={css}
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src={js}
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxkaq7mOTOVYdCtsLufQn2J29U1nf2V505Q&usqp=CAU"
                                        className="w-12 h-12 me-2"></img>

                                </div>
                                <div className="text-md">
                                    No. of Pages - 7
                                </div>
                                <a className="text-lg text-decoration-none text-light" href="https://github.com/SARBJOT2084/Bags-Mart">
                                    <SocialIcon url="https://github.com/SARBJOT2084/Bags-Mart" fgColor="gray" bgColor="transparent" />
                                    Github link
                                </a>
                                <br></br>
                                <div className="d-flex">
                                    <i className="fa fa-check mt-1 ms-4 me-1" aria-hidden="true"></i>

                                    <p>Responsiveness</p>
                                </div>
                                <div className="d-flex">
                                    <i className="fa fa-check mt-1 ms-4 me-1" aria-hidden="true"></i>

                                    <p>All Browsers Support.</p>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 md:mt-20 sm:mb-20">
                        <div className="card border-0 bg-[#36454F] text-white rounded" >
                            <div className="card-body bg-[#36454F] text-center">
                                <h5 className="text-center">PROJECT 3</h5>
                                <h7>Netflix Clone</h7>
                                <p>Streaming Website </p>
                                <img className="card-img h-60 mt-10" src={netflix}></img>
                                <p>Techonologies used </p>
                                <div className="d-flex justify-center">
                                    <img alt="not avialbale" src={html}
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src={css}
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src="https://tse3.mm.bing.net/th?id=OIP.1RjyBrRUw9wu9AJ2OImr5wAAAA&pid=Api&P=0"
                                        className="w-12 h-12 me-2"></img>

                                </div>
                                <div className="text-md">
                                    Single Page Netflix Clone
                                </div>
                                <a className="text-lg text-decoration-none text-light" href="https://github.com/SARBJOT2084/Netflixclone">
                                    <SocialIcon url="https://github.com/SARBJOT2084/Netflixclone" fgColor="gray" bgColor="transparent" />
                                    Github link
                                </a>
                                <br></br>
                                <div className="d-flex">
                                    <i className="fa fa-check mt-1 ms-4 me-1" aria-hidden="true"></i>

                                    <p>Responsiveness</p>
                                </div>
                                <div className="d-flex">
                                    <i className="fa fa-check mt-1 ms-4 me-1" aria-hidden="true"></i>

                                    <p>All Browsers Support.</p>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 md:mt-20 sm:mb-20">
                        <div className="card border-0 bg-[#36454F] text-white rounded" >
                            <div className="card-body bg-[#36454F] text-center">
                                <h5 className="text-center">PROJECT 4</h5>
                                <h7>TinDog.com</h7>
                                <p>Dating Site for Dogs. </p>
                                <img className="card-img h-60 mt-10" src={tindog}></img>
                                <p>Techonologies used </p>
                                <div className="d-flex justify-center">
                                    <img alt="not avialbale" src={html}
                                        className="w-12 h-12 me-2"></img>
                                    <img alt="not avialbale" src={css}
                                        className="w-12 h-12 me-2"></img>

                                    <img alt="not avialbale" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxkaq7mOTOVYdCtsLufQn2J29U1nf2V505Q&usqp=CAU"
                                        className="w-12 h-12 me-2"></img>

                                </div>
                                <div className="text-md">
                                    Single Page Dating Site for Dogs
                                </div>
                                <a className="text-lg text-decoration-none text-light" href="https://github.com/SARBJOT2084/TinDog">
                                    <SocialIcon url="https://github.com/SARBJOT2084/TinDog" fgColor="gray" bgColor="transparent" />
                                    Github link
                                </a>
                                <br></br>
                                <div className="d-flex">
                                    <i className="fa fa-check mt-1 ms-4 me-1" aria-hidden="true"></i>

                                    <p>Responsiveness</p>
                                </div>
                                <div className="d-flex">
                                    <i className="fa fa-check mt-1 ms-4 me-1" aria-hidden="true"></i>

                                    <p>All Browsers Support.</p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience