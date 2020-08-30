import React, { useState } from "react";
import Divider from "./Divider";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";

const Modal = ({
  toggle,
  modal,
  item,
  image,
  sizeQtyChange,
  changeButton,
  changeBtn,
}) => {
  const [size, setSize] = useState("s");
  const [qty, setQty] = useState(1);

  const onEdit = (id, size, qty) => {
    sizeQtyChange(id, size, qty);
    toggle();
  };

  const viewModal = () => {
    changeButton();
  };

  const onSizeSelect = (e) => {
    setSize(e.target.value);
  };

  const onQtySelect = (e) => {
    setQty(e.target.value);
  };

  return (
    <MDBContainer>
      <MDBModal isOpen={modal} toggle={toggle} centered>
        <MDBModalHeader
          toggle={toggle}
          style={{ height: "auto", border: "none", padding: "1rem 1rem 0 0" }}
        ></MDBModalHeader>
        <MDBModalBody>
          <div className="d-flex justify-content-between container">
            <div>
              <Divider height="0.5rem" width="100%" />
              <h4 className="item_name">{item.p_name}</h4>
              <p>
                {item.c_currency}
                <span style={{ fontSize: "3rem", fontWeight: "bold" }}>
                  {item.p_price}
                </span>
              </p>
              <div className="d-flex">
                <div>
                  <select
                    name="size"
                    id="size"
                    className="form-control"
                    style={{ width: "6rem" }}
                    onChange={onSizeSelect}
                  >
                    <option value="">SIZE</option>
                    {item.p_available_options.sizes.map((size) => (
                      <option value={size.code} key={size.code}>
                        {size.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mx-2">
                  <select
                    name="qty"
                    id="qty"
                    className="form-control"
                    style={{ width: "6rem" }}
                    onChange={onQtySelect}
                  >
                    <option value="">QTY</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
              </div>

              <div
                className="d-flex flex-column justify-content-center mt-4"
                style={{ width: "100%" }}
              >
                <MDBBtn
                  color="primary"
                  onClick={() => onEdit(item.id, size, qty)}
                >
                  {changeBtn}
                </MDBBtn>
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "#fff",
                    textDecoration: "underline",
                  }}
                  onClick={viewModal}
                >
                  See product details
                </button>
              </div>
            </div>
            <div className="align-self-center">
              <img
                src={image}
                alt=""
                style={{ height: "auto", width: "100%" }}
              />
            </div>
          </div>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default Modal;
