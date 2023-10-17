import { Header } from "../../components/header/header.index";
import { Footer } from "../../components/footer/footer.index";
import { useEffect, useContext } from "react";
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

export const HeroDetailsPage = () => {
  const { characterId } = useParams();
  const {
    character,
    characterComics,
    characterSeries,
    getAllCharacterComics,
    getAllCharacterSeries,
    getCharacterById,
    getCharacterComics,
    getCharacterSeries,
  } = useContext(CharacterContext);

  useEffect(() => {
    getCharacterById(Number(characterId));
    if (characterComics.length === 0) {
      getCharacterComics(Number(characterId));
    }
    if (characterSeries.length === 0) {
      getCharacterSeries(Number(characterId));
    }
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
                {characterComics.length < character.comics.available && (
                  <h1
                    id="see-all-comics"
                    onClick={() => getAllCharacterComics(Number(characterId))}
                  >
                    Show all comics
                  </h1>
                )}
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
                {characterSeries.length < character.series.available && (
                  <h1
                    id="see-all-series"
                    onClick={() => getAllCharacterSeries(Number(characterId))}
                  >
                    Show all series
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
