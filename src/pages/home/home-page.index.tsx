import { useContext, useEffect } from "react";
import { Header } from "../../components/header/header.index";
import { MainContext } from "../../provider/main.provider";
import { toast } from "react-toastify";
import { MainStyle } from "./home-page.style";
import { EventCarousel } from "../../components/event-carousel/event-carousel.index";

export const HomePage = () => {
  const { getEvents, events } = useContext(MainContext);

  useEffect(() => {
    if (events.length == 0) {
      toast.promise(getEvents(), {
        pending: "Loading...",
        error: "Error.",
      });
    }
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
          <EventCarousel events={events}/>
      </MainStyle>
    </>
  );
};
