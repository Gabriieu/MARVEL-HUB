import React, { createContext, useState } from "react";
import { hashKey } from "../services/api/hash";
import { iHero } from "./types/@types-hero";
import { iComic } from "./types/@types-comic";
import { iSerie } from "./types/@types-series";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api/api";
import { useParams } from "react-router-dom";

interface iCharacterProviderProps {
  children: React.ReactNode;
}

interface iCharacterContext {
  character: iHero | null;
  setCharacter: React.Dispatch<React.SetStateAction<iHero | null>>;
  getCharacterById: (characterId: number) => Promise<void>;
  characterComics: [] | iComic[];
  setCharacterComics: React.Dispatch<React.SetStateAction<[] | iComic[]>>;
  getMoreCharacterComics: (characterId: number) => Promise<void>;
  characterSeries: [] | iSerie[];
  setCharacterSeries: React.Dispatch<React.SetStateAction<[] | iSerie[]>>;
  getMoreCharacterSeries: (characterId: number) => Promise<void>;
  getNewCharacterComics: (characterId: number) => Promise<void>;
  getNewCharacterSeries: (characterId: number) => Promise<void>;
}

export const CharacterContext = createContext({} as iCharacterContext);

export const CharacterProvider = ({ children }: iCharacterProviderProps) => {
  const hash = hashKey();
  const quantity = 20;
  const { characterId } = useParams();
  const [comicsOffset, setComicsOffSet] = useState<number>(0);
  const [seriesOffset, setSeriesOffSet] = useState<number>(0);
  const [character, setCharacter] = useState<iHero | null>(null);
  const [characterComics, setCharacterComics] = useState<iComic[] | []>([]);
  const [characterSeries, setCharacterSeries] = useState<iSerie[] | []>([]);

  const getCharacterById = async (characterId: number) => {
    try {
      const response = await api.get(`/characters/${characterId}?${hash}`);
      setCharacter(response.data.data.results[0]);
      console.log(response);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getMoreCharacterComics = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/comics?limit=${quantity}&offset=${
          comicsOffset * quantity
        }${hash}`
      );
      setCharacterComics([...characterComics, ...response.data.data.results]);
      setComicsOffSet(comicsOffset + 1);
      console.log(response);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getNewCharacterComics = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/comics?limit=${quantity}&offset=${
          comicsOffset * quantity
        }${hash}`
      );
      setCharacterComics(response.data.data.results);
      setComicsOffSet(0);
      console.log(response);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getMoreCharacterSeries = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/series?limit=${quantity}&offset=${
          seriesOffset * quantity
        }${hash}`
      );
      setCharacterSeries([...characterSeries, ...response.data.data.results]);
      setSeriesOffSet(comicsOffset + 1);
      console.log(response);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getNewCharacterSeries = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/series?limit=${quantity}&offset=${
          seriesOffset * quantity
        }${hash}`
      );
      setCharacterSeries(response.data.data.results);
      setSeriesOffSet(0);
      console.log(response);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        characterComics,
        characterSeries,
        getCharacterById,
        getMoreCharacterComics,
        getMoreCharacterSeries,
        setCharacter,
        setCharacterComics,
        setCharacterSeries,
        getNewCharacterComics,
        getNewCharacterSeries,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
