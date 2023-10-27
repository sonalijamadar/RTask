import React from 'react'
import Header from '../header/header';
import './services.css'

function Services() {
  return (
    <>
    <Header />
    <div className="mainContent">
      <h1>Services</h1>
      <div className="services">
        <div>
          <h2>Healthy Options</h2>
          <p className="serviceOptionDescription">
            Great taste is the name of the game and we're committed to
            stepping up to the plate. Our goal is provide delicious, natural
            options. That's why we prepare all of our meals with fresh,
            locally sourced ingredients.
          </p>
        </div>
        <div>
          <h2>Catering</h2>
          <p className="serviceOptionDescription">
            Are you looking for someone to provide the food at your next
            event? Large or small, we do it all! Get in touch to start
            planning the perfect meal for a business lunch, wedding, cocktail
            reception, and more!
          </p>
        </div>
        <div>
          <h2>Meal Planning</h2>
          <p className="serviceOptionDescription">
            In today's culture of unhealthy fast food, eating well can be
            difficult. Don't know where to start? Let us help with our
            tailored menu program. Get in touch so we can work together to
            plan something that's right for you.
          </p>
        </div>
      </div>
    </div>
  </>

  )
}

export default Services;