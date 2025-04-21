import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Model from '../src/components/Model';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Works from './pages/works';

function App() {
    return (
        <>
            <Router>
                <Header />

                <div className="mx-auto mt-20 mb-10 max-w-lg">
                    <Model />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Skills" element={<Skills />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="Works" element={<Works />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
