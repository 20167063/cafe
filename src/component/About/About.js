import { React } from 'react';
import "./About.css"
function About(){
  return(
            <section className="section" id="about">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="left-text-content">
                    <div className="section-heading">
                        <h6>About Us</h6>
                        <h2>We Leave A Delicious Memory For You</h2>
                    </div>
                    <p>Klassy Cafe is one of the best <a href="https://templatemo.com/tag/restaurant" target="_blank" rel="sponsored">restaurant HTML templates</a> with Bootstrap v4.5.2 CSS framework. You can download and feel free to use this website template layout for your restaurant business. You are allowed to use this template for commercial purposes. <br /><br />You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please contact us for more information.</p>
                    <div className="row">
                        <div className="col-4">
                        <img src="../images/about-thumb-01.jpg" alt />
                        </div>
                        <div className="col-4">
                        <img src="../images/about-thumb-02.jpg" alt />
                        </div>
                        <div className="col-4">
                        <img src="../images/about-thumb-03.jpg" alt />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="right-content">
                    <div className="thumb">
                        <a rel="nofollow" href="http://youtube.com"><i className="fa fa-play" /></a>
                        <img src="../images/about-video-bg.jpg" alt />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

  )
}

export default About;