import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className=''>
        {/* <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div> */}
      </section>
      <br/>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>OpenLearn</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Empowering learners worldwide with free access to high-quality educational resources. Explore diverse subjects, enhance skills, and unlock your potential with our interactive online platform.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          {/* <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Team</li>
              <li>Contact us</li>
            </ul>
          </div> */}
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Team</li>
            </ul>
          </div>
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Nekar Nagar Old Hubli,Hubli-580024
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 9731318600
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                manjunathkate1234@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      
    </>
  )
}

export default Footer
