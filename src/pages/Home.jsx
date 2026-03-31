import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Sprout, ShieldCheck, Headphones } from 'lucide-react';
import { products } from '../data/product';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  const features = [
    { icon: <Truck size={32} className="text-brand-500" />, title: 'Free Delivery', desc: 'On all orders over $50' },
    { icon: <Sprout size={32} className="text-brand-500" />, title: 'Farm Fresh', desc: 'Sourced directly from farmers' },
    { icon: <ShieldCheck size={32} className="text-brand-500" />, title: 'Secure Payment', desc: '100% safe & encrypted' },
    { icon: <Headphones size={32} className="text-brand-500" />, title: '24/7 Support', desc: 'Always here to help you' },
  ];

  const categories = [
    { name: 'Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', path: '/category/rice' },
    { name: 'Dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80', path: '/category/dairy' },
    { name: 'Fish', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80', path: '/category/fish' },
  ];

  // Animation variants for staggered scrolling effects
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }}>
      
      {/* 1. Hero Section */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-start">
          <motion.span 
            variants={fadeUp}
            className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-50 text-sm font-semibold mb-6 border border-brand-500/30"
          >
            100% Organic & Fresh
          </motion.span>
          <motion.h1 
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl leading-tight"
          >
            Premium groceries delivered to your doorstep.
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="text-lg text-brand-50 mb-10 max-w-xl"
          >
            Experience the finest quality Rice, Wheat, Dairy, Fish, and daily essentials. Sourced directly from trusted farms and waters.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/category/general" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-brand-500/30">
              Start Shopping <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Value Proposition (Features) */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
                }}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <div className="bg-brand-50 p-4 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold text-gray-900">
            Shop by Category
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-gray-500 mt-3">
            Browse our curated selection of high-quality departments.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={category.name}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.5 } }
              }}
            >
              <Link to={category.path} className="group relative block h-64 rounded-3xl overflow-hidden shadow-sm">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Featured Products (Existing but wrapped in scroll animation) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold text-gray-900">
                Trending Right Now
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-gray-500 mt-2">
                Hand-picked fresh arrivals just for you.
              </motion.p>
            </div>
            <Link to="/category/general" className="hidden sm:flex text-brand-600 font-medium hover:text-brand-700 items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Newsletter / CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-brand-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-xl"
        >
          {/* Decorative background circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get 20% Off Your First Order</h2>
            <p className="text-brand-50/80 mb-8 text-lg">
              Subscribe to our newsletter and receive exclusive farm-fresh deals, weekly recipes, and special discounts.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
              <button 
                type="submit" 
                className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </section>

    </motion.div>
  );
}