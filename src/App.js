import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Divider from "./components/Divider";
import Modal from "./components/Modal";
import ItemList from "./components/ItemList";
import Mobile from "./components/Mobile";

import axios from "axios";

import t1 from "./assets/T1.jpg";
import t2 from "./assets/T2.jpg";
import t3 from "./assets/T3.jpg";
import t4 from "./assets/T4.jpg";

const App = () => {
  const images = [t1, t2, t3, t4];
  const [items, setItems] = useState({ productsInCart: [] });
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const [modalImg, setModalImg] = useState();
  const [changeBtn, setChangeBtn] = useState("EDIT");

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 560;

  const toggle = () => {
    setModal(!modal);
    setChangeBtn("EDIT");
  };

  const changeButton = () => {
    setChangeBtn("ADD TO BAG");
  };

  const modalItem = (item, i) => {
    setModalProduct(item);
    setModalImg(images[i]);
  };

  useEffect(() => {
    // Fetch Data
    refreshData();

    // Handle Window Size
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // GET DATA FROM JSON
  const refreshData = async () => {
    const res = await axios("http://localhost:3000/productsInCart");
    const data = res.data;
    setItems({ productsInCart: data });
  };

  // PATCH DATA TO JSON
  const onEditChange = async (id, size, qty) => {
    const res = await axios.patch(
      `http://localhost:3000/productsInCart/${id}`,
      {
        p_selected_size: {
          code: size,
        },
        p_quantity: parseInt(qty),
      }
    );
    refreshData();
  };

  return (
    <div className="App">
      <Header products={items.productsInCart} />

      {width > breakpoint ? (
        <ItemList
          toggle={toggle}
          products={items.productsInCart}
          images={images}
          modalItem={modalItem}
        />
      ) : (
        <Mobile
          toggle={toggle}
          products={items.productsInCart}
          images={images}
          modalItem={modalItem}
        />
      )}

      <Divider height="0.5rem" width="95%" />

      <Cart items={items.productsInCart} />

      {modalProduct.p_available_options && (
        <Modal
          modal={modal}
          toggle={toggle}
          item={modalProduct}
          image={modalImg}
          sizeQtyChange={onEditChange}
          changeButton={changeButton}
          changeBtn={changeBtn}
        />
      )}
    </div>
  );
};

export default App;
