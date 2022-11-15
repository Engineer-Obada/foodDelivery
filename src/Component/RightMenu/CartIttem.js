import React, { useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

function CartIttem({ itemId, name, imgSrc, price }) {
  let s = [];
  const [qty, setQty] = useState(1);
  const [{ cart, total }, dispatch] = useStateValue();
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

  useEffect(() => {
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  useEffect(() => {
    s = total;
    s.push(parseFloat(price));

    dispatch({
      type: actionType.SET_TOTAL,
      total: s,
    });

    console.log(total);
  }, [cart]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      s = total;
      s.push(parseFloat(price));

      dispatch({
        type: actionType.SET_TOTAL,
        total: s,
      });

      console.log(total);
    } else {
      if (qty > 1) {
        setQty(qty - 1);
        s = total;
        const index = s.indexOf(parseFloat(price));
        console.log(price);
        if (index > -1) {
          s.splice(index, 1); // 2nd parameter means remove one item only
        }
        dispatch({
          type: actionType.SET_TOTAL,
          total: s,
        });
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
