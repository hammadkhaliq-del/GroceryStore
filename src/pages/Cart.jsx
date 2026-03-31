import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="bg-white p-12 rounded-[2rem] shadow-sm max-w-lg w-full text-center border border-gray-100"
        >
          <motion.div 
            initial={{ y: -20 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-500"
          >
            <ShoppingBag size={48} strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Your cart is empty</h2>
          <p className="text-gray-500 mb-10 text-lg">Looks like you haven't added any premium groceries to your cart yet.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-600 transition-colors shadow-lg shadow-gray-200 hover:shadow-brand-200">
            Start Shopping <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Shopping Cart</h1>
          <span className="text-lg font-medium text-gray-500">{cart.length} {cart.length === 1 ? 'Item' : 'Items'}</span>
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 items-center hover:border-brand-200 transition-colors group"
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-2xl bg-gray-50" />
                  
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-xs text-brand-600 font-bold uppercase tracking-wider mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-2xl font-black text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-gray-400 mt-1">${item.price.toFixed(2)} each</p>
                  </div>
                  
                  <div className="flex items-center gap-6 mt-4 sm:mt-0">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-full p-1.5 border border-gray-200">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-2 text-gray-500 hover:text-gray-900 hover:bg-white rounded-full transition-all shadow-sm"><Minus size={16} /></button>
                      <span className="font-bold w-6 text-center text-lg">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-2 text-gray-500 hover:text-gray-900 hover:bg-white rounded-full transition-all shadow-sm"><Plus size={16} /></button>
                    </div>
                    
                    <button onClick={() => removeFromCart(item.id)} className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors opacity-100 sm:opacity-0 group-hover:opacity-100">
                      <Trash2 size={24} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Sticky Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0 sticky top-24">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100"
            >
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Order Summary</h2>
              
              <div className="space-y-4 text-gray-600 mb-8">
                <div className="flex justify-between text-lg"><p>Subtotal</p><p className="font-medium text-gray-900">${cartTotal.toFixed(2)}</p></div>
                <div className="flex justify-between text-lg"><p>Shipping Estimate</p><p className="font-medium text-brand-600">Free</p></div>
                <div className="flex justify-between text-lg"><p>Estimated Tax</p><p className="font-medium text-gray-900">${(cartTotal * 0.1).toFixed(2)}</p></div>
              </div>
              
              <div className="pt-6 border-t border-gray-100 mb-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total</p>
                    <p className="text-3xl font-black text-gray-900">${(cartTotal * 1.1).toFixed(2)}</p>
                  </div>
                  <p className="text-sm text-gray-400">USD</p>
                </div>
              </div>

              <button className="w-full bg-brand-600 text-white py-4 rounded-full text-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 flex items-center justify-center gap-2">
                Checkout Securely <ArrowRight size={20} />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={16} className="text-brand-500" />
                <span>Secure SSL Encrypted Checkout</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}