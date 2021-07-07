import PokemonList from '../src/componets/pages/PokemonList'
import "./App.scss";

const App = () => {

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        <PokemonList />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );

}

export default App;
