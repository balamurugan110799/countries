import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Country from './pages/country';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Country/>} />
          <Route path="/:userId" element={<Country/>} />
          </Routes>
    </div>
  );
}

export default App;
