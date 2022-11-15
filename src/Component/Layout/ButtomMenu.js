import React from "react";
import MenuContainer from "../..//Pages/Home/MenuContainer";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import { useStateValue } from "../../context/StateProvider";

function ButtomMenu() {
  const [{ itemsFavorit }, dispatch] = useStateValue();
  return (
    <div>
      <div className="buttomMenu">
        <ul id="menu">
          <MenuContainer icon={<HomeIcon />} isHome link={"/"} />
          <div className="fav_container">
            <MenuContainer icon={<FavoriteIcon />} link={"/Favorit"} />
            {itemsFavorit.length > 0 ? (
              <div className="fav_content">
                <p>{itemsFavorit.length}</p>{" "}
              </div>
            ) : (
              <></>
            )}
          </div>
          <MenuContainer icon={<ChatIcon />} link={"/Addcategory"} />
          <MenuContainer icon={<AccountBalanceWalletIcon />} />
          <MenuContainer link={"#"} icon={<SummarizeIcon />} />
          <MenuContainer link={"#"} icon={<SettingsIcon />} />
          <div className="indicator"> </div>
        </ul>
      </div>
    </div>
  );
}
export default ButtomMenu;
