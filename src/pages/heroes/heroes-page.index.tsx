import { useContext, useEffect } from "react";
import { MainContext } from "../../provider/main.provider";
import { HeroCard } from "../../components/hero-card/hero-card.index";
import { Header } from "../../components/header/header.index";

export const HerosPage = () => {
  const { getHeroes, heroes } = useContext(MainContext);

  useEffect(() => {
    //getHeroes()
  }, []);

  return (
    <>
    <Header/>
      <main>
        <ul>
          {heroes.map((hero) => (
            <HeroCard hero={hero} key={hero.id} />
          ))}
        </ul>
      </main>
    </>
  );
};
