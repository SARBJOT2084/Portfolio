import React, { useState } from 'react'
import a from './andriod_study_jams.png';
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import python from './python.jpg';
import oops from './oops.jpg';
import daa from './daa.jpg';
import awd from './awd.jpg';
function Certificate() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow(false);
  const handleShow3 = () => setShow(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow(false);
  const handleShow4 = () => setShow(true);
  return (
    <div>
      <h3 className="text-white text-left ms-5 mt-20 mb-10 tracking-widest font-serif uppercase">Certfications<i className=" text-white ml-5 fa-solid fa-certificate"></i></h3>

      <div className='flex  w-100 px-20 text-white'>

        {/*Modal React Bootstrap */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Python Completion Certificate</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={python}></img></Modal.Body>

        </Modal>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>OOPS  Certificate</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={oops}></img></Modal.Body>

        </Modal>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={awd}></img></Modal.Body>

        </Modal>
        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={daa}></img></Modal.Body>

        </Modal>
        <Modal show={show4} onHide={handleClose4}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={a}></img></Modal.Body>

        </Modal>
        <div className=" md:w-100 sm:w-100 md:mb-5 sm:mb-5 bg-[#273a3f] md:container md:mx-auto w-20 me-2"><p className=" ml-5 font-bold">Coding Ninjas</p><p className="ms-2">Python</p><p className="ms-2">Certificate of Completion</p><p className="ms-2">Oct 2020-Jan 2021</p>

          <div className="text-center">   <Button variant="warning" onClick={handleShow} className="text-center">
            Preview<i className=" ml-5 fa-solid fa-eye"></i>
          </Button></div><br></br>
        </div>
        <div className=" md:w-100 sm:w-100 md:mb-5 sm:mb-5 bg-[#273a3f] md:container md:mx-auto w-20 me-2"><p className=" ml-5 font-bold">Coding Ninjas</p><p className="ms-2">OOPS using Java</p><p className="ms-2">Certificate of Completion</p><p className="ms-2">Jan 2021-June 2021</p>

          <div className="text-center">   <Button variant="warning" onClick={handleShow1} className="text-center">
            Preview<i className=" ml-5 fa-solid fa-eye"></i>
          </Button></div>
        </div>
        <div className=" md:w-100 sm:w-100 md:mb-5 sm:mb-5 bg-[#273a3f] md:container md:mx-auto w-20 me-2"><p className=" ml-5 font-bold">Coding Ninjas</p><p className="ms-2">Advanced Web development</p><p className="ms-2">Certificate of Completion</p><p className="ms-2">Jan 2021-June 2021</p>
          <div className="text-center">   <Button variant="warning" onClick={handleShow2} className="text-center">
            Preview<i className=" ml-5 fa-solid fa-eye"></i>
          </Button></div></div>
        <div className=" md:w-100 sm:w-100 md:mb-5 sm:mb-5 bg-[#273a3f] md:container md:mx-auto w-20 me-2"><p className=" ml-5 font-bold">Coding Ninjas</p><p className="ms-2">Design and Analysis of Algorithms</p><p className="ms-2">Certificate of Completion</p><p className="ms-2">Feb 2022-June 2022</p>
          <div className="text-center">   <Button variant="warning" onClick={handleShow3} className="text-center">
            Preview<i className=" ml-5 fa-solid fa-eye"></i>
          </Button></div></div>
        <div className=" md:w-100 sm:w-100 md:mb-5 sm:mb-5 bg-[#273a3f] md:container md:mx-auto w-20 me-2"><p className=" ml-5 font-bold">Andriod Study Jams</p><p className="ms-2">3 day workshop</p><p className="ms-2">Certificate of Completion</p><p className="ms-2">6 Jan 2022- 8 Jan 2022</p>
          <div className="text-center">   <Button variant="warning" onClick={handleShow4} className="text-center">
            Preview <i className=" ml-5 fa-solid fa-eye"></i>
          </Button></div></div>

      </div>
    </div>


  )
}

export default Certificate;