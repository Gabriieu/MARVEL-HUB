import React, { createContext, useState } from "react";
import { api } from "../services/api/api";
import { toast } from "react-toastify";
import { iHero } from "./types/@types-hero";
import { hashKey } from "../services/api/hash";
import { iEvent } from "./types/@types-event";
import axios, { AxiosError } from "axios";

interface iMainProviderProps {
  children: React.ReactNode;
}

interface iMainContext {
  heroes: [] | iHero[];
  getHeroes: () => Promise<void>;
  events: [] | iEvent[];
  getEvents: () => Promise<void>;
  getHeroesPage: (page: number) => Promise<void>;
  perPageHeroes: number;
  totalHeroes: number;
  heroesByName: [] | iHero[];
  getHeroesByName: (name: string) => Promise<void>;
  setHeroesByName: React.Dispatch<React.SetStateAction<[] | iHero[]>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const MainContext = createContext({} as iMainContext);

export const MainProvider = ({ children }: iMainProviderProps) => {
  const hash = hashKey();
  const perPageHeroes: number = 24;
  const [totalHeroes, setTotalHeroes] = useState<number>(0);
  const [heroes, setHeroes] = useState<iHero[] | []>([]);
  const [events, setEvents] = useState<iEvent[] | []>([]);
  const [heroesByName, setHeroesByName] = useState<iHero[] | []>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const getEvents = async () => {
    try {
      const response = await api.get(
        `/events?limit=5&orderBy=-startDate${hash}`
      );
      setEvents(response.data.data.results);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getHeroes = async () => {
    try {
      const response = await api.get(
        `/characters?limit=${perPageHeroes}${hash}`
      );
      setHeroes(response.data.data.results);
      setTotalHeroes(response.data.data.total);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getHeroesPage = async (page: number) => {
    try {
      const response = await api.get(
        `/characters?limit=${perPageHeroes}&offset=${
          page * perPageHeroes
        }${hash}`
      );
      setHeroes(response.data.data.results);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getHeroesByName = async (name: string) => {
    if (name.length > 3) {
      try {
        const response = await api.get(
          `/characters?nameStartsWith=${name}&limit=${perPageHeroes}${hash}`
        );
        setHeroesByName(response.data.data.results);
      } catch (error: any | AxiosError) {
        if (axios.isAxiosError(error)) {
          toast.error(error.message);
        } else {
          console.log(error);
        }
      }
    }
  };

  return (
    <MainContext.Provider
      value={{
        heroes,
        getHeroes,
        events,
        getEvents,
        perPageHeroes,
        getHeroesPage,
        totalHeroes,
        heroesByName,
        getHeroesByName,
        setHeroesByName,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
