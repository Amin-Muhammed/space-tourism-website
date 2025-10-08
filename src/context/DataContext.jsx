import React, { useState, useEffect, useContext, createContext } from 'react';

const BASE_URL =
  'https://raw.githubusercontent.com/Amin-Muhammed/space-tourism-website/refs/heads/main/src/Data';
const DataContextProvider = createContext();
const DataContext = ({ children }) => {
  const [data, setdata] = useState(null);
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState('');
  const [page, setPage] = useState(null);

  async function fetchData(page = 'destination') {
    const cached = localStorage.getItem(page);
    if (cached) {
      // check the storage
      console.log('taken from storage');
      setdata(JSON.parse(cached));
      return; // stop if the page is in the local storage
    }
    setisloading(true);
    console.log(page);
    try {
      const response = await fetch(`${BASE_URL}/${page}.json`);
      if (!response.ok) {
        console.log('error detected durring fetching');
        throw new Error('failed to recieve data');
      }
      const data = await response.json();
      setdata(data);

      localStorage.setItem(page, JSON.stringify(data)); // page is key, and data is value
    } catch (e) {
      seterror(e.message);
    } finally {
      setisloading(false);
    }
  }

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
