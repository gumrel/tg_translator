import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/MenuBar/Header';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/MenuBar/Footer';

function App() {
    return (
        <>
            <Router>
                <Header />

                <div className="mx-auto mt-20 mb-10 max-w-lg p-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Library" element={<Skills />} />
                        <Route path="/Masterskaya" element={<Contact />} />
                    </Routes>
                </div>

                <Footer />
            </Router>
        </>
    );
}

export default App;
