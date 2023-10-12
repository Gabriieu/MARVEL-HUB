import React, { createContext, useState } from "react";
import { api } from "../services/api/api";
import { toast } from "react-toastify";
import { iHero } from "./types/@types-hero";
import { hashKey } from "../services/api/hash";
import { iEvent } from "./types/@types-event";

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
    if (events.length === 0) {
      try {
        const response = await api.get(`/events?limit=100${hash}`);
        setEvents(response.data.data.results);
      } catch (error) {
        toast.error("erro");
      }
    }
  };

  const getHeroes = async () => {
    if (heroes.length === 0) {
      try {
        const response = await api.get(`/characters?limit=100${hash}`);
        setHeroes(response.data.data.results);
      } catch (error) {
        toast.error("Erro");
      }
    }
  };

  return (
    <MainContext.Provider value={{ heroes, getHeroes, events, getEvents }}>
      {children}
    </MainContext.Provider>
  );
};
