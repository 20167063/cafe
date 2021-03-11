import "./Menu.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Menu(){
    return(
        <div className="ourmenu">
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <div className="section-heading">
                    <h6>Our Menu</h6>
                    <h2>Our selection of cakes with quality taste</h2>
                </div>
                </div>
            </div>
            </div>

            <div>
                <Carousel responsive={responsive}>
                    <div className="item">
                    <div className="card card1">
                        <img src="../images/menu-item-01.jpg" />
                    </div>
                    </div>

                    <div className="item">
                    <div className="card card2">
                        <img src="../images/menu-item-02.jpg" />
                    </div>
                    </div>

                    <div className="item">
                    <div className="card card3">
                        <img src="../images/menu-item-03.jpg" />
                    </div>
                    </div>

                    <div className="item">
                    <div className="card card4">
                        <img src="../images/menu-item-04.jpg" />
                    </div>
                    </div>

                    <div className="item">
                    <div className="card card5">
                        <img src="../images/menu-item-05.jpg" />
                    </div>
                    </div>                   
                </Carousel>;
          </div>
        </div>
  
    )
}
  
export default Menu;