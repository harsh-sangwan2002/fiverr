import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import ProjectSlide from '../../components/projectSlide/ProjectSlide'

const Home = () => {
  return (
    <div className='home'>

      <Featured />
      <TrustedBy />
      <Slide />

      <div className="features">

        <div className="container">

          <div className="item">

            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find hight-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Qulaity work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your
              project within minutes.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment
              isn't released until you approve the work.
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find hight-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

          </div>

          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>

        </div>

      </div>

      <div className="features dark">

        <div className="container">

          <div className="item">

            <h1>fiverr Business</h1>
            <h1>A business solution desinged for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benefits,
              dedicated to busnesses
            </p>

            <div className='title'>
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className='title'>
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className='title'>
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <button>Explore Fiverr Business</button>

          </div>

          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>

        </div>

      </div>

      <ProjectSlide />

    </div>
  )
}

export default Home
