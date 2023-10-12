import { iHero } from "../../provider/types/@types-hero";
import { HeroCardStyle } from "./hero-card.style";

interface iHeroCardProp {
    hero: iHero
}
export const HeroCard = ({hero}: iHeroCardProp) => {
  return (
    <HeroCardStyle>
        <h1>{hero.name}</h1>
        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
    </HeroCardStyle>
  );
};
