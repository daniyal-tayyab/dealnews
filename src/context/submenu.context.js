import { createContext, useState } from "react";

export const SubmenuContext = createContext({
  submenuHover: null,
  setSubmenuHover: () => null,
});

export const SubmenuProvider = ({ children }) => {
  const [submenuHover, setSubmenuHover] = useState(null);
  const value = { submenuHover, setSubmenuHover };

  return (
    <SubmenuContext.Provider value={value}>{children}</SubmenuContext.Provider>
  );
};
