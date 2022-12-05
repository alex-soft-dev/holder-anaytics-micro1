import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage';
import Header from './components/layouts/header/Header';
import Sidebar from './components/layouts/sidebar/Sidebar';
import { createContext, useContext } from 'react';
import { Themes } from './utils/Themes';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { Container } from 'react-bootstrap';
import RankingTrendingPage from './pages/rankingtrending/RankingTrendingPage';
import RankingDetailPage from './pages/rankingtrending/RankingDetailPage';
import MintsPage from './pages/mints/MintsPage';
import TradePage from './pages/trade/TradePage';
import FollowingPage from './pages/following/FollowingPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ExtensionPage from './pages/extension/ExtensionPage';

export const ThemeContext = createContext(Themes.Dark);

function App() {

  const HomeLayout = () => {
    return (
      <div className='d-flex flex-row'>
        <Sidebar/>
        <Container fluid className='px-4'>          
          <Outlet/>
        </Container>
      </div>
    )
  }



  return (
    <div className="App">
      <ThemeContext.Provider value={Themes.Dark}>
        <BrowserRouter>
          <Routes>
            <Route element={<HomeLayout/>}>
              <Route path='/' element={<DashboardPage/>}/>
              <Route path='/ranking' element={<RankingTrendingPage/>}/>
              <Route path='/ranking/detail' element={<RankingDetailPage/>}/>
              <Route path='/mints' element={<MintsPage/>}/>
              <Route path='/trade' element={<TradePage/>}/>
              <Route path='/following' element={<FollowingPage/>}/>
              <Route path='/porfolio' element={<PortfolioPage/>}/>
              <Route path='/extension' element={<ExtensionPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
