import './header.scss';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          <li className="header__item"><a href="#" className="header__link header__link--active">Start page</a></li>
          <li className="header__item"><a href="#" className="header__link">Select a city</a></li>
          <li className="header__item"><a href="#" className="header__link">News & Weather</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
