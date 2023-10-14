import { Header } from "../../components/header/header.index";
import { Footer } from "../../components/footer/footer.index";
import { HeroPageStyle } from "../heroes/heroes-page.style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api/api";
import { hashKey } from "../../services/api/hash";
import { iHero } from "../../provider/types/@types-hero";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { HeroDetailsSectionPageStyle } from "./hero-details-page.style";
import { iComic } from "../../provider/types/@types-comic";
import { ComicCard } from "../../components/comic-card/comic-card.index";

export const HeroDetailsPage = () => {
  const hash = hashKey();
  const navigate = useNavigate()
  const [character, setCharacter] = useState<iHero | null>(null);
  const [characterRecentComics, setCharacterRecentComics] = useState<
    iComic[] | []
  >([]);
  const { characterId } = useParams();

  const getHeroById = async (characterId: number) => {
    try {
      const response = await api.get(`/characters/${characterId}?${hash}`);
      setCharacter(response.data.data.results[0]);
      console.log(response.data.data.results);
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
        `/characters/${characterId}/comics?orderBy=-focDate&limit=7${hash}`
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
  useEffect(() => {
    getHeroById(Number(characterId));
    getHeroComics(Number(characterId));
  }, []);
  return (
    <>
      {character && (
        <>
          <Header />
          <HeroPageStyle>
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
                      {`Sorry, ${character.name} does not have a
                      description.`}
                    </p>
                  )}
                </div>
              </div>
            </HeroDetailsSectionPageStyle>
            <HeroDetailsSectionPageStyle>
              <div id="character-latest-comics">
                <h1>{`${character.name}'s latest comics`}</h1>
                <ul>
                    {
                        characterRecentComics.map(comic => <ComicCard comic={comic} key={comic.id}/>)
                    }
                </ul>
                <h1 id="see-all-comics" onClick={() => navigate(`/characters/${characterId}/comics`)}>See all comics</h1>
              </div>
            </HeroDetailsSectionPageStyle>
          </HeroPageStyle>
          <Footer />
        </>
      )}
    </>
  );
};
