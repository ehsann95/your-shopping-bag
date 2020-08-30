import React from "react";

const Mobile = ({ toggle, products, images, modalItem }) => {
  const onEdit = (item, i) => {
    toggle();
    modalItem(item, i);
  };
  return (
    <div className="container">
      {products.map((item, i) => (
        <div className="d-flex flex-column justify-content-center align-items-center my-4 mobile_item">
          <div className="d-flex justify-content-between">
            <div className="mr-3">
              <img src={images[i]} alt="" className="img_mob" />
            </div>
            <div>
              <div>
                <p className="item_name">
                  {item.p_variation} {item.p_name}
                </p>
              </div>
              <div>
                <p className="item_name_desc">
                  Style#: {item.p_style} <br />
                  Color: {item.p_selected_color.name} <br />
                  Size: {item.p_selected_size.code}
                </p>
              </div>
              <div
                className="form-group"
                style={{
                  padding: "0.25rem",
                }}
              >
                <span>QTY: </span>
                <input
                  type="text"
                  value={item.p_quantity}
                  disabled
                  style={{
                    width: "3rem",
                    height: "2rem",
                    padding: "0.75rem",
                    marginLeft: "0.25rem",
                  }}
                />
              </div>
              <div className="my-3">
                <span className="bold item_price">
                  {item.c_currency}&nbsp;{item.p_price}
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center my-3">
            <div className="">
              <button className="btn_grp" onClick={() => onEdit(item, i)}>
                EDIT
              </button>
            </div>
            <div className="">
              <button className="btn_grp">X REMOVE</button>
            </div>

            <div className="">
              <button className="btn_grp">SAVE FOR LATER</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mobile;
