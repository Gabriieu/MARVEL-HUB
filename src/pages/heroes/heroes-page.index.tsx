import { useContext, useEffect } from "react";
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
import { Footer } from "../../components/footer/footer.index";

export const HeroesPage = () => {
  const {
    getHeroes,
    heroes,
    getHeroesPage,
    perPageHeroes,
    totalHeroes,
    heroesByName,
    getHeroesByName,
    setHeroesByName,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  } = useContext(MainContext);

  const goToFirstPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getHeroesPage(0);
    setCurrentPage(0);
  };

  const goToLastPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getHeroesPage(totalPages - 1);
    setCurrentPage(totalPages - 1);
  };

  const goToNextPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getHeroesPage(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const previousPage = currentPage - 1;
    if (previousPage >= 0) {
      getHeroesPage(previousPage);
      setCurrentPage(previousPage);
    }
  };

  const getHeroByInput = async () => {
    const input = document.getElementById(
      "input-search-bar"
    ) as HTMLInputElement;
    getHeroesByName(input.value);
  };

  const handleInputClear = () => {
    const input = document.getElementById(
      "input-search-bar"
    ) as HTMLInputElement;

    if (input.value.length < 1) {
      setHeroesByName([]);
    }
  };

  useEffect(() => {
    if (heroes.length === 0) {
      toast.promise(getHeroes(), {
        pending: "Gathering characters...",
      });
    }
    const total = Math.ceil(totalHeroes / perPageHeroes);
    setTotalPages(total);
    //window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [heroes, getHeroes, totalHeroes, perPageHeroes, heroesByName]);

  return (
    <>
      <Header />
      <HeroPageStyle>
        <ContainerTopSection>
          <div>
            <h1>MARVEL CHARACTERS</h1>
            <p>
            MARVEL INVITES YOU TO BECOME INVOLVED IN A UNIVERSE FULL OF HEROES AND VILLAINS THAT WILL CAPTIVATE YOU!
            </p>
          </div>
        </ContainerTopSection>
        <ContainerBottomSection>
          <div className="characters-title">
            <h1>CHARACTERS</h1>
            <div id="search-bar">
              <input
                type="text"
                placeholder="Explore Marvel..."
                name=""
                id="input-search-bar"
                onChange={handleInputClear}
                onChangeCapture={getHeroByInput}
              />
            </div>
            {heroesByName.length > 0 && (
              <div id="results-length">
                Results found: {heroesByName.length}
                <h2 onClick={() => setHeroesByName([])}>Clear</h2>
              </div>
            )}
          </div>
          <ul>
            {heroesByName.length > 0
              ? heroesByName.map((hero) => (
                  <HeroCard hero={hero} key={hero.id} />
                ))
              : heroes &&
                heroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)}
          </ul>
          {heroesByName.length === 0 && (
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
          )}
        </ContainerBottomSection>
      </HeroPageStyle>
      <Footer />
    </>
  );
};
