import './App.css';
import {Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import AddFilm from './components/AddFilm';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/add" element={<AddFilm />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );

  }
export default App;