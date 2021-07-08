import { BrowserRouter } from "react-router-dom";
import { PokeProvider } from "../src/context/PokeContext";

import Header from "./componets/Header";
import Main from "./componets/Main";
import Footer from "./componets/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <PokeProvider>
          <Header />
          <Main />
          <Footer />
        </PokeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
