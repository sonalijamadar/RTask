import React from 'react'
import Header from '../header/header'
import "./about.css";
import Footer from '../footer/footer';

function About() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Header />
        <div className="aboutTopDiv">
          <div>
            <text className="aboutTopDivMainText">
              The Story Of
              <br></br>
              <span className="aboutTopDivCompanyName">
                Peachy's Food To Go
              </span>
            </text>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="aboutBottomHalf">
          <div className="aboutMiddleDiv centered-content">
            <div>
              <text>
                Maria “Peachy” Donato, Chef and Owner of Peachy's Food To Go,
                LLC has been cooking since she was a little girl in the
                Philippines, when she lived with her grandparents. She migrated
                to the U.S. at age 13, and from then on, became more passionate
                and interested in the food industry.{" "}
              </text>
            </div>
          </div>
          <div className="aboutBottomDiv ">
            <div className="centered-content">
              <div className="video">
              <video
                autoPlay
                width="100%"
                height="auto"
                src="Assets/ig-reel-bg.mp4"
                controls
              ></video>
              </div>
              <text className="centered-content">
                Her intrigue in creating food lead her to produce Filipino
                fusion cuisine—her imagination and cleverness are well put
                together to make sure it leaves an amazing flavor on your
                palate. Peachy's culinary journey has been nothing short of remarkable.
                Her passion for creating delectable Filipino fusion cuisine has
                propelled her business to new heights.
              </text>
              <br></br>
              <text className="centered-content date">2023</text>
              <br></br>
              <text className="centered-content">
                Peachy's Food To Go has
                experienced exponential growth, extending its presence to a
                multitude of exciting venues and events across the San Joaquin
                County area, the Bay Area, and Sacramento County. From the
                enchanting atmosphere of the inaugural Garlic Festival in
                Stockton to the picturesque settings of local wineries. Beyond
                these local gems, Peachy's influence has reached far and wide,
                as she's been warmly received at acclaimed food festivals,
                including the highly anticipated Foodie Lands in Sacramento.
              </text>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>

  )
}

export default About