import React, { Component } from "react";
import { Link } from "react-router-dom";
import header from "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          {/* header  starts  */}
          <header className="header">
            <div className="header-1">
              <a href="#" className="logo">
                <i className="fas fa-book" /> ShopBooks_4_Main
              </a>
              <form action className="search-form">
                <input
                  type="search"
                  name
                  placeholder="search here..."
                  id="search-box"
                />
                <label htmlFor="search-box" className="fas fa-search" />
              </form>
              <div className="icons">
                <div className="icon-2">
                  <Link to="/carts">
                    <div>
                      <i className="fa-solid fa-cart-shopping" />
                    </div>
                    <div>Giỏ hàng</div>
                  </Link>
                </div>
                <div className="icon-2">
                  <Link to="./notifications">
                    <div>
                      <i className="fa-solid fa-bell" />
                    </div>
                    <div>Thông báo</div>
                  </Link>
                </div>
                <div className="icon-2">
                  <Link to="/login">
                    <div>
                      <i className="fa-solid fa-user" />
                    </div>
                    <div>Tài Khoản</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="header-2">
              <nav className="navbar">
                <a href="./index.html">home</a>
                <a href="#Grand">Grand Books</a>
                <a href="#gallery">Gallery Books</a>
                <a href="#reviews">reviews</a>
                <a href="./feedback.html">feedback</a>
              </nav>
            </div>
          </header>

          {/* header  ends */}

        </div>
      </div>
    );
  }
}
