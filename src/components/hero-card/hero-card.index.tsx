import { useNavigate } from "react-router-dom";
import { iHero } from "../../provider/types/@types-hero";
import { HeroCardStyle } from "./hero-card.style";

interface iHeroCardProp {
  hero: iHero;
}
export const HeroCard = ({ hero }: iHeroCardProp) => {
  const navigate = useNavigate()

  return (
    <HeroCardStyle onClick={() => navigate(`/characters/${hero.id}`)}>
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
