import { iSerie } from "../../provider/types/@types-series"
import { SerieCardStyle } from "./serie-card.style"

interface iSerieCardProp {
    serie: iSerie
}
export const SerieCard = ({serie}: iSerieCardProp) => {
    return (
        <SerieCardStyle>
            <div>
                <img src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} alt={serie.title} />
            </div>
            <div>
                <h2>{serie.title}</h2>
            </div>
        </SerieCardStyle>
    )
}