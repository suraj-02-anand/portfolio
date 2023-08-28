import React from "react";
import "../styles/Skills.css"
function Skills() {
  return (
    <>
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0" ></div>
      
      <div className="d-flex min-vh-100 align-items-center justify-content-center p-4">
        <section id="skills">
            <div className="container text-white">

              <div className="my-4">
                <p data-aos="fade-right" className='fw-bold fs-3 text-center mb-0'>Skills</p>
                <div className='my-0 h-line-1'></div>
              </div>

              <div className="row">
                <div className="col-12">
                  {/* Skills */}
                  <div className="front-end my-4">
                    <div className="icon-list-01"  data-aos="flip-left" data-aos-duration="1000">
                      <img src={require(`../images/html5.png`)} alt="" className="icon-img  p-2 mx-1"  data-toggle="tooltip" data-placement="bottom" title="HTML" />
                      <img src={require(`../images/css3.png`)} alt="" className="icon-img  p-2 mx-1" data-toggle="tooltip" data-placement="bottom" title="CSS" />
                      <img src={require(`../images/js.png`)} alt="" className="icon-img  p-1 mx-1" data-toggle="tooltip" data-placement="bottom" title="Javascript" />
                      <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png`} alt="" className="icon-img p-2 mx-1" data-toggle="tooltip" data-placement="bottom" title="Bootstrap" />
                      <img src={`https://ionicframework.com/docs/icons/logo-react-icon.png`} alt="" className="icon-img p-2 mx-1" data-toggle="tooltip" data-placement="bottom" title="ReactJS" />
                    </div>

                    <p className="fs-4 mt-4 text-center"  data-aos="flip-up">Front End Technologies</p>
                  </div>

                  <div className="back-end my-5">
                    <div className="icon-list-01" data-aos="flip-right" data-aos-duration="1000">
                      <img src={require(`../images/django.png`)} alt="" className="icon-img p-1 mx-1" data-toggle="tooltip" data-placement="bottom" title="Django" />
                      <img src={require(`../images/nodejs.png`)} alt="" className="icon-img p-2 mx-1" data-toggle="tooltip" data-placement="bottom" title="NodeJS" />
                      <img src={`https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png`} alt="" className="icon-img  p-2 mx-1" data-toggle="tooltip" data-placement="bottom" title="ExpressJS" />
                      <img src={`https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png`} alt="" className="icon-img  p-1 mx-1" data-toggle="tooltip" data-placement="bottom" title="MongoDB" />
                      <img src={require(`../images/sql.png`)} style={{filter: "brightness(0) invert(0.9)"}}alt="RDBMS" className="icon-img  mx-1 p-2 " data-toggle="tooltip" data-placement="bottom" title="Any RDBMS" />
                    </div>
                    <p className="fs-4 my-3 text-center"  data-aos="flip-down">Back End Technologies</p>
                  </div>

                  <div className="programming-languages my-5">
                    <div className="icon-list-01" data-aos="flip-up" data-aos-duration="1000">
                      <img data-toggle="tooltip" data-placement="bottom" title="Python" className="mb-0 icon-img  p-1 mx-1 rounded-circle"  src={`https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg`} alt="" />
                      <img data-toggle="tooltip" data-placement="bottom" title="Java" className="mb-4 mt-2 icon-img rounded-circle p-2 mx-2" src={`data:image/png;base64,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`} alt=""  />
                    </div>
                    <p className="fs-4 my-1 text-center"  data-aos="flip-right">Programming Languages</p>
                  </div>

                  <div className="tools my-5">
                    <div className="icon-list-01" data-aos="flip-down" data-aos-duration="1000">
                      <img data-toggle="tooltip" data-placement="bottom" title="Google Cloud" src={require(`../images/google-cloud.png`)} alt="" className="icon-img  p-2 mx-1" />
                      <img data-toggle="tooltip" data-placement="bottom" title="Linux" src={require(`../images/linux.png`)} alt="" className="icon-img  p-2 mx-1" />
                      <img data-toggle="tooltip" data-placement="bottom" title="Photoshop" src={require(`../images/photoshop.png`)} alt="" className="icon-img p-0 mx-1" />
                      <img data-toggle="tooltip" data-placement="bottom" title="MS Office Suite" src={require(`../images/msoffice.png`)} alt="" className="icon-img  p-2 mx-1" />
                    </div>
                    <p className="fs-4 my-3 text-center"  data-aos="flip-left">Misc</p>
                  </div>

                </div>
              </div>
            </div>
        </section>
      </div>
    </>
  );
}

export default Skills;
