import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/footer/footer.index";
import { Header } from "../../components/header/header.index";
import {
  ComicsPageStyle,
  NewestComicsStyle,
  SearchForComic,
} from "./comics-page.style";
import { MainContext } from "../../provider/main.provider";
import { ComicCard } from "../../components/comic-card/comic-card.index";
import { iComic } from "../../provider/types/@types-comic";
import { api } from "../../services/api/api";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { hashKey } from "../../services/api/hash";

export const ComicsPage = () => {
  const hash = hashKey()
  const { newestComics, getNewestComics } = useContext(MainContext);
  const [searchComicList, setSearchComicList] = useState<iComic[] | []>([])

  const getComicByName = async (comicName: string) => {
    if(comicName.length > 3){
      try {
        const response = await api.get(`/comics?title=${comicName}&limit=100${hash}`)
        setSearchComicList(response.data.data.results)
      } catch (error: any | AxiosError) {
        if (axios.isAxiosError(error)) {
          toast.error(error.message);
        } else {
          console.log(error);
        }
      }
    }
  };


  const getDate = () => {
    const today = new Date();
    const sixMonthBefore = new Date();
    sixMonthBefore.setMonth(today.getMonth() - 6);
    const hojeFormatada = today.toISOString().split("T")[0];
    const sixMonthBeforeFormat = sixMonthBefore.toISOString().split("T")[0];

    return { today: hojeFormatada, sixMonthBefore: sixMonthBeforeFormat };
  }


  useEffect(() => {
    getNewestComics(getDate());
  }, []);
  return (
    <>
      <Header />
      <ComicsPageStyle>
        {newestComics.length > 0 && (
          <>
            <NewestComicsStyle>
              <h1>LAST RELEASES</h1>
              <ul>
                {newestComics.map((comic) => (
                  <ComicCard comic={comic} key={comic.id} />
                ))}
              </ul>
            </NewestComicsStyle>
            <SearchForComic>
              <div id="search-bar">
                <h1>LOOKING FOR A SPECIFIC COMIC?</h1>
                <input type="text" placeholder="search here" onChange={(event) => getComicByName(event.target.value)}/>
              </div>
              <div>
                <ul>
                  {
                    searchComicList.length > 0 && (
                      searchComicList.map(comic => <ComicCard comic={comic} key={comic.id}/>)
                    )
                  }
                </ul>
              </div>
            </SearchForComic>
          </>
        )}
      </ComicsPageStyle>
      <Footer />
    </>
  );
};
