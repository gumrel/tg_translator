import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Header from './components/MenuBar/MainHeader';
import Footer from './components/MenuBar/Footer';

function AppWrapper() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            {isHomePage && <Header />}

            <div className="mx-auto mt-20 mb-30 max-w-lg p-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Library" element={<Skills />} />
                    <Route path="/Masterskaya" element={<Contact />} />
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
