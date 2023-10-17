import React, { createContext, useState } from "react";
import { hashKey } from "../services/api/hash";
import { iHero } from "./types/@types-hero";
import { iComic } from "./types/@types-comic";
import { iSerie } from "./types/@types-series";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api/api";

interface iCharacterProviderProps {
  children: React.ReactNode;
}

interface iCharacterContext {
  character: iHero | null;
  setCharacter: React.Dispatch<React.SetStateAction<iHero | null>>;
  getCharacterById: (characterId: number) => Promise<void>;
  characterComics: [] | iComic[];
  setCharacterComics: React.Dispatch<React.SetStateAction<[] | iComic[]>>;
  getCharacterComics: (characterId: number) => Promise<void>;
  characterSeries: [] | iSerie[];
  setCharacterSeries: React.Dispatch<React.SetStateAction<[] | iSerie[]>>;
  getCharacterSeries: (characterId: number) => Promise<void>;
  getAllCharacterComics: (characterId: number) => Promise<void>;
  getAllCharacterSeries: (characterId: number) => Promise<void>;
}

export const CharacterContext = createContext({} as iCharacterContext);

export const CharacterProvider = ({ children }: iCharacterProviderProps) => {
  const hash = hashKey();
  const quantity = 10;
  const [character, setCharacter] = useState<iHero | null>(null);
  const [characterComics, setCharacterComics] = useState<iComic[] | []>([]);
  const [characterSeries, setCharacterSeries] = useState<iSerie[] | []>([]);

  const getCharacterById = async (characterId: number) => {
    try {
      const response = await api.get(`/characters/${characterId}?${hash}`);
      setCharacter(response.data.data.results[0]);
      console.log(response.data.data.results[0]);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getCharacterComics = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/comics?limit=${quantity}${hash}`
      );
      setCharacterComics(response.data.data.results);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getAllCharacterComics = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/comics?${hash}`
      );
      setCharacterComics(response.data.data.results);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getCharacterSeries = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/series?limit=${quantity}${hash}`
      );
      setCharacterSeries(response.data.data.results);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getAllCharacterSeries = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/series?${hash}`
      );
      setCharacterSeries(response.data.data.results);
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
        getAllCharacterComics,
        getAllCharacterSeries,
        getCharacterById,
        getCharacterComics,
        getCharacterSeries,
        setCharacter,
        setCharacterComics,
        setCharacterSeries,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
