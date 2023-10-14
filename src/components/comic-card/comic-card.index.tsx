import { iComic } from "../../provider/types/@types-comic";
import { ComicCardStyle } from "./comic-card.style";

interface iComicCardProp {
  comic: iComic;
}
export const ComicCard = ({ comic }: iComicCardProp) => {
  return (
    <ComicCardStyle>
      <div>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt="Comic"
        />
      </div>
      <div>
        <h2>{comic.title}</h2>
      </div>
    </ComicCardStyle>
  );
};
