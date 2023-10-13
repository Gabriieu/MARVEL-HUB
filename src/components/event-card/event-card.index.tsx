import { iEvent } from "../../provider/types/@types-event";
import { EventCardStyle } from "./event-card.style";

interface iEventCardProp {
  event: iEvent;
}
export const EventCard = ({ event }: iEventCardProp) => {
  return (
    <EventCardStyle>
      <div className="event-image">
        <img
          src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
          alt={event.title}
        />
      </div>
      <div className="event-desc">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        {event.urls[0] && (
          <button>
            <a target="_blank" href={event.urls[0].url}>
              Learn more
            </a>
          </button>
        )}
      </div>
    </EventCardStyle>
  );
};
