import React, { useState, useEffect, useContext, createContext } from 'react';

const urls = {
  destinations: import.meta.env.VITE_DESTINATION_API,
  crew: import.meta.env.VITE_CREW_API,
  technology: import.meta.env.VITE_TECHNOLOGY_API,
};
const DataContextProvider = createContext();
const DataContext = ({ children }) => {
  const [data, setdata] = useState(null);
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState('');
  const [page, setPage] = useState('destinations');

  const fetchData = async () => {
    const cached = localStorage.getItem(page);
    if (cached) {
      // check the storage
      console.log('taken from storage');
      setdata(JSON.parse(cached));
      return; // stop if the page is in the local storage
    }
    setisloading(true);
    try {
      console.log(urls.crew);

      const response = await fetch(urls[page]);
      if (!response.ok) throw new Error('failed to recieve data');
      const data = await response.json();
      setdata(data);
      localStorage.setItem(page, JSON.stringify(data)); // page is key, and data is value
    } catch (e) {
      seterror(e.message);
    } finally {
      setisloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <DataContextProvider.Provider
      value={{ fetchData, setdata, data, isloading, error, page, setPage }}
    >
      {children}
    </DataContextProvider.Provider>
  );
};
const useData = () => {
  const data = useContext(DataContextProvider);
  if (data === undefined) throw new Error('wrong place to call provider!');
  return data;
};
export { DataContext, useData };
