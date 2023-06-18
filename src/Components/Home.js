import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <p><h4 style={{textAlign:"center", color:"#9400d3"}}>"Who Needs SUPERHERO when You Are FULL-STACK DEVELOPER"</h4></p>
        <img
          className="d-block w-100"
          src="https://codequotient.com/blog/wp-content/uploads/2021/01/What-is-the-Future-Scope-of-a-Full-Stack-Developer-in-India.jpg"
          alt="First slide"
        />
        <Carousel.Caption>   
        </Carousel.Caption>
        <p style={{textAlign:"center", color:"#0D0447"}}><h1>Guvi Learn Code In Your Native Language</h1></p>
      </Carousel.Item>
      </Carousel>

  );
}

export default Home