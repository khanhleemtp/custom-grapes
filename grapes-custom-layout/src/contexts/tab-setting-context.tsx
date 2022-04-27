import React, { createContext, useContext } from "react";

interface TabSetting {
  element: string;
}

const TabCtx = createContext<TabSetting | null>(null);

const valueSettingSample: TabSetting = {
  element: "TextComponent",
};

const useTabSettings = () => {
  const context = useContext(TabCtx);
  return context;
};

const TabContextProvider: React.FC<{}> = ({ children }) => {
  return (
    <TabCtx.Provider value={valueSettingSample}>{children}</TabCtx.Provider>
  );
};
export { TabContextProvider, useTabSettings };
