import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import TabContent from "./TabContent/TabContent";
import { tabsConfig } from "../../config/TabsGroup/TabGroupConfig";

function TabsGroup() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const tabIndex = tabsConfig.findIndex(tab => location.pathname === tab.path);
    setCurrentTab(tabIndex >= 0 ? tabIndex : 0);
  }, [location]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    navigate(tabsConfig[newValue].path);
  };

  return (
    <>
      <Tabs value={currentTab} onChange={handleTabChange}>
        {tabsConfig.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      <Routes>
        {tabsConfig.map((tab, index) => (
          <Route
            key={index}
            path={tab.path}
            element={<TabContent children={tab.content} />}
          />
        ))}
        <Route path="/" element={<TabContent children="Tab 1 content" />} />
      </Routes>
    </>
  );
}

export default TabsGroup;
