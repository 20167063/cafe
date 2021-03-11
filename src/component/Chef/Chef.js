import { React } from 'react';
import "./Chef.css"
function Chef(){
  return(
    <section className="section-chef" id="chefs">
        <div className="container">
            <div className="row">
            <div className="col-lg-4 offset-lg-4 text-center">
                <div className="section-heading">
                <h6>Our Chefs</h6>
                <h2>We offer the best ingredients for you</h2>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-4">
                <div className="chef-item">
                <div className="thumb">
                    <div className="overlay" />
                    <img src="../images/chefs-01.jpg" alt="Chef #1" />
                </div>
                <div className="down-content">
                    <h4>Randy Walker</h4>
                    <span>Pastry Chef</span>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="chef-item">
                <div className="thumb">
                    <div className="overlay" />
                    <img src="../images/chefs-02.jpg" alt="Chef #2" />
                </div>
                <div className="down-content">
                    <h4>David Martin</h4>
                    <span>Cookie Chef</span>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="chef-item">
                <div className="thumb">
                    <div className="overlay" />
                    <img src="../images/chefs-03.jpg" alt="Chef #3" />
                </div>
                <div className="down-content">
                    <h4>Peter Perkson</h4>
                    <span>Pancake Chef</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Chef;