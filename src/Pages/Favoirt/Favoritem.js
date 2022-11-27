import ClearIcon from "@mui/icons-material/Clear";
import GradeSharpIcon from "@mui/icons-material/GradeSharp";
import AddIcon from "@mui/icons-material/Add";
import "../../Style/Favorite.css";
import { useStateValue } from "../../context/StateProvider";
import { useEffect, useState } from "react";
import { actionType } from "../../context/reducer";
import { Items } from "../../Data/Data";
import Test from "../Home/Test";

function Favoritem({ name, price, imgSrc, id }) {
  const [setCart] = Test();

  const [{ itemsFavorit }, dispatch] = useStateValue();
  const handelCancel = (id) => {
    const favoritData = itemsFavorit.filter((n) => n.id != id);
    dispatch({
      type: actionType.SET_FAVORIT,
      itemsFavorit: favoritData,
    });
  };

  return (
    <div>
      <div className="itemFavourit">
        <div className="favContent">
          <h2 className="favName">{name}</h2>

          <div className="favRating">
            <GradeSharpIcon />
            <GradeSharpIcon />
            <GradeSharpIcon />
            <GradeSharpIcon />
            <GradeSharpIcon />
          </div>
          <div className="favBottom">
            <div className="favPrice">$ {price}</div>
            <i className="favAddtoCart">
              <AddIcon
                onClick={() => setCart(Items.find((n) => n.id === id))}
              />
            </i>
          </div>
        </div>
        <div className="imgBox">
          <img src={imgSrc} />
          <div className="cancel" onClick={() => handelCancel(id)}>
            <ClearIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favoritem;
