import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
      
      <div className="p-5">
        <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            className="bg-gray-900 text-white p-2.5 rounded-full hover:bg-brand-600 transition-colors shadow-sm"
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}