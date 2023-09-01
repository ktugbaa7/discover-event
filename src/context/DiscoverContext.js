import React, { createContext, useCallback, useEffect, useState } from 'react'
import { axiosInstance } from '../util/data/data';
import data from "../../eventdata.json";

export const DiscoverContext = createContext();

export const DiscoverProvider = ({ children }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ eventData, setEventData ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState("");
    const eventdata = data;

    const getData = useCallback( async () => {
      try{
        const response = await axiosInstance.get("/v1/events/react-native")
        const returnedData = await response.data
        setEventData(returnedData)
        setIsLoading(false);

      }catch(err) {
        setError(err)
        console.log("ERROR", err);
        setIsLoading(false);
      }
    }, [])

    const updateSearch = (searchQuery) => {
      setSearchQuery(searchQuery);
    }

    useEffect(() => {
      setIsLoading(true);
      getData();
    }, []);

    const values = {
        eventData,
        searchQuery,
        isLoading,
        error,
        setSearchQuery,
        eventdata,
        updateSearch,
    }

  return (
    <DiscoverContext.Provider value={values}>{children}</DiscoverContext.Provider>
  )
}

