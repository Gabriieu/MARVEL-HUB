import { useNavigate } from "react-router-dom";
import { iComic } from "../../provider/types/@types-comic";
import { ComicCardStyle } from "./comic-card.style";

interface iComicCardProp {
  comic: iComic;
}
export const ComicCard = ({ comic }: iComicCardProp) => {
  const navigate = useNavigate()
  return (
    <ComicCardStyle onClick={() => navigate(`/comics/${comic.id}`)}>
      <div>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
      </div>
      <div>
        <h2>{comic.title}</h2>
      </div>
    </ComicCardStyle>
  );
};
