import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { Route } from "react-router";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const allTabs = ["/", "/favorites"];

  const handleChange = (_e, selectedTab) => {
    setValue(selectedTab);
  };

  return (
    <Route>
      <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Navigation"
          indicatorColor="primary"
          textColor="primary">
          <Tab label="Home" index={0} component={Link} to={allTabs[0]} />
          <Tab label="Favorites" index={1} component={Link} to={allTabs[1]} />
        </Tabs>
      </AppBar>
    </Route>
  );
};

export default NavBar;
