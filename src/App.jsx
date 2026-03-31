import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              {/* Product detail would go here: <Route path="/product/:id" element={<ProductDetail />} /> */}
            </Routes>
          </main>
          
          <footer className="bg-white border-t border-gray-200 mt-12 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} FA24-BAI-018-Shopping Mart. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;