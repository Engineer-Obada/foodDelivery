import React, { useEffect, useState } from "react";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

let cartData = [];
function Test() {
  const [isCart, setCart] = useState(null);
  const [{ cart }, dispatch] = useStateValue();
  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);
  return [setCart];
}

export default Test;
