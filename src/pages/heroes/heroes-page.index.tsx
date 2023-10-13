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
import { BsSearch } from "react-icons/bs";
import { Footer } from "../../components/footer/footer.index";

export const HeroesPage = () => {
  const { getHeroes, heroes, getHeroesPage, perPageHeroes, totalHeroes } =
    useContext(MainContext);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const goToFirstPage = () => {
    getHeroesPage(0);
    setCurrentPage(0);
  };

  const goToLastPage = () => {
    getHeroesPage(totalPages - 1);
    setCurrentPage(totalPages - 1);
  };

  const goToNextPage = () => {
    getHeroesPage(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 0) {
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
          <div className="characters-title">
            <h1>CHARACTERS</h1>

            <div id="search-bar">
              <div>
                <BsSearch />
              </div>
              <input type="text" placeholder="SEARCH" name="" id="" />
            </div>
          </div>
          <ul>
            {heroes &&
              heroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)}
          </ul>
          <div className="pagination">
            <div>
              {currentPage !== 0 ? (
                <AiOutlineDoubleLeft
                  onClick={goToFirstPage}
                  size={32}
                  color="white"
                />
              ) : (
                <AiOutlineDoubleLeft size={32} color="grey" />
              )}
              {currentPage > 0 ? (
                <AiOutlineLeft
                  onClick={goToPreviousPage}
                  size={32}
                  color="white"
                />
              ) : (
                <AiOutlineLeft size={32} color="grey" />
              )}
              {currentPage < totalPages - 1 ? (
                <AiOutlineRight
                  onClick={goToNextPage}
                  size={32}
                  color="white"
                />
              ) : (
                <AiOutlineRight size={32} color="grey" />
              )}
              {currentPage !== totalPages - 1 ? (
                <AiOutlineDoubleRight
                  onClick={goToLastPage}
                  size={32}
                  color="white"
                />
              ) : (
                <AiOutlineDoubleRight size={32} color="grey" />
              )}
            </div>
            <div>
              <h1>
                {currentPage + 1} of {totalPages}
              </h1>
            </div>
          </div>
        </ContainerBottomSection>
      </HeroPageStyle>
      <Footer />
    </>
  );
};
