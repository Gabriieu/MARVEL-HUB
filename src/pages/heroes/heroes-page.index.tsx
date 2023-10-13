import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../provider/main.provider";
import { HeroCard } from "../../components/hero-card/hero-card.index";
import { Header } from "../../components/header/header.index";
import { toast } from "react-toastify";
import {
  ContainerBottomSection,
  ContainerTopSection,
  HeroPageStyle,
} from "./heroes-page.style";
import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from "react-icons/ai";

export const HeroesPage = () => {
  const { getHeroes, heroes, getHeroesPage, perPageHeroes, totalHeroes } =
    useContext(MainContext);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0); // Inicializa currentPage como 0

  const goToFirstPage = () => {
    getHeroesPage(0);
    setCurrentPage(0);
  };

  const goToLastPage = () => {
    getHeroesPage(totalPages - 1);
    setCurrentPage(totalPages - 1); // Corrige para atualizar currentPage corretamente
  };

  const goToNextPage = () => {
    // Verifica se a próxima página está dentro dos limites
    getHeroesPage(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 0) {
      // Verifica se a página anterior está dentro dos limites
      getHeroesPage(previousPage);
      setCurrentPage(previousPage);
    }
  };

  useEffect(() => {
    if (heroes.length === 0) {
      toast.promise(getHeroes(), {
        pending: "Obtendo heróis...",
      });
    }
    const total = Math.ceil(totalHeroes / perPageHeroes);
    setTotalPages(total);
  }, [heroes, getHeroes, totalHeroes, perPageHeroes]);

  return (
    <>
      <Header />
      <HeroPageStyle>
        <ContainerTopSection>
          <div>
            <h1>MARVEL CHARACTERS</h1>
            <p>
              Marvel invites you to become involved in a universe full of heroes
              and villains that will captivate you!
            </p>
          </div>
        </ContainerTopSection>
        <ContainerBottomSection>
          <div>
            <h1 onClick={() => getHeroesPage(0)}>CHARACTERS</h1>
          </div>
          <ul>
            {heroes &&
              heroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)}
          </ul>
          <div>
            <div>
              <AiOutlineDoubleLeft onClick={goToFirstPage} size={32} />
              <AiOutlineLeft onClick={goToPreviousPage} size={32} />
              <AiOutlineRight onClick={goToNextPage} size={32} />
              <AiOutlineDoubleRight onClick={goToLastPage} size={32} />
            </div>
            <div>
              <h1>
                {currentPage + 1} of {totalPages}
              </h1>
            </div>
          </div>
        </ContainerBottomSection>
      </HeroPageStyle>
    </>
  );
};
