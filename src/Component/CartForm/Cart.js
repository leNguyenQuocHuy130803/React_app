import React, { Component } from "react";
import styles from './cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Cart extends Component {
  render() {
    return (
      <div>
      <div className="cart">
        <div className="row">
          <div className="col-sm-4">
            <h1>Sản Phẩm</h1>
          </div>
          <div className="col-sm-2">
            <h1>Thể loại</h1>
          </div>
          <div className="col-sm-3">
            <h1>Số lượng</h1>
          </div>
          <div className="col-sm-2">
            <h1>Giá tiền</h1>
          </div>
          <div className="col-sm-1 continue">
            <a href="./index.html" className="continue">Continue Shopping</a>
          </div>
        </div>
      </div>
      <div>
        <div className="cart">
          <div className="row products_cart">
            <div className="col-sm-4">
              <a href className="pic">
                <img src="./img/books1.png" alt="" />
                <div className="cost">
                  <span className="price">100.000 đ</span>
                  <span>80.000 đ</span>
                </div>
              </a>
            </div>
            <div className="col-sm-2 TL">
              <h1>Tiểu thuyết</h1>
            </div>
            <div className="col-sm-3 ">
              <div className="quantity" id="buy-amount">
                <button className="minus" onclick="handleMinus()">-</button>
                {/*định nghĩa tên và hàm để sử lí onclick khi người dùng bấm vào ,handle nghãi là sử lí */}
                <input name="amount" id="amount" type="text" defaultValue={1} />
                {/*mặc định rằng trong ô input luôn là 1*/}
                <button className="plus" onclick="handlePlus()">+</button>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="cost-de">
                <span className="product-price">100.000 đ</span>
              </div>
            </div>
            <div className="col-sm-1">
              <i className="fa fa-trash delete" aria-hidden="true" />
            </div>
          </div>
          <div className="row products_cart">
            <div className="col-sm-4">
              <a href className="pic">
                <img src="./img/books11.webp" alt="" />
                <div className="cost">
                  <span className="price">100.000 đ</span>
                  <span>80.000 đ</span>
                </div>
              </a>
            </div>
            <div className="col-sm-2 TL">
              <h1>Tiểu thuyết</h1>
            </div>
            <div className="col-sm-3 ">
              <div className="quantity" id="buy-amount">
                <button className="minus" onclick="handleMinus()">-</button>
                {/*định nghĩa tên và hàm để sử lí onclick khi người dùng bấm vào ,handle nghãi là sử lí */}
                <input name="amount" id="amount" type="text" defaultValue={1} />
                {/*mặc định rằng trong ô input luôn là 1*/}
                <button className="plus" onclick="handlePlus()">+</button>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="cost-de">
                <span className="product-price">80.000 đ</span>
              </div>
            </div>
            <div className="col-sm-1">
              <i className="fa fa-trash delete" aria-hidden="true" />
            </div>
          </div>
          <div className="row products_cart">
            <div className="col-sm-4">
              <a href className="pic">
                <img src="./img/books4.png" alt="" />
                <div className="cost">
                  <span className="price">100.000 đ</span>
                  <span>80.000 đ</span>
                </div>
              </a>
            </div>
            <div className="col-sm-2 TL">
              <h1>Tiểu thuyết</h1>
            </div>
            <div className="col-sm-3 ">
              <div className="quantity" id="buy-amount">
                <button className="minus" onclick="handleMinus()">-</button>
                {/*định nghĩa tên và hàm để sử lí onclick khi người dùng bấm vào ,handle nghãi là sử lí */}
                <input name="amount" id="amount" type="text" defaultValue={1} />
                {/*mặc định rằng trong ô input luôn là 1*/}
                <button className="plus" onclick="handlePlus()">+</button>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="cost-de">
                <span className="product-price">80.000 đ</span>
              </div>
            </div>
            <div className="col-sm-1">
              <i className="fa fa-trash delete" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="check">
        <div className="subtotal cf">
          <ul>
            <li className="totalRow"><span className="label">Subtotal</span><span className="value">$35.00</span></li>
            <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>
            <li className="totalRow"><span className="label">Tax</span><span className="value">$4.00</span></li>
            <li className="totalRow final"><span className="label">Total</span><span className="value">$44.00</span></li>
            <li className="totalRow"><a href className="btn continue">Checkout</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    );
  }
}
