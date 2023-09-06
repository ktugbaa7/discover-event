import React, { createContext, useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../util/data/data";

export const DiscoverContext = createContext();

export const DiscoverProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [eventData, setEventData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [resultTitle, setResultTitle] = useState("");

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `/v1/events/react-native?name${searchQuery}&center${searchQuery}&type${searchQuery}`
      );
      const returnedData = await response.data;

      setEventData(returnedData);
      setIsLoading(false);

      if (returnedData?.length > 0) {
        setResultTitle("");
      } else {
        setResultTitle("No Search Result Found!");
      }
    } catch (err) {
      setError(err);
      console.log("ERROR", err);
      setIsLoading(false);
    }
  }, [searchQuery]);

  const updateSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [searchQuery]);

  const values = {
    eventData,
    searchQuery,
    isLoading,
    error,
    setSearchQuery,
    updateSearch,
    resultTitle,
  };

  return (
    <DiscoverContext.Provider value={values}>
      {children}
    </DiscoverContext.Provider>
  );
};
