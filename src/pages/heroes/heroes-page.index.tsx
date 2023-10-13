import { useContext, useEffect } from "react";
import { MainContext } from "../../provider/main.provider";
import { HeroCard } from "../../components/hero-card/hero-card.index";
import { Header } from "../../components/header/header.index";
import { toast } from "react-toastify";

export const HeroesPage = () => {
  const { getHeroes, heroes } = useContext(MainContext);

  useEffect(() => {
    if (heroes.length == 0) {
      toast.promise(getHeroes(), {
        pending: "Obtendo heróis...",
        error: "Falha ao obter heróis"
      });
    }
  }, []);


  return (
    <>
      <Header />
      <main>
        <ul>
          {heroes ? (
            heroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </ul>
      </main>
    </>
  );
};
