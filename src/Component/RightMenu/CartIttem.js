import React, { useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
let cartItems = [];

function CartIttem({ itemId, name, imgSrc, price }) {
  var t = 0;
  let s = [];
  const [qty, setQty] = useState(1);
  const [{ cart, total }, dispatch] = useStateValue();
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [Total, setTotal] = useState(t + itemPrice);

  useEffect(() => {
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  useEffect(() => {
    s = total;
    s.push(itemPrice);
    dispatch({
      type: actionType.SET_TOTAL,
      total: s,
    });
    console.log(total);
  }, [cart, qty]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      if (qty > 1) {
        setQty(qty - 1);
      }
    }
  };

  return (
    <div className="cardItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>

      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveIcon
              className="itemRemove"
              onClick={() => updateQuantity("remove", itemId)}
            />

            <AddIcon
              className="itemAdd"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>

      <p className="itemPrice">
        <span className="dolorSign">$ </span>
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
}

export default CartIttem;
