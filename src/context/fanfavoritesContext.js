import React, { createContext } from "react";

export const FanFavoritesContext = createContext();
export const FanFavoritesProvider = ({ children }) => {
  const fanfavorites = [
    {
      title: "Lil' Guys",
      image:
        "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860310-J0DH20X4OZ15GU0F132J/image.jpg?format=500w",
    },
    {
      title: "Bigger Statements",
      image:
        "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860317-2IC2WZTLET6GDMDSJYH6/image.jpg?format=500w",
    },
    {
      title: "Low Maintenance",
      image:
        "https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860323-VZFT6LGS791L47WIULXB/Ecomm_02_Lily_004.jpg?format=500w",
    },
  ];

  return (
    <FanFavoritesContext.Provider value={fanfavorites}>
      {children}
    </FanFavoritesContext.Provider>
  );
};
