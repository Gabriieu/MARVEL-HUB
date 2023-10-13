import { iHero } from "../../provider/types/@types-hero";
import { HeroCardStyle } from "./hero-card.style";

interface iHeroCardProp {
  hero: iHero;
}
export const HeroCard = ({ hero }: iHeroCardProp) => {
  return (
    <HeroCardStyle>
      <img
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        alt={hero.name}
      />
      <div>
        <h1>{hero.name}</h1>
      </div>
    </HeroCardStyle>
  );
};
