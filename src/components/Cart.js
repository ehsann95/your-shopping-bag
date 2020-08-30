import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdbreact";
import lock from "../assets/lock.jpg";
import Divider from "./Divider";

const Cart = ({ items }) => {
  const [discount, setDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [estTotal, setEstTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    let estimatedTotal = 0;
    let disAmount = 0;
    items.forEach((itemPrice) => {
      total += itemPrice.p_price;
    });

    setSubTotal(parseInt(total));

    if (items.length === 3) {
      estimatedTotal = subTotal * 0.05;
      setEstTotal(estimatedTotal);
    } else if (items.length > 3 && items.length <= 10) {
      estimatedTotal = subTotal * 0.05;
      setEstTotal(estimatedTotal);
    } else if (items.length > 10) {
      estimatedTotal = subTotal * 0.05;
      setEstTotal(estimatedTotal);
    }

    disAmount = total - estimatedTotal;
    setDiscount(disAmount);
  }, [items, subTotal, discount, estTotal]);

  return (
    <div className="container d-flex my-4 flexbox_main_container ">
      <div className="flexbox_left">
        <p className="bold">Need help or have questions?</p>
        <p>
          Call Customer Service at <br /> 1-800-555-5555
        </p>

        <button className="flexbox_btn_link mb-3">
          Chat with one of our stylists
        </button>

        <button className="flexbox_btn_link">
          See return & exchange policy
        </button>
      </div>

      {/* Right Sect */}
      <div className="flexbox_right">
        <div className="d-flex justify-content-between align-items-center flexbox_rt_promo_main">
          <div className="mr-2">ENTER PROMOTION CODE OR GIFT CARD</div>

          <div className="form-group">
            <input type="text" className="form-control mt-3" id="promo" />
          </div>
          <div className="ml-2">
            <button className="flexbox_apply_btn">APPLY</button>
          </div>
        </div>

        <Divider height="0.5rem" width="100%" />
        {/* SUBTOTAL */}
        <div className="d-flex justify-content-between my-2">
          <div>
            <span className="bold">SUBTOTAL</span>
          </div>
          <div>
            <span className="flexbox_text_price">$ {subTotal}.00</span>
          </div>
        </div>
        {/* Promotion code applied */}
        <div className="d-flex justify-content-between my-2">
          <div>
            <span className="bold">PROMOTIO CODE JF10 APPLIED</span>
          </div>
          <div>
            <span className="flexbox_text_price">- $ {estTotal}</span>
          </div>
        </div>
        {/* Estimated Shipping */}
        <div className="d-flex justify-content-between align-items-center my-2 ">
          <div>
            <p>
              <span className="bold">ESTIMATED SHIPPING* </span>
              <br /> You qualify for free shipping <br />
              because your order is over $50
            </p>
          </div>
          <div>
            <span className="flexbox_text_price">FREE</span>
          </div>
        </div>

        {/* Estimated Total */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p>
              <span className="bold">ESTIMATED TOTAL </span> <br /> Tax will be
              applied during checkout
            </p>
          </div>
          <div>
            <span className="flexbox_text_price">$ {discount}</span>
          </div>
        </div>

        <Divider height="0.5rem" width="100%" />
        {/* Continue Shoppping */}
        <div className="d-flex justify-content-end my-2 flexbox_rt_ship">
          <button className="flexbox_btn_link mr-2 my-3">
            CONTINUE SHOPPING
          </button>
          <MDBBtn className="btnmdb" color="primary">
            CHECKOUT
          </MDBBtn>
        </div>

        {/* SecureLock */}
        <div className="d-flex justify-content-end mt-2 flexbox_rt_lock">
          <div className="mr-2">
            <img src={lock} alt="lock" />
          </div>
          <p>Secure checkout. shopping is aleays safe & secure</p>
        </div>
      </div>

      {/* MOBILE ONLY DIV */}
      <div className="flexbox_mobile_only"></div>
    </div>
  );
};

export default Cart;
