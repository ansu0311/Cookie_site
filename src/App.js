import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Menupage from "./Pages/Menupage";
import Orderpage from "./Pages/Orderpage";
import Nopage from "./Pages/Nopage";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Productpage from './Pages/Productpage';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route index path='/' element={<Homepage />} />
          <Route path="menupage" element={<Menupage />} />
          <Route path="orderpage" element={<Orderpage />} />
          <Route path="*" element={<Nopage />} />
          <Route path="/product" element ={<Productpage/>}>
            <Route path=":productId" element={<Productpage/>} />
          </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
