import { iEvent } from "../../provider/types/@types-event";
import { useState, useEffect } from "react";
import { EventCard } from "../event-card/event-card.index";
import { EventCarouselStyle, SlideBarsStyle } from "./event-carousel.style";
import { CgLoadbar } from "react-icons/cg";

interface iEventCarouselProp {
  events: iEvent[];
}

export const EventCarousel = ({ events }: iEventCarouselProp) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < events.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index, events]);

  return (
    <EventCarouselStyle>
      <ul>
        {events.length > 0 && (
          <>
            <SlideBarsStyle>
              {index == 0 ? (
                <CgLoadbar color="red" size={32} />
              ) : (
                <CgLoadbar
                  onClick={() => setIndex(0)}
                  color="white"
                  size={32}
                />
              )}
              {index == 1 ? (
                <CgLoadbar color="red" size={32} />
              ) : (
                <CgLoadbar
                  onClick={() => setIndex(1)}
                  color="white"
                  size={32}
                />
              )}
              {index == 2 ? (
                <CgLoadbar color="red" size={32} />
              ) : (
                <CgLoadbar
                  onClick={() => setIndex(2)}
                  color="white"
                  size={32}
                />
              )}
              {index == 3 ? (
                <CgLoadbar color="red" size={32} />
              ) : (
                <CgLoadbar
                  onClick={() => setIndex(3)}
                  color="white"
                  size={32}
                />
              )}
              {index == 4 ? (
                <CgLoadbar color="red" size={32} />
              ) : (
                <CgLoadbar
                  onClick={() => setIndex(4)}
                  color="white"
                  size={32}
                />
              )}
            </SlideBarsStyle>
            <EventCard event={events[index]} key={events[index].id} />
          </>
        )}
      </ul>
    </EventCarouselStyle>
  );
};
