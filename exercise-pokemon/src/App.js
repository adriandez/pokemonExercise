import PokemonList from '../src/componets/pages/PokemonList';
import Footer from './componets/Footer'
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <header className="header">
        <h1>Pokemon</h1>
      </header>
      <main className="main wrapper">
        <PokemonList />
        <Footer />
      </main>
    </div>
  );

}

export default App;
