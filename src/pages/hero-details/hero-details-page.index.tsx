import { Header } from "../../components/header/header.index";
import { Footer } from "../../components/footer/footer.index";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
  HeroComicsSectionPageStyle,
  HeroDetailsMainStyle,
  HeroDetailsSectionPageStyle,
  HeroSeriesSectionPageStyle,
} from "./hero-details-page.style";
import { ComicCard } from "../../components/comic-card/comic-card.index";
import deadPoolChibi from "../../assets/deadpool-chibi.png";
import thorChibi from "../../assets/thor-chibi.png";
import { SerieCard } from "../../components/serie-card/serie-card.index";
import { CharacterContext } from "../../provider/character.provider";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const HeroDetailsPage = () => {
  const { characterId } = useParams();
  const {
    character,
    characterComics,
    characterSeries,
    getCharacterById,
    getMoreCharacterComics,
    getMoreCharacterSeries,
    getNewCharacterComics,
    getNewCharacterSeries,setCharacter,setCharacterComics,setCharacterSeries
  } = useContext(CharacterContext);
  const [loadingComics, setLoadingComics] = useState<boolean>(false);
  const [loadingSeries, setLoadingSeries] = useState<boolean>(false);

  const handleLoadingComics = async () => {
    try {
      setLoadingComics(true);
      await getMoreCharacterComics(Number(characterId));
      setLoadingComics(false);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const handleLoadingSeries = async () => {
    try {
      setLoadingSeries(true);
      await getMoreCharacterSeries(Number(characterId));
      setLoadingSeries(false);
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (character !== null) {
      setCharacter(null)
      setCharacterComics([])
      setCharacterSeries([])
      getCharacterById(Number(characterId));
      getNewCharacterComics(Number(characterId));
      getNewCharacterSeries(Number(characterId));
    } else {
      getCharacterById(Number(characterId));
      getMoreCharacterComics(Number(characterId));
      getMoreCharacterSeries(Number(characterId));
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
                <h1>{`${character.name}'s comics`.toUpperCase()}</h1>
                {characterComics.length === 0 ? (
                  <div id="empty">
                    <span>There are no comics</span>
                    <img src={deadPoolChibi} alt="Not found" />
                  </div>
                ) : (
                  <ul>
                    {characterComics.map((comic) => (
                      <ComicCard comic={comic} key={comic.id} />
                    ))}
                  </ul>
                )}
                {characterComics.length < character.comics.available &&
                  (loadingComics ? (
                    <button id="see-all-comics" disabled={true}>
                      Loading...
                    </button>
                  ) : (
                    <button
                      id="see-all-comics"
                      onClick={() => handleLoadingComics()}
                    >
                      Load more
                    </button>
                  ))}
              </div>
            </HeroComicsSectionPageStyle>
            <HeroSeriesSectionPageStyle>
              <div id="character-latest-series">
                <h1>{`${character.name} series`.toUpperCase()}</h1>
                {characterSeries.length === 0 ? (
                  <div id="empty">
                    <span>There are no series</span>
                    <img src={thorChibi} alt="Not found" />
                  </div>
                ) : (
                  <ul>
                    {characterSeries.map((serie) => (
                      <SerieCard serie={serie} key={serie.id} />
                    ))}
                  </ul>
                )}
                {characterSeries.length < character.series.available &&
                  (loadingSeries ? (
                    <button id="see-all-series" disabled={true}>
                      Loading...
                    </button>
                  ) : (
                    <button
                      id="see-all-series"
                      onClick={() => handleLoadingSeries()}
                    >
                      Load more
                    </button>
                  ))}
              </div>
            </HeroSeriesSectionPageStyle>
          </HeroDetailsMainStyle>
          <Footer />
        </>
      )}
    </>
  );
};
