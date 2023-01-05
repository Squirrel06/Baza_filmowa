import './App.css';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import AddFilm from './components/AddFilm';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/signin' element={<Login/>}/>
                    <Route path='/add' element={<AddFilm/>}/>
                    <Route path='/details/:id' element={<AddFilm />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );

  }
export default App;