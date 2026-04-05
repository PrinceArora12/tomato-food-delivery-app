import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import FoodItem from './screens/FoodItem';
import Cart from './screens/Cart';
import Tracking from './screens/Tracking';
import Profile from './screens/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/item/:id" element={<FoodItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
