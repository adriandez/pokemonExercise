import Nav from './Nav'
import "./Header.scss";

const Header = () => {
    return (
      <header className="Header">
        <div className="head-div">
            <div className="head-div-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
                alt="pokeball"
              />
            </div>
            <div className="head-div-h1">
              <h1>Pokemon</h1>
            </div>
          <div className="head-div-nav">
            <Nav />
          </div>
        </div>
      </header>
    );
};

export default Header;
