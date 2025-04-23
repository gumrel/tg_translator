import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Library from './pages/Library';
import Masterskaya from './pages/Masterskaya';
import Header from './components/MenuBar/Header';
import Footer from './components/MenuBar/Footer';
import SavedTranslate from './pages/SavedTranslate';
import HistoryTranslate from './pages/HistoryTranslate';
import MainHeader from './components/MenuBar/MainHeader';

function AppWrapper() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            {isHomePage ? <Header /> : <MainHeader />}

            <div className="mx-auto mt-20 mb-30 max-w-lg p-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Library" element={<Library />} />
                    <Route path="/Masterskaya" element={<Masterskaya />} />
                    <Route path="/SavedTranslate" element={<SavedTranslate />} />
                    <Route path="/HistoryTranslate" element={<HistoryTranslate />} />
                </Routes>
            </div>

            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <AppWrapper />
        </Router>
    );
}

export default App;
