import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import Menupage from "./Pages/menupage";
import Orderpage from "./Pages/orderpage";
import Nopage from "./Pages/nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path='/' element={<Homepage />} />
          <Route path="menupage" element={<Menupage />} />
          <Route path="orderpage" element={<Orderpage />} />
          <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
