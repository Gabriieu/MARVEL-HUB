import { Header } from "../../components/header/header.index";
import { Footer } from "../../components/footer/footer.index";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api/api";
import { hashKey } from "../../services/api/hash";
import { iHero } from "../../provider/types/@types-hero";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import {
  HeroComicsSectionPageStyle,
  HeroDetailsMainStyle,
  HeroDetailsSectionPageStyle,
  HeroSeriesSectionPageStyle,
} from "./hero-details-page.style";
import { iComic } from "../../provider/types/@types-comic";
import { ComicCard } from "../../components/comic-card/comic-card.index";
import deadPoolChibi from "../../assets/deadpool-chibi.png";
import thorChibi from "../../assets/thor-chibi.png";
import { iSerie } from "../../provider/types/@types-series";
import { SerieCard } from "../../components/serie-card/serie-card.index";

export const HeroDetailsPage = () => {
  const hash = hashKey();
  const { characterId } = useParams();
  const quantity: number = 6;
  const navigate = useNavigate();

  const [character, setCharacter] = useState<iHero | null>(null);
  const [characterRecentComics, setCharacterRecentComics] = useState<
    iComic[] | []
  >([]);
  const [characterRecentSeries, setCharacterRecentSeries] = useState<
    iSerie[] | []
  >([]);

  const getHeroById = async (characterId: number) => {
    try {
      const response = await api.get(`/characters/${characterId}?${hash}`);
      setCharacter(response.data.data.results[0]);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getHeroComics = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/comics?orderBy=-focDate&limit=${quantity}${hash}`
      );
      setCharacterRecentComics(response.data.data.results);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const getHeroSeries = async (characterId: number) => {
    try {
      const response = await api.get(
        `/characters/${characterId}/series?orderBy=-startYear&limit=${quantity}${hash}`
      );
      setCharacterRecentSeries(response.data.data.results);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getHeroById(Number(characterId));
    getHeroComics(Number(characterId));
    getHeroSeries(Number(characterId));
  }, []);

  return (
    <>
      {character && (
        <>
          <Header />
          <HeroDetailsMainStyle>
            <HeroDetailsSectionPageStyle>
              <div id="character-image">
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
              </div>
              <div id="character-description">
                <div>
                  <h1>{character.name}</h1>
                  {character.description ? (
                    <p>{character.description}</p>
                  ) : (
                    <p>
                      {`Sorry, ${character.name} doesn't have a
                      description.`}
                    </p>
                  )}
                </div>
              </div>
            </HeroDetailsSectionPageStyle>
            <HeroComicsSectionPageStyle>
              <div id="character-latest-comics">
                <h1>{`${character.name}'s latest comics`.toUpperCase()}</h1>
                {characterRecentComics.length === 0 ? (
                  <div id="empty">
                    <span>There are no comics</span>
                    <img src={deadPoolChibi} alt="Not found" />
                  </div>
                ) : (
                  <ul>
                    {characterRecentComics.map((comic) => (
                      <ComicCard comic={comic} key={comic.id} />
                    ))}
                  </ul>
                )}
                {characterRecentComics.length > quantity - 1 && (
                  <h1
                    id="see-all-comics"
                    onClick={() =>
                      navigate(`/characters/${characterId}/comics`)
                    }
                  >
                    See all comics
                  </h1>
                )}
              </div>
            </HeroComicsSectionPageStyle>
            <HeroSeriesSectionPageStyle>
              <div id="character-latest-series">
                <h1>{`${character.name} latest series`.toUpperCase()}</h1>
                {characterRecentSeries.length === 0 ? (
                  <div id="empty">
                    <span>There are no series</span>
                    <img src={thorChibi} alt="Not found" />
                  </div>
                ) : (
                  <ul>
                    {characterRecentSeries.map((serie) => (
                      <SerieCard serie={serie} key={serie.id} />
                    ))}
                  </ul>
                )}
                {characterRecentSeries.length > quantity  - 1&& (
                  <h1
                    id="see-all-series"
                    onClick={() =>
                      navigate(`/characters/${characterId}/series`)
                    }
                  >
                    See all series
                  </h1>
                )}
              </div>
            </HeroSeriesSectionPageStyle>
          </HeroDetailsMainStyle>
          <Footer />
        </>
      )}
    </>
  );
};
