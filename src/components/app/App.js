import './app.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import MainPage from '../mainPage/MainPage';
import PromoPage from '../promoPage/PromoPage';
import SelectPage from '../selectPage/SelectPage';

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        <PromoPage />
        <SelectPage />
        <MainPage />
      </main>

      <Footer/>
    </div>
  );
}

export default App;
