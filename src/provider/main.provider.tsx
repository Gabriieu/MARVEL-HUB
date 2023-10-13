import React, { createContext, useState } from "react";
import { api } from "../services/api/api";
import { toast } from "react-toastify";
import { iHero } from "./types/@types-hero";
import { hashKey } from "../services/api/hash";
import { iEvent } from "./types/@types-event";
import axios, { AxiosError, isAxiosError } from "axios";

interface iMainProviderProps {
  children: React.ReactNode;
}

interface iMainContext {
  heroes: [] | iHero[];
  getHeroes: () => Promise<void>;
  events: [] | iEvent[];
  getEvents: () => Promise<void>;
}

export const MainContext = createContext({} as iMainContext);

export const MainProvider = ({ children }: iMainProviderProps) => {
  const hash = hashKey();
  const [heroes, setHeroes] = useState<iHero[] | []>([]);
  const [events, setEvents] = useState<iEvent[] | []>([]);

  const getEvents = async () => {
    try {
      const response = await api.get(`/events?limit=5&orderBy=-startDate${hash}`);
      setEvents(response.data.data.results);
    } catch (error: any | AxiosError) {
      if(axios.isAxiosError(error)){
        toast.error(error.message);
      }else{
        console.log(error)
      }
    }
  };

  const getHeroes = async () => {
    try {
      const response = await api.get(`/characters?limit=100${hash}`);
      setHeroes(response.data.data.results);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }else{
        console.log(error)
      }
    }
  };

  return (
    <MainContext.Provider value={{ heroes, getHeroes, events, getEvents }}>
      {children}
    </MainContext.Provider>
  );
};
