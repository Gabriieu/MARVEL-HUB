import { TfiMenu } from "react-icons/tfi";
import { ContainerDesktop, ContainerMobile, HeaderStyle } from "./header.style";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import marvelLogo from "../../assets/marvel-logo.jpg";
import { useNavigate } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

export const Header = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const closeAndNavigate = (endpoint: string) => {
    setDisplayMenu(false);
    navigate(endpoint);
  };

  return (
    <>
      <HeaderStyle>
        <div id="hamb-menu" onClick={() => setDisplayMenu(!displayMenu)}>
          {displayMenu ? (
            <TfiClose size={32} color="white" />
          ) : (
            <TfiMenu size={32} color="white" />
          )}
        </div>
        <ContainerDesktop>
          <nav>
            <ul>
              <li onClick={() => closeAndNavigate("/")}>
                <h1>HOME</h1>
              </li>
              <li onClick={() => closeAndNavigate("/heros")}>
                <h1>HEROS</h1>
              </li>
              <li onClick={() => closeAndNavigate("/comics")}>
                <h1>COMICS</h1>
              </li>
              <li onClick={() => closeAndNavigate("/series")}>
                <h1>SERIES</h1>
              </li>
              <li onClick={() => closeAndNavigate("/stories")}>
                <h1>STORIES</h1>
              </li>
              <li onClick={() => closeAndNavigate("/creators")}>
                <h1>CREATORS</h1>
              </li>
              <li onClick={() => closeAndNavigate("/about")}>
                <h1>ABOUT</h1>
              </li>
            </ul>
          </nav>
        </ContainerDesktop>
        <div>
          <img src={marvelLogo} alt="marvel" />
        </div>
      </HeaderStyle>
      {displayMenu && (
        <ContainerMobile>
          <nav>
            <ul>
              <li onClick={() => closeAndNavigate("/")}>
                <h1>HOME</h1>
                <MdOutlineNavigateNext />
              </li>
              <li onClick={() => closeAndNavigate("/heroes")}>
                <h1>HEROES</h1>
                <MdOutlineNavigateNext />
              </li>
              <li onClick={() => closeAndNavigate("/comics")}>
                <h1>COMICS</h1>
                <MdOutlineNavigateNext />
              </li>
              <li onClick={() => closeAndNavigate("/series")}>
                <h1>SERIES</h1>
                <MdOutlineNavigateNext />
              </li>
              <li onClick={() => closeAndNavigate("/stories")}>
                <h1>STORIES</h1>
                <MdOutlineNavigateNext />
              </li>
              <li onClick={() => closeAndNavigate("/creators")}>
                <h1>CREATORS</h1>
                <MdOutlineNavigateNext />
              </li>
              <li onClick={() => closeAndNavigate("/about")}>
                <h1>ABOUT</h1>
                <MdOutlineNavigateNext />
              </li>
            </ul>
          </nav>
        </ContainerMobile>
      )}
    </>
  );
};
