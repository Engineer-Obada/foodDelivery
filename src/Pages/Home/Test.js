import React, { useEffect, useState } from "react";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

function Test() {
  let cartData = [];
  const [isCart, setCart] = useState(null);
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);

  return [setCart, isCart];
}

export default Test;
