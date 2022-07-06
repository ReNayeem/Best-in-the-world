import "./App.css";
import Svg from "./components/SVG/Svg";
import React, { useState } from "react";
import { useEffect } from "react";
// import gsap from "gsap";

import award from './Assets/world-communication-awards-for-best-digital-experience.png'
import award1 from './Assets/nexgtv-entertainment-mobile-app-development.png'
import award2 from './Assets/nexgtv-mobile-app-ui-design.png'
import twoImg1 from './Assets/veme-blockchain-app-developed.png'
import twoImg2 from './Assets/veme-app-ui-design.png'
import threeImg1 from './Assets/nasa-mobile-app.png'
import threeImg2 from './Assets/nasa-fitness-tracking-mobile-app.png'
import threeImg3 from './Assets/measure-total-body-weight-through-fitness-app.png'
import fourImg1 from './Assets/pizza_box.png'
import fourImg2 from './Assets/domi-img1.png'
import fourImg3 from './Assets/ux-strategy-for-mobile-app-devlopment.png'
import fourImg4 from './Assets/dominos-bread.png'
import fourImg5 from './Assets/dominos-bread1.png'
import fourImg6 from './Assets/on-demand-app-development-company.png'
import fiveImg1 from './Assets/karavan-social-networking-app-screen.png'
import fiveImg2 from './Assets/karavan_2.png'
import fiveImg3 from './Assets/social-networking-app-case-study.png'
import fiveImg4 from './Assets/karavan-social-networking-app-screen-2.png'
import fiveImg5 from './Assets/developers-for-social-media-app.png'
import sixImg1 from './Assets/erp-app-development-service.png'
import sevenImg1 from './Assets/mobile-app-of-the-year-by-entrepreneur.png'
import sevenImg2 from './Assets/melltoo-img2.png'
import sevenImg3 from './Assets/melltoo-img1.png'


function App() {
  const [scrollResult, setScrollResult] = useState(0);
  const [textChange, setTextChange] = useState(0);

  const left = React.createRef();
  const one = React.createRef();
  const two = React.createRef();
  const three = React.createRef();
  const four = React.createRef();
  const five = React.createRef();
  const six = React.createRef();
  const seven = React.createRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollResult((window.scrollY / 665) * 100);
      const scroll = parseInt((window.scrollY / 4747) * 100);
      setTextChange(scroll);
    });
  }, []);

  return (
    <div>
      <div className="App">
        <div
          id="left"
          ref={left}
          style={{
            backgroundColor:
              textChange >= 0 && textChange < 16
                ? "#6311A8"
                : textChange >= 16 && textChange < 33
                  ? "#4a27cc"
                  : textChange >= 33 && textChange < 50
                    ? "#10113a"
                    : textChange >= 33 && textChange < 50
                      ? "#15253a"
                      : textChange >= 50 && textChange < 65
                        ? "#16263B"
                        : textChange >= 65 && textChange < 82
                          ? "#1264e7"
                          : textChange >= 82 && textChange < 100
                            ? "#012a90"
                            : "#00834C",
          }}
        >
          <div id="svg-container">
            <div id="svg-text">
              {textChange >= 0 && textChange < 16 ? (
                <div id="download">
                  <h1 data-aos="flip-up">25M+ Downloads</h1>
                  <h6 data-aos="flip-up">on appstore & google playstore</h6>
                  <img data-aos="flip-up" className="award-img" src={award} alt="" />
                  <h1 data-aos="flip-up" className="award-text">ABC 123</h1>
                  <p className="award-text">We are the best web development <br />company in the world</p>
                  <h6 className="award-text-left four-h6-1">View Case Study<i className="fa-solid fa-arrow-right-long ml-2"></i></h6>
                  <h6 className="award-text-right">S K I P</h6>
                </div>

              ) : textChange >= 16 && textChange < 33 ? (
                <div id="blockchain">
                  <h6 data-aos="flip-up" className="two-h6">The Next Big</h6>
                  <h1 data-aos="fade-up">Blockchain</h1>
                  <h6 data-aos="flip-up" className="two-h6">Revolution</h6>
                  <h1 data-aos="flip-up" className="award-text award-text-m">ABC 234</h1>
                  <p data-aos="flip-up" className="award-text award-text-p">We are the best web development</p>
                  <p className="award-text">company in the world</p>
                  <h6 data-aos="flip-up" className="award-text-left two-h6-2">Coming Soon</h6>
                  <h6 className="award-text-right two-h6-3">S K I P</h6>
                </div>
              ) : textChange >= 33 && textChange < 50 ? (
                <div id="blockchain">
                  <h6 data-aos="flip-up" className="two-h6 three-h6">Powered by advanced</h6>
                  <img data-aos="fade-up" className="three-img" src={threeImg1} alt="" />
                  <h6 data-aos="flip-up" className="two-h6">algorithm</h6>
                  <h1 data-aos="flip-up" id="text-3" className="award-text award-text-m">ABC 345</h1>
                  <p className="award-text award-text-p">We are the best</p>
                  <p className="award-text">web development company</p>
                  <p className="award-text">in the world</p>
                  <h6 data-aos="flip-up" className="award-text-left two-h6-2 three-h6-2">Coming Soon</h6>
                  <h6 className="award-text-right two-h6-3 three-h6-3">S K I P</h6>
                </div>
              ) : textChange >= 50 && textChange < 65 ? (
                <div id="blockchain">
                  <h6 data-aos="flip-up" className="two-h6">Redefining</h6>
                  <h1 data-aos="fade-up">UX Strategy</h1>
                  <h6 data-aos="flip-up" className="two-h6">and UI design</h6>
                  <h1 className="award-text award-text-m">ABC 456</h1>
                  <p className="award-text award-text-p">We are the best</p>
                  <p className="award-text">web development company</p>
                  <p className="award-text">in the world</p>
                  <h6 data-aos="flip-up" className="award-text-left  three-h6-2 four-h6-1">View Case Study<i className="fa-solid fa-arrow-right-long ml-2"></i></h6>
                  <h6 className="award-text-right two-h6-3 three-h6-3">S K I P</h6>
                </div>
              ) : textChange >= 65 && textChange < 83 ? (
                <div id="blockchain">
                  <h6 data-aos="flip-up" className="two-h6">Text Headline</h6>
                  <h1 data-aos="fade-up">Text Headline</h1>
                  <h6 data-aos="flip-up" className="two-h6">Footer Headline</h6>
                  <h1 data-aos="flip-up" className="award-text award-text-m">ABC 567</h1>
                  <p className="award-text award-text-p">We are the best AR</p>
                  <p className="award-text">Development company</p>
                  <p className="award-text">in the world</p>
                  <h6 data-aos="flip-up" className="award-text-left  three-h6-2 four-h6-1">View Case Study<i className="fa-solid fa-arrow-right-long ml-2"></i></h6>
                  <h6 className="award-text-right two-h6-3 three-h6-3">S K I P</h6>
                </div>
              ) : textChange >= 50 && textChange < 99 ? (
                <div id="blockchain">
                  <h6 data-aos="flip-up" className="two-h6">Developing ERP Solution for</h6>
                  <h1 data-aos="fade-up">Text Headline</h1>
                  <h6 data-aos="flip-up" className="two-h6">in furniture industry</h6>
                  <h1 data-aos="flip-up" className="award-text award-text-m">ABC 678</h1>
                  <p className="award-text award-text-p">Best since 2017</p>
                  <p className="award-text">We offer wide range of</p>
                  <p className="award-text">web development and app development</p>
                  <h6 data-aos="flip-up" className="award-text-left  three-h6-2 four-h6-1">View Case Study<i className="fa-solid fa-arrow-right-long ml-2"></i></h6>
                  <h6 className="award-text-right two-h6-3 three-h6-3">S K I P</h6>
                </div>
              ) : (
                <div id="blockchain">
                  <h6 data-aos="flip-up" className="two-h6">Biggest Classified</h6>
                  <h1 data-aos="fade-up">East Asia</h1>
                  <h6 data-aos="flip-up" className="two-h6">Countries</h6>
                  <img data-aos="flip-up" id="seven-img" className="award-img" src={sevenImg1} alt="" />
                  <h1 data-aos="flip-up" id="seven-text" className="award-text award-text-m">ABC 23478</h1>
                  <p id="seven-text-2" className="award-text award-text-p">We are the best</p>
                  <p className="award-text">web development company</p>
                  <p className="award-text">in the world</p>
                  <h6 data-aos="flip-up" id="seven-text-3" className="award-text-left  three-h6-2 four-h6-1">Coming Soon</h6>
                  <h6 id="seven-p" className="award-text-right two-h6-3 three-h6-3">S K I P</h6>
                </div>
              )}
            </div>
            <Svg scrollResult={scrollResult} textChange={textChange}></Svg>
          </div>
        </div>
        <div id="right">
          <div ref={one} id="one">
            <img data-aos="fade-up" className="one-img-1" src={award1} alt="" />
            <img data-aos="fade-down" className="one-img-2" src={award2} alt="" />
          </div>
          <div ref={two} id="two">
            <img data-aos="fade-up" className="two-img-1" src={twoImg1} alt="" />
            <img data-aos="fade-down" className="two-img-2 three-img-3" src={twoImg2} alt="" />
          </div>
          <div ref={three} id="three">
            <img data-aos="fade-up" className="two-img-1 three-img-2" src={threeImg2} alt="" />
            <img data-aos="fade-down" id="two-img-2-id" className="two-img-2 three-img-3" src={threeImg3} alt="" />
          </div>
          <div ref={four} id="four">
            <div className="four-d-1">
              <div className="four-d-2">
                <img data-aos="fade-right" id="four-d-2-img-1" src={fourImg1} alt="" />
                <img data-aos="fade-down" id="four-d-2-img-2" src={fourImg2} alt="" />
              </div>
              <div className="four-d-3">
                <img data-aos="fade-up" className="four-d-3-img" src={fourImg3} alt="" />
              </div>
              <div className="four-d-4">
                <img data-aos="fade-right" className="four-d-4-img-1" src={fourImg4} alt="" />
                <img data-aos="fade-right" className="four-d-4-img-2" src={fourImg5} alt="" />
              </div>
            </div>
          </div>
          <div ref={five} id="five">
            <div className="five-d-1">
              <div className="five-d-2">
                <img data-aos="fade-up" className="five-d-2-img-1" src={fiveImg1} alt="" />
                <img data-aos="fade-down" className="five-d-2-img-2" src={fiveImg2} alt="" />
              </div>
              <div className="five-d-3">
                <img data-aos="fade-up" className="five-d-3-img-1" src={fiveImg3} alt="" />
                <img data-aos="fade-down" className="five-d-3-img-2" src={fiveImg4} alt="" />
              </div>
              <img data-aos="fade-right" className="five-img-1" src={fiveImg5} alt="" />
            </div>
          </div>
          <div ref={six} id="six">
            <img data-aos="fade-up" src={sixImg1} alt="" />
          </div>
          <div ref={seven} id="seven">
            <img data-aos="fade-up" className="seven-img-2" src={sevenImg2} alt="" />
            <img data-aos="fade-up" className="seven-img-3" src={sevenImg3} alt="" />
          </div>
        </div>
      </div>
      <div className="App-2">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-touch="true" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-column c-1">
                <div className="c-d-1 ">
                  <img className="c-d-1-img-1" src={award1} alt="" />
                  <img className="c-d-1-img-2" src={award2} alt="" />
                </div>
                <div className="c-d-2 px-5 text-white">
                  <img className="c-d-2-img" src={award} alt="" />
                  <h2 className="font-aw font-weight-bold">ABC 123</h2>
                  <p>This is sample text for ABC 123. This is sample text for ABC 123.</p>
                  <p className="font-weight-bold">View Case Study<i className="fa-solid fa-arrow-right-long ml-2"></i></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column c-1">
                <div className="c2-d-1 d-flex">
                  <img className="c2-d-1-img-1" src={twoImg1} alt="" />
                  <img className="c2-d-1-img-2" src={twoImg2} alt="" />
                </div>
                <div className="c2-d-2 px-5 text-white">
                  <h2 className="font-aw font-weight-bold">ABC 1</h2>
                  <p>This is sample text for ABC 1</p>
                  <p className="font-weight-bold">CASE STUDY - <button className="c2-d-2-btn">Coming Soon</button></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column c-1">
                <div id="c3-d-1" className="c2-d-1 d-flex">
                  <img id="c3-d-1-img-1" className="c2-d-1-img-1" src={threeImg2} alt="" />
                  <img id="c3-d-1-img-2" className="c2-d-1-img-2" src={threeImg3} alt="" />
                </div>
                <div id="c3-d-2" className="c2-d-2 px-5 text-white">
                  <h2 className="font-aw font-weight-bold">ABC 2</h2>
                  <p>This is sample text for ABC 2</p>
                  <p className="font-weight-bold">CASE STUDY - <button id="c3-d-2-btn" className="c2-d-2-btn">Coming Soon</button></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column c-1">
                <div id="c4-d-1" className="c-d-1 ">
                  <img id="c4-d-1-img-1" className="c-d-1-img-1" src={fourImg1} alt="" />
                  <img id="c4-d-1-img-2" className="c-d-1-img-2" src={fourImg2} alt="" />
                  <img id="c4-d-1-img-3" className="c-d-1-img-2" src={fourImg3} alt="" />
                  <img id="c4-d-1-img-4" className="c-d-1-img-2" src={fourImg6} alt="" />
                  <img id="c4-d-1-img-5" className="c-d-1-img-2" src={fourImg4} alt="" />
                  <img id="c4-d-1-img-6" className="c-d-1-img-2" src={fourImg5} alt="" />
                </div>
                <div id="c4-d-2" className="c-d-2 px-5 text-white">

                  <h2 className="font-aw font-weight-bold">ABC 3</h2>
                  <p>This is sample text for ABC 3</p>
                  <p className="font-weight-bold">View Case Study<i className="fa-solid fa-arrow-right-long ml-2"></i></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column c-1">
                <div id="c5-d-1" className="c-d-1 ">
                  <img id="c5-d-1-img-1" className="c-d-1-img-1" src={fiveImg1} alt="" />
                  <img id="c5-d-1-img-2" className="c-d-1-img-2" src={fiveImg2} alt="" />
                  <img id="c5-d-1-img-3" className="c-d-1-img-2" src={fiveImg3} alt="" />
                  <img id="c5-d-1-img-4" className="c-d-1-img-2" src={fiveImg4} alt="" />
                  <img id="c5-d-1-img-5" className="c-d-1-img-2" src={fiveImg5} alt="" />
                </div>
                <div id="c5-d-2" className="c-d-2 px-5 text-white">

                  <h2 className="font-aw font-weight-bold">ABC 4</h2>
                  <p>This is sample text for ABC 4</p>
                  <p className="font-weight-bold">View Case Study<i className="fa-solid fa-arrow-right-long ml-2"></i></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column c-1">
                <div id="c6-d-1" className="c-d-1 ">
                  <img id="c6-d-1-img-1" src={sixImg1} alt="" />
                </div>
                <div id="c6-d-2" className="c-d-2 px-5 text-white">

                  <h2 className="font-aw font-weight-bold">ABC 4</h2>
                  <p>This is sample text for ABC 4</p>
                  <p className="font-weight-bold">View Case Study<i className="fa-solid fa-arrow-right-long ml-2"></i></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column c-1">
                <div id="c7-d-1" className="c-d-1 ">
                  <img id="c7-d-1-img-2" className="c-d-1-img-1" src={sevenImg2} alt="" />
                  <img id="c7-d-1-img-3" className="c-d-1-img-2" src={sevenImg3} alt="" />
                </div>
                <div id="c7-d-2" className="c-d-2 px-5 text-white">
                  <img id="c7-d-1-img-1" src={sevenImg1} alt="" />
                  <h2 className="font-aw font-weight-bold">XYZ 123</h2>
                  <p>This is sample text for XYZ 123.</p>
                  <p className="font-weight-bold">CASE STUDY - <button id="c7-btn" className="c2-d-2-btn">Coming Soon</button></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;
