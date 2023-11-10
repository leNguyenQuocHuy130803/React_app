import React, { Component } from "react";
import login from "./login.css";
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <form action id="form-login">
            <div className="icon-user">
              <i className="fa-regular fa-user" />
            </div>
            <h1 className="form-heading">Login here</h1>
            <div className="form-group">
              <i className="far fa-user" />
              <input
                type="text"
                className="form-input"
                placeholder="Tên đăng nhập"
              />
            </div>
            <div className="form-group">
              <i className="fas fa-key" />
              <input
                type="password"
                className="form-input"
                placeholder="Mật khẩu"
              />
              <div id="eye">
                <i className="far fa-eye" />
              </div>
            </div>
            <button className="form-submit">Đăng nhập </button>

            
            <div className="footer">
              <p>
                You lost password?
                <a href="#">Click Here</a>
              </p>
              <p style={{ marginTop: "1rem" }}>
                Don't have an account?
                <Link to="/Regis">Đăng Ký</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
