import React, { Component } from "react";
import foot from "./footer.css";


export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>our locations</h3>
              <a href="#">
                {" "}
                <i className="fas fa-map-marker-alt" /> india{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-map-marker-alt" /> USA{" "}
              </a>
            </div>
            <div className="box">
              <h3>quick links</h3>
              <a href="./index.html">
                {" "}
                <i className="fas fa-arrow-right" /> home{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-arrow-right" /> featured{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-arrow-right" /> Category{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-arrow-right" /> reviews{" "}
              </a>
              <a href="./feedback.html">
                <i className="fas fa-arrow-right" /> feedback
              </a>
            </div>
            <div className="box">
              <h3>extra links</h3>
              <a href="#">
                {" "}
                <i className="fas fa-arrow-right" /> account info{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-arrow-right" /> ordered items{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-arrow-right" /> privacy policy{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-arrow-right" /> payment method{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-arrow-right" /> our serivces{" "}
              </a>
            </div>
            <div className="box">
              <h3>contact info</h3>
              <a href="#">
                {" "}
                <i className="fas fa-phone" /> 9167064054{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-phone" /> 77388 44717{" "}
              </a>
              <a href="#">
                <i className="fas fa-envelope" /> kordepriyanka1118@gmail.com
              </a>
              <a href="#">
                <i className="fas fa-envelope" /> rohitmishra.rm2106@gmail.com
              </a>
              <img
                src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/worldmap.png"
                className="map"
                alt=""
              />
            </div>
          </div>
          <div className="share">
            <a href="#" className="fab fa-facebook-f" />
            <a
              href="https://twitter.com/priyankakorde"
              className="fab fa-twitter"
            />
            <a
              href="https://www.instagram.com/im_priyankak_/"
              className="fab fa-instagram"
            />
            <a
              href="https://www.linkedin.com/in/priyanka-korde-2029521a1/"
              className="fab fa-linkedin"
            />
            <a
              href="https://www.linkedin.com/in/rohit-m-3494521a2/"
              className="fab fa-linkedin"
            />
          </div>

          {/* <div className="muiten">
            <a href="#home">
              <i className="bx bxs-up-arrow-circle" />
            </a>
          </div> */}

          <div className="credit">
            created by <span>Huy designer </span>
            all rights reserved!
          </div>
        </section>
      </div>
    );
  }
}
