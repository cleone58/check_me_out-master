import React from 'react'

export default (props)=> {
  return (
    <section id="feature-area" className="about-section">
      <div className="container">
        <div className="row text-center inner">
          <div className="col-sm-4">
            <div className="feature-content">
              <div className="images__style">
                <img src="img/the_know.jpeg" alt="Image"/>
              </div>
              <h2 className="feature-content-title green-text">The Know</h2>
              <p className="feature-content-description">“The know” is a Rails web application that provides users with global access and ticket purchasing to various event listings such as concerts, sporting events, theater, etc. Access to tickets is made available with the SeatGeek API.
              </p>
              <a href="https://github.com/cleone58/theknowfinal" className="feature-content-link green-btn">View on Github</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature-content">
              <div className="weather">
                <div className="images__style">
                  <img src="img/my_weather.png" alt="Image"/>
                </div>
                <h2 className="feature-content-title blue-text">Weather_React</h2>
                <p className="feature-content-description"> "Weather_React" is a really cool React/Redux application that allows users to grab five day forecasts from any of their favorite cities. This application uses the Open Weather Maps API & Google Maps API.</p>
                <a href="https://github.com/cleone58/weatherReact" className="feature-content-link blue-btn">View on Github</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature-content">
              <div className="swift">
                <div className="images__style">
                  <img src="img/my_albums.png" alt="Image"/>
                </div>
                <h2 className="feature-content-title red-text">My Albums</h2>
                <p className="feature-content-description">'My Albums' is a React/Native IOS App that uses the Amazon API that allows users to view an artist or album, and if they wish to purchase they click the 'buy now' button which will take them to the Amazon shopping cart.
                </p>
                <a href="https://github.com/cleone58/myalbums" className="feature-content-link red-btn">View on Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
