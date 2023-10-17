import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResetStyle } from "./styles/resetStyles.ts";
import { GlobalStyle } from "./styles/globalStyles.ts";
import { MainProvider } from "./provider/main.provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { CreatorProvider } from "./provider/creator.provider.tsx";
import { CharacterProvider } from "./provider/character.provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <MainProvider>
        <CreatorProvider>
          <CharacterProvider>
            <App />
          </CharacterProvider>
        </CreatorProvider>
      </MainProvider>
    </BrowserRouter>
  </>
);
