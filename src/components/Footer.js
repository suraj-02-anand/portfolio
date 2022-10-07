import React from 'react'
import "../styles/Footer.css";
function Footer() {
    // Styling

    const addTextColor = (event) => { event.target.classList.add("text-danger") };
    const removeTextColor = (event) => {event.target.classList.remove("text-danger")};

  return (
    <>
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
    <footer className="bg-dark p-5"  id="footer">
        <div className="container text-white" >
            <div className="row">
                <div className="col-sm-12">
                    <h4  data-aos="flip-up" data-aos-duration="1000">About</h4>
                    <p data-aos="flip-down" data-aos-duration="1000">I'm a web developer with hands on experience in back end technologies like NodeJS Express MongoDB RDBMS.</p>
                </div>
            </div>
            
            <div className="row mt-3">
                <div className="col-6">
                    <ul className='p-0'>
                        <h4 data-aos="flip-left">Links</h4>
                        <li data-aos="flip-right" id="list-item"className='list-group-item my-2'><a href="#home">Home</a></li>
                        <li data-aos="flip-right" id="list-item"className='list-group-item  my-2'><a href="#about">About</a></li>
                        <li data-aos="flip-right" id="list-item"className='list-group-item  my-2'><a href="#skills">Skills</a></li>
                        <li data-aos="flip-right" id="list-item"className='list-group-item  my-2'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="col-6">
                    <h4 data-aos="flip-down">Get in touch</h4>
                    <p data-aos="flip-down">Feel Free to reach me out through social media links provided below.</p>
                </div>
            </div>
        
        <p className='text-center my-4 h5' data-aos="zoom-in" style={{fontFamily : "ubuntu"}}>Follow Me ----- 
                <i data-aos="zoom-in" className="fa-brands fa-linkedin fa-lg  " onMouseEnter={addTextColor} onMouseOut={removeTextColor} onClick={() => { window.location.href = "https://www.linkedin.com/in/suraj-anand-/"; }}></i>
                <i data-aos="zoom-in" className="fa-brands fa-instagram fa-lg " onMouseEnter={addTextColor} onMouseOut={removeTextColor} onClick={() => { window.location.href = "https://www.instagram.com/suraj_purushothaman/"; }}></i>
                <i data-aos="zoom-in" className="fa-brands fa-github fa-lg "    onMouseEnter={addTextColor} onMouseOut={removeTextColor} onClick={() => { window.location.href = "https://github.com/Suraj02anand/"; }}></i>
         </p>

        <div className="container" >
            <div className="row text-center">
                <p> Copyright ©{new Date().getFullYear()} All rights reserved | Made by Suraj</p>
            </div>
        </div>
        
        </div>
        
    </footer>
    </div>
    </>
  )
}

export default Footer