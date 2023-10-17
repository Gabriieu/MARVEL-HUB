import { useState, useEffect, useContext } from "react";
import { iCreator } from "../../provider/types/@types-creator";
import { hashKey } from "../../services/api/hash";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/header.index";
import { Footer } from "../../components/footer/footer.index";
import { toast } from "react-toastify";
import { CreatorPageStyle } from "./creators-page.style";
import { ComicCard } from "../../components/comic-card/comic-card.index";
import { SerieCard } from "../../components/serie-card/serie-card.index";
import { CreatorContext } from "../../provider/creator.provider";

export const CreatorPage = () => {
  const {
    creator,
    getCreatorInfo,
    creatorComics,
    getCreatorComics,
    creatorSeries,
    getCreatorSeries, setCreator, setCreatorComics, setCreatorSeries
  } = useContext(CreatorContext);
  const { creatorId } = useParams();
  const [loadingComics, setLoadingComics] = useState<boolean>(false);
  const [loadingSeries, setLoadingSeries] = useState<boolean>(false);

  const handleLoadingComics = async () => {
    setLoadingComics(true);
    await getCreatorComics(Number(creatorId));
    setLoadingComics(false);
  };
  const handleLoadingSeries = async () => {
    setLoadingSeries(true);
    await getCreatorSeries(Number(creatorId));
    setLoadingSeries(false);
  };


  useEffect(() => {
    getCreatorInfo(Number(creatorId));
    if(creatorComics.length === 0){
      toast.promise(getCreatorComics(Number(creatorId)), {
        pending: `Getting ${creator?.firstName}'s comics`,
      });
    }
    if(creatorSeries.length ===  0){
      toast.promise(getCreatorSeries(Number(creatorId)), {
        pending: `Getting ${creator?.firstName}'s series`,
      }); 
    }  
  }, []);

  return (
    <>
      <Header />
      <CreatorPageStyle>
        {creator && (
          <>
            <section id="creator-comics">
              <h1 id="title">{creator.fullName.toUpperCase()}: COMICS</h1>
              <ul>
                {creatorComics.map((comic) => (
                  <ComicCard comic={comic} key={comic.id} />
                ))}
              </ul>
              {creatorComics.length < creator.comics.available &&
                (loadingComics ? (
                  <button id="loading" disabled={true}>
                    Loading...
                  </button>
                ) : (
                  <button
                    id="load-more-button"
                    onClick={() => handleLoadingComics()}
                  >
                    Load more
                  </button>
                ))}
            </section>
            <section id="creator-series">
              <h1 id="title">{creator.fullName.toUpperCase()}: SERIES</h1>
              <ul>
                {creatorSeries.map((serie) => (
                  <SerieCard serie={serie} key={serie.id} />
                ))}
              </ul>
              {creatorSeries.length < creator.series.available &&
                (loadingSeries ? (
                  <button id="loading" disabled={true}>
                    Loading...
                  </button>
                ) : (
                  <button
                    id="load-more-button"
                    onClick={() => handleLoadingSeries()}
                  >
                    Load more
                  </button>
                ))}
            </section>
          </>
        )}
      </CreatorPageStyle>
      <Footer />
    </>
  );
};
