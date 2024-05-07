import { createContext, useContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const useData = () => useContext(DataContext)

export const DataProvider = ({ children }) => {
  const [steamData, setSteamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('../minsteamdb.json')
      .then(response => response.json())
      .then(data => setSteamData(data.sort(({ published_meta: a }, { published_meta: b }) => (a ??= '0') > (b ??= '0') ? -1 : a < b ? 1 : 0)))
      .then(setLoading(false))
      .catch(error => console.error("error", error));
  }, [setSteamData])

  return (
    <DataContext.Provider value={{ steamData, setSteamData, loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
};



