import PokemonList from '../src/componets/pages/PokemonList';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <header className="header">
        <h1>Pokemon</h1>
      </header>
      <main className="main wrapper">
        <PokemonList />
      </main>
      <footer className="footer">
        <p>© AEZG {new Date().getFullYear()}</p>
      </footer>
    </div>
  );

}

export default App;
