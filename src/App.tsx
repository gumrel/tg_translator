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
import SelectLanguage from './pages/SelectLanguage';
import { useHistoryStore } from './services/store/useHistoryStore';
import { useEffect } from 'react';
import { auth } from './api/auth/auth.api';

function AppWrapper() {
    const location = useLocation();
    const noHeaderRoutes = ['/SavedTranslate', '/HistoryTranslate', '/SelectLanguage'];
    const isHomePage = location.pathname === '/';
    const hideHeader = noHeaderRoutes.includes(location.pathname);

    const loadHistoryFromStorage = useHistoryStore((state) => state.loadHistoryFromStorage);

    useEffect(() => {
        const doLogin = async () => {
            try {
                const initData = window.Telegram?.WebApp?.initData;

                if (!initData) {
                    console.error('tg mini app only');
                    return;
                }

                const userData = await auth({ initData });

                console.log(userData.user);
            } catch (error) {
                console.error(error);
            }
        };
        doLogin();
    }, []);

    useEffect(() => {
        loadHistoryFromStorage();
    }, []);

    return (
        <>
            {!hideHeader && (isHomePage ? <Header /> : <MainHeader />)}

            <div className="mx-auto mt-20 mb-30 max-w-lg p-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Library" element={<Library />} />
                    <Route path="/Masterskaya" element={<Masterskaya />} />
                    <Route path="/SavedTranslate" element={<SavedTranslate />} />
                    <Route path="/HistoryTranslate" element={<HistoryTranslate />} />
                    <Route path="/SelectLanguage" element={<SelectLanguage />} />
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
