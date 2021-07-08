import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Form from "../pages/Form";
import PokemonList from "../pages/PokemonList";

import "./Main.scss";

const Main = () => {
  return (
    <main className="Main wrapper">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new" component={Form} />
          <Route path="/search" component={PokemonList} />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
