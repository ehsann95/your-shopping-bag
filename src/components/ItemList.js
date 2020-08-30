import React from "react";

const ItemList = ({ toggle, products, images, modalItem }) => {
  const onEdit = (item, i) => {
    toggle();
    modalItem(item, i);
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{products.length} ITEMS</th>
            <th scope="col"></th>
            <th scope="col">SIZE</th>
            <th scope="col">QTY</th>
            <th scope="col">PRICE</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr
              style={{
                textTransform: "uppercase",
              }}
              key={i}
            >
              <td className="img_mob_td">
                <img src={images[i]} alt="" className="img_mob" />
              </td>
              <td className="table_item_desc">
                <div>
                  <p className="item_name">
                    {item.p_variation} {item.p_name}
                  </p>
                  <p>Style: {item.p_style}</p>
                  <p>Color {item.p_selected_color.name}</p>
                </div>

                <div className="my-5 btn_grp_main">
                  <button className="btn_grp" onClick={() => onEdit(item, i)}>
                    EDIT
                  </button>

                  <button className="btn_grp"> REMOVE</button>

                  <button className="btn_grp">SAVE FOR LATER</button>
                </div>
              </td>

              <td>{item.p_selected_size.code}</td>
              <td> {item.p_quantity}</td>
              <td>
                <span className="bold item_price">
                  {item.c_currency}&nbsp;{item.p_price}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
