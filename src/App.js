import './App.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Allitem from "./Pages/Allitem";
import Orderpage from "./Pages/Orderpage";
import Nopage from "./Pages/Nopage";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Productpage from './Pages/Productpage';
import ShopContextProvider from "./Context/ShopContext";

function App() {
  return (
    <div className='App'>
    <ShopContextProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route index path='/' element={<Homepage />} />
          <Route path="menupage" element={<Allitem />} />
          <Route path="orderpage" element={<Orderpage />} />
          <Route path="*" element={<Nopage />} />
          <Route path="/product" element ={<Productpage/>}>
            <Route path=":productId" element={<Productpage/>} />
          </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ShopContextProvider>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);

export default App;
