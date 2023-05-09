import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import SideDrawer from "./SideDrawer/SideDrawer";
import LayoutStyles from "./LayoutStyles";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [showSideDrawer, toggleSideDrawer] = useState(false);

  const closeSideDrawer = () => {
    toggleSideDrawer(false);
  };
  const toggleSideDrawerHandler = () => {
    toggleSideDrawer(!showSideDrawer);
  };

  return (
    <LayoutStyles>
      <NavBar drawerToggleClicked={toggleSideDrawerHandler} />
      <SideDrawer open={showSideDrawer} closed={closeSideDrawer} />
      <main>{children}</main>
    </LayoutStyles>
  );
};
export default Layout;
