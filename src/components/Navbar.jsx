import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Rice', path: '/category/rice' },
    { name: 'Wheat', path: '/category/wheat' },
    { name: 'Dairy', path: '/category/dairy' },
    { name: 'Fish', path: '/category/fish' },
    { name: 'General', path: '/category/general' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-brand-600 tracking-tight">
            FA24-BAI-018-Mart
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {links.map(link => (
              <Link key={link.name} to={link.path} className="text-gray-600 hover:text-brand-600 transition-colors text-sm font-medium">
                {link.name}
              </Link>
            ))}
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-brand-600 transition">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1">
          {links.map(link => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
              {link.name}
            </Link>
          ))}
          <Link to="/cart" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-600 hover:bg-gray-50 rounded-md">
            Cart ({cartCount} items)
          </Link>
        </div>
      )}
    </nav>
  );
}