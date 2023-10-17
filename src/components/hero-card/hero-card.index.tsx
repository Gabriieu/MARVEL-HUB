import { useNavigate } from "react-router-dom";
import { iHero } from "../../provider/types/@types-hero";
import { HeroCardStyle } from "./hero-card.style";
import {useContext} from "react"
import { CharacterContext } from "../../provider/character.provider";

interface iHeroCardProp {
  hero: iHero;
}
export const HeroCard = ({ hero }: iHeroCardProp) => {
  const {setCharacter, setCharacterComics, setCharacterSeries} = useContext(CharacterContext)
  const navigate = useNavigate()

  const handleClick = (endpoint: string) =>{
    setCharacter(null)
    setCharacterComics([])
    setCharacterSeries([])
    navigate(endpoint)
  }
  return (
    <HeroCardStyle onClick={() => handleClick(`/characters/${hero.id}`)}>
      <img
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        alt={hero.name}
      />
      <div>
        <h1>{hero.name.toUpperCase()}</h1>
      </div>
    </HeroCardStyle>
  );
};
