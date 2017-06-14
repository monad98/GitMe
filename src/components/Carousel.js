import React from 'react';
const Carousel = () => (
  <div id="carouselMargin" className="container-fluid">
    {/*Carousel*/}
    {/*Surround everything with a div with the class carousel slide*/}
    <div id="theCarousel" className="carousel slide" data-ride="carousel">

      {/*Define how many slides to put in the carousel*/}
      <ol className="carousel-indicators">
        <li data-target="#theCarousel" data-slide-to="0" className="active"> </li>
        <li data-target="#theCarousel" data-slide-to="1"> </li>
        <li data-target="#theCarousel" data-slide-to="2"> </li>
      </ol>

      {/*Define the text to place over the image*/}
      <div className="carousel-inner">
        <div className="item active">
          <div className="slide1"></div>
          <div className="carousel-caption">
            <h3>Welcome</h3>
            <p>Developers </p>

          </div>
        </div>
        <div className="item">
          <div className="slide2"></div>
          <div className="carousel-caption">
            <h3>Portfolio Builder</h3>
            <p>All your skill sets in one place.</p>
          </div>
        </div>
        <div className="item">
          <div className="slide3"></div>
          <div className="carousel-caption">
            <h3>Employeers find your Developer</h3>
            <p>Find your Developer</p>
          </div>
        </div>
      </div>

      {/*Set the actions to take when the arrows are clicked*/}
      <a className="left carousel-control" href="#theCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"> </span>
      </a>
      <a className="right carousel-control" href="#theCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>
  </div>
);

export default Carousel;