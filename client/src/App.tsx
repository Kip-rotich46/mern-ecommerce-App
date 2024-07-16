import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Auth from './pages/auth/Auth';
import PurchasedItems from './pages/purchasedItems/PurchasedItems';
import Checkout from './pages/checkout/Checkout';
import Shop from './pages/shop/Shop';
import Navbar from './components/Navbar/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/auth" element={ <Auth />}  />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/purchased-items" element={<PurchasedItems />}  />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
