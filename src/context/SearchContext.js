import React, { createContext, useEffect, useState } from 'react'
import { axiosInstance } from '../util/data/data';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    
    const [search, setSearch] = useState();

    useEffect(() => {
        axiosInstance.get(`/v1/events/react-native?search=${search}`)
        .then((res) => setSearch(res.data))
        .catch(err => console.log("ERROR", err))
    }, []);

    const values = {
        search,
    }

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  )
}
