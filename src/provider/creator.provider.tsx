import React, { createContext, useState } from "react";
import { api } from "../services/api/api";
import { toast } from "react-toastify";
import { hashKey } from "../services/api/hash";
import axios, { AxiosError } from "axios";
import { iCreator } from "./types/@types-creator";
import { iComic } from "./types/@types-comic";
import { iSerie } from "./types/@types-series";

interface iCreatorProviderProps {
  children: React.ReactNode;
}

interface iCreatorContext {
  creator: iCreator | null;
  setCreator: React.Dispatch<React.SetStateAction<iCreator | null>>;
  getCreatorInfo: (creatorId: number) => Promise<void>;
  creatorComics: [] | iComic[];
  setCreatorComics: React.Dispatch<React.SetStateAction<[] | iComic[]>>;
  getCreatorComics: (creatorId: number) => Promise<void>;
  creatorSeries: [] | iSerie[];
  setCreatorSeries: React.Dispatch<React.SetStateAction<[] | iSerie[]>>;
  getCreatorSeries: (creatorId: number) => Promise<void>;
}

export const CreatorContext = createContext({} as iCreatorContext);

export const CreatorProvider = ({ children }: iCreatorProviderProps) => {
  const hash = hashKey();
  const requisitionQuantity = 10;
  const [comicsOffset, setComicsOffSet] = useState<number>(0);
  const [seriesOffset, setSeriesOffSet] = useState<number>(0);
  const [creator, setCreator] = useState<iCreator | null>(null);
  const [creatorComics, setCreatorComics] = useState<iComic[] | []>([]);
  const [creatorSeries, setCreatorSeries] = useState<iSerie[] | []>([]);

  const getCreatorInfo = async (creatorId: number) => {
    try {
      const response = await api.get(`/creators/${creatorId}?${hash}`);
      setCreator(response.data.data.results[0]);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getCreatorComics = async (creatorId: number) => {
    try {
      const response = await api.get(
        `/creators/${creatorId}/comics?limit=${requisitionQuantity}&offset=${
          comicsOffset * requisitionQuantity
        }${hash}`
      );
      setCreatorComics([...creatorComics, ...response.data.data.results]);
      setComicsOffSet(comicsOffset + 1);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getCreatorSeries = async (creatorId: number) => {
    try {
      const response = await api.get(
        `/creators/${creatorId}/series?limit=${requisitionQuantity}&offset=${
          seriesOffset * requisitionQuantity
        }${hash}`
      );
      setCreatorSeries([...creatorSeries, ...response.data.data.results]);
      setSeriesOffSet(seriesOffset + 1);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <CreatorContext.Provider
      value={{
        creator,
        getCreatorInfo,
        creatorComics,
        getCreatorComics,
        creatorSeries,
        getCreatorSeries,
        setCreator,
        setCreatorComics,
        setCreatorSeries,
      }}
    >
      {children}
    </CreatorContext.Provider>
  );
};
