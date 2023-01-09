import React, { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

function SideNavComp() {
  const [isVisible, toggleVisibility] = useState(false);
  const toggleIt = () => {
    toggleVisibility(!isVisible);
  };
  return (
    <div>
      <SideNav
        expanded={isVisible}
        style={{
          backgroundColor: isVisible ? " rgba(60, 64, 93, 255)" : "transparent",
          zIndex: "1",
        }}
      >
        <SideNav.Toggle onClick={toggleIt} />
        <SideNav.Nav style={{ visibility: isVisible ? "visible" : "none" }}>
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>placed orders</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default SideNavComp;
