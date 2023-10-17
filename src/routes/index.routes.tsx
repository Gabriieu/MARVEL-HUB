import { Route, Routes } from "react-router-dom";
import { HeroesPage } from "../pages/heroes/heroes-page.index";
import { HomePage } from "../pages/home/home-page.index";
import { ComicsPage } from "../pages/comics/comics-page.index";
import { SeriesPage } from "../pages/series/series-page.index";
import { AboutPage } from "../pages/about/about-page.index";
import { HeroDetailsPage } from "../pages/hero-details/hero-details-page.index";
import { ComicsDetailPage } from "../pages/comics-details/comics-details-page.index";
import { CreatorPage } from "../pages/creators/creators-page.index";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<HeroesPage />} />
      <Route path="/characters/:characterId" element={<HeroDetailsPage />} />
      <Route path="/comics" element={<ComicsPage />} />
      <Route path="/comics/:comicId" element={<ComicsDetailPage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/creator/:creatorId" element={<CreatorPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};
