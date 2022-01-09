import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { Container } from '@material-ui/core';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navbar';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} exact />
            <Route path="/series" element={<Series />} exact />
            <Route path='/search' element={<Search />} exact />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
