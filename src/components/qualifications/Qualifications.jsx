import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qual section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Co-Curricular Journey</span>

      <div className="qual__container container">
        <div className="qual__tabs">
          <div
            className={
              toggleState === 1
                ? "qual__button button--flex qual__active"
                : "qual__button button--flex"
            }
            onClick={()=>{
                toggleTab(1)
            }}
          >
            <i className="uil uil-graduation-cap qual__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qual__button button--flex qual__active"
                : "qual__button button--flex"
            }
            onClick={()=>{
                toggleTab(2);
            }}
          >
            <i class="uil uil-desktop-cloud-alt qual__icon"></i>
            {/* <i className="uil uil-award qual__icon"></i> */}
            Experiences
          </div>
        </div>

        <div className="qual__sections">
          <div
            className={
              toggleState === 1
                ? "qual__content qual__content-active"
                : "qual__content"
            }
          >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                  B.E., Electronics and Communication Engineering 
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                Sri Shanmugha College of Engineering and Technology
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  8.2 CGPA
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2023
                </div>
                
              </div>

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>

              <div>
                <h3 className="qual__title">
                  Higher Secondary Schooling (HSC)
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                Government Higher Secondary School
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  71 %
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2019
                </div>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                   Secondary Schooling (SSLC)
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                Government Higher Secondary School
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  87.58%
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2017
                </div>
              </div>

              <div>
                <span className="qual__rounder"></span>
                {/* <span className="qual__line"></span> */}
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className={
              toggleState === 2
                ? "qual__content qual__content-active"
                : "qual__content"
            }
            
            >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                Junior Web Developer - Kanavu Startup Village
                </h3>
                <span className="qual__subtitle">
                <i class="uil uil-map-marker grade"></i>
                {/* <i className="uil uil-university grade"></i> */}
                Erode</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Dec 2023- Present
                </div>
              </div>

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
            <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
              <div>
                <h3 className="qual__title">
                Full Stack Developer Internship -  Kitkat Software Technologies
                </h3>
                <span className="qual__subtitle">
                <i class="uil uil-map-marker grade"></i>
                {/* <i className="uil uil-university grade"></i> */}
                Coimbatore</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Jul 2023- Dec 2023
                </div>
              </div>

              
            </div>

            {/* <div className="qual__data">
              

              <div>
                <h3 className="qual__title">
                  The Complete Node.js Developer Course (3rd Edition)
                </h3>
                <span className="qual__subtitle"><i className="uil uil-university grade"></i>Udemy</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>
       

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div> */}

              {/* <div>
                <span className="qual__rounder"></span>
               
              </div> */}

              {/* <div>
                <h3 className="qual__title">
                React - The Complete Guide (incl Hooks, React Router, Redux)
                </h3>
                <span className="qual__subtitle"><i className="uil uil-university grade"></i>Udemy</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
