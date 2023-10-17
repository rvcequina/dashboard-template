import { useContext, useEffect, useState } from "react";
import { assetsContext,ASSETS_CONTEXT } from "./context";


const AssetProvider = ({ children }) => {
  const [assets, setAssets] = useState(ASSETS_CONTEXT);
  const imageUrl = '@/assets/img'

  const componentBtn=imageUrl+'component-btn.png'

  return (
    <assetsContext.Provider value={{ 
        componentBtn
    }}>
      {children}
    </assetsContext.Provider>
  );
};

export const useApi = () => useContext(apiContext);

export default AssetProvider;