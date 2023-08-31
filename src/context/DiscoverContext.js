import React, { createContext, useEffect, useState } from 'react'
import { axiosInstance } from '../util/data/data';

export const DiscoverContext = createContext();

export const DiscoverProvider = ({ children }) => {

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        axiosInstance.get("/v1/events/react-native")
        .then((res) => setEventData(res.data))
        .catch(err => console.log("ERROR", err))
    }, []);

    const values = {
        eventData,
    }

  return (
    <DiscoverContext.Provider value={values}>{children}</DiscoverContext.Provider>
  )
}

