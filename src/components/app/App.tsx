import React from 'react';
import './App.css';
import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InventoryPage from '../../pages/inventory-page/inventory-page';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/inventory' element={<InventoryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
