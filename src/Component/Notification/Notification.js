import React, { Component } from 'react';
import Noti from './notification.css';


export default class Notification extends Component {
  render() {
    return (
      <div>
        <div className="nav_1">
  <div className="menu">
    <form action className="form">
      <div className="heading">
        <i className="fa-solid fa-bell" /> Thông Báo
      </div>
      <div>
        <div className="form-group-img">
          <img src="./img/ico_login.png" alt="" />
        </div>
        <div className="form-group-p">
          <p>vui lòng đăng nhập để xem thông báo</p>
        </div>
        <div>
          <a href="./index.html">
            <button className="form-submit-1">
              Đăng Nhập
            </button>
          </a>
          <a href="./Register/Reg.html">
            <button className="form-submit-2">Đăng Ký</button>
          </a>
        </div>
      </div>
    </form>
  </div>
</div>

      </div>
    )
  }
}
