import React from 'react'
import Header from '../header/header';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import "./home.css";

function Home() {
  return (
    <>
     <Header />
    <div
      id="carouselExampleControls"
      className="carousel slide carousel-fade"
      data-interval="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="innerCarouselDiv innerCarouselDiv1 shadow-lg">
            <h3 className="h3">Discover the fusion of flavors:</h3>
            <h1 className="mb-4"> A journey through filipino cuisine</h1>
            <p className="carouselSmallText">A filipina owned business</p>
            <Link className="viewMenuButton" to="/menu">View menu</Link>
          </div>
          <img
            style={{ width: "100%" }}
            src="Assets/allFood.jpeg"
            className="d-block"
            alt="foodBackground"
          />
        </div>
        <div className="carousel-item">
          <div className="carousel-img">
            <img
              id="tacos"
              src="Assets/sisigTacos.PNG"
              alt="sisigTacos"
            />
          </div>
          <div className="carousel-text carousel-heading">
            <h1>Sisig Tacos</h1>
            <div className="carousel-text carousel-innerText">
              Blending together the bold flavors of Filipino cuisine with the
              classic form of Mexican tacos.
            </div>
          </div>
          <img
            src="https://demo-storage.com/pm/html/vincent/img/slide_1.jpg"
            className="d-block"
            alt="woodBackground"
          />
        </div>
        <div className="carousel-item">
          <div className="carousel-img">
            <img
              alt="sisigFries"
              style={{ width: 307, height: 240 }}
              src="Assets/sisigFries.jpeg"
            />
          </div>
          <div className="carousel-text carousel-heading">
            <h1>Sisig Fries</h1>
            <div className="carousel-text carousel-innerText">
              An irresistible and flavorful fusion dish that combines two
              classis comfort foods - fries and sisig.
            </div>
          </div>
          <img
            src="https://demo-storage.com/pm/html/vincent/img/slide_1.jpg"
            className="d-block"
            alt="woodBackground"
          />
        </div>
        <div className="carousel-item">
          <div className="carousel-img">
            <img
              alt="lumpia"
              style={{ width: 307, height: 240 }}
              src="Assets/lumpia.jpeg"
            />
          </div>
          <div className="carousel-text carousel-heading">
            <h1>Shanghai Lumpia</h1>
            <div className="carousel-text carousel-innerText">
              Succulent ground pork seasoned with aromatic spices and
              vegetables, wrapped in a thin and crispy wrapper, served with a
              sweet and tangy dipping sauce.
            </div>
          </div>
          <div className="bookViewButtons">
            <div style={{marginRight: 10}}>
            <button
              type="button"
              className="btn btn-outline-light"
            >
              Contact now {">"}
            </button>
            </div>
            <div>
            <Link
              to="/menu"
              className="viewMenuButton"
            >
              View Menu {">"}
            </Link>
            </div>
          </div>
          <img
            src="https://demo-storage.com/pm/html/vincent/img/slide_1.jpg"
            className="d-block"
            alt="woodBackground"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="popularItemsDiv">
      <div id="popularItemsHeading">Popular Items</div>
      <div className="popularItemsInnerDiv d-flex flex-row justify-content-evenly">
        <div className="p-2">
          <img alt="tacos" src="Assets/tacos.png" />
          <h5>Sisig Tacos</h5>
          <p className="popularItemsInfo">
            A fusion of spicy Filipino pork/chicken and Mexican tacos, served
            on a tortilla with toppings like onion and cilantro.
          </p>
          <p className="price">$ 12.99</p>
        </div>
        <div className="p-2">
          <img alt="sisigOverRice" src="Assets/over-rice.png" />
          <h5>Sisig Over Rice</h5>
          <p className="popularItemsInfo">
            Spicy, crispy diced or shredded pork/chicken, mixed with spices,
            onion, and vinegar, served over steaming hot rice.
          </p>
          <p className="price">$ 13.99</p>
        </div>
        <div className="p-2">
          <img alt="sisigBao" src="Assets/bao.png" />
          <h5>Sisig Bao</h5>
          <p className="popularItemsInfo">
            The flavors of Filipino sisig with the soft and fluffy steamed bao
            buns of Chinese cuisine.
          </p>
          <p className="price">$ 11.49</p>
        </div>
        <div className="p-2">
          <img alt="sisigBanhMi" src="Assets/banhmi.jpeg" />
          <h5>Tocino Banh Mi</h5>
          <p className="popularItemsInfo">
            Chicken Tocino in a French-Vietnamese hybrid consisting of an airy
            baguette with pickled veggies, cilantro drizzled with banana
            ketchup aioli.
          </p>
          <p className="price">$ 10.75</p>
        </div>
      </div>
    </div>
    
    <div className="igFeed">
      <h1>Follow us on our Instagram</h1>
      <img alt="zigzag line" id="zigzag" src="Assets/zigZag.png" />
      <h6>
        <a href="https://www.instagram.com/peachysfoodtogollc/">
          <img src="Assets/3d-ig-logo.png" alt="igLogo" />
          Peachy's Food To Go
        </a>
      </h6>
    </div>
    <div>
      <Footer />
    </div>
  </>

  )
}

export default Home;