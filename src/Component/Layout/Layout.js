import React from "react";
import ButtomMenu from "./ButtomMenu";
import Header from "./Header";
import RightMenu from "../RightMenu/RightMenu";
import { useStateValue } from "../../context/StateProvider";

function Layout() {
  return (
    <div>
      <Header />
      <ButtomMenu />
      <RightMenu />
    </div>
  );
}

export default Layout;
