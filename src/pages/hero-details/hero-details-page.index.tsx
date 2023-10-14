import { Header } from "../../components/header/header.index";
import { Footer } from "../../components/footer/footer.index";
import { HeroPageStyle } from "../heroes/heroes-page.style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api/api";
import { hashKey } from "../../services/api/hash";
import { iHero } from "../../provider/types/@types-hero";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { HeroDetailsSectionPageStyle } from "./hero-details-page.style";

export const HeroDetailsPage = () => {
  const hash = hashKey();
  const [character, setCharacter] = useState<iHero | null>(null);
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

  useEffect(() => {
    getHeroById(Number(characterId));
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
                      Sorry, the requested character does not have a
                      description.
                    </p>
                  )}
                </div>
              </div>
            </HeroDetailsSectionPageStyle>
          </HeroPageStyle>
          <Footer />
        </>
      )}
    </>
  );
};
