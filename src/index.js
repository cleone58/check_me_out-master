import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Navigation } from './components/app.js'
import { Header } from './components/app.js'
import { Gallery } from './components/app.js'
import {Lightbox} from './components/app.js'
import { ContactForm } from './components/app.js'
import { Footer, Social, Link, Blog } from './components/app.js'


class App extends Component {
  render() {
    return(
        <div>

          <Navigation />


          <div id="section1">
            <Header />
          </div>
          <div id="section2">
            <Gallery />








              </div>

              <div id="section2.5">
                <Lightbox />

              </div>

              <div id="section3">
                <section id="services-area" className="services-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 text-center inner our-service">
                        <div className="service">
                          <h1>About Me</h1>
                          <p>Technology and Sports are two major passions of mine. I feel combining both these passions are a match made in heaven. <br/>
                             As a Front End Developer with a deep interest of JavaScript and the React Eco-System my aim is to continue to increase my scripting and overall programming knowledge so that I can continue to create really cool apps.</p> <br/>
                          <p>"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking.<br/>
                             Don't settle. As with all matters of the heart, you'll know when you find it."<br/>
                             Steve Jobs</p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                    <Blog />





                </div>
                <div id="section4">
                <div className="wrapper">
                  <section id="contact-area" className="contact-section">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 text-center inner">
                          <div className="contact-content">
                            <h1>contact form</h1>
                            <div className="row">
                              <div className="col-sm-12">
                                <p>For Web Development enquires whether it be projects, freelance gigs, job opportunities etc. <br/>
                                  feel free to drop me a line, or you can hit me up via my social media channels below. <br/>
                                </p>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <ContactForm />
                          </div>
                        </div>
                      </div>
                    </section>
                    </div>
                  </div>
                  <div className="social">
                    <a class="rotationButton" href="https://github.com/cleone58"><Social styles="social-button"  image="http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/embed/public/2014/04/22/github-logo.png"/> </a>
                    <a class="rotationButton"  href="https://www.linkedin.com/in/cleonejacobsr/"> <Social styles="social-button"  image="https://image.flaticon.com/icons/svg/61/61109.svg" /></a>
                  </div>
                  <Footer />

                </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
