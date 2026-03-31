import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/product';
import ProductCard from '../components/ProductCard';

// Dynamic data to make each category page feel totally unique
const categoryData = {
  rice: {
    bgImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1920&q=80",
    title: "Artisanal Rice Collection",
    subtitle: "From fragrant Jasmines to rich Arborios. Discover 16 unique grains from around the globe."
  },
  wheat: {
    bgImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1920&q=80",
    title: "Golden Wheat & Grains",
    subtitle: "Stone-ground, organic, and harvested at the peak of perfection."
  },
  dairy: {
    bgImage: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1920&q=80",
    title: "Farm Fresh Dairy",
    subtitle: "Locally sourced milks, artisan cheeses, and creamy essentials."
  },
  fish: {
    bgImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1920&q=80",
    title: "Wild Caught Seafood",
    subtitle: "Ocean-fresh catches delivered directly to your kitchen."
  },
  general: {
    bgImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80",
    title: "Pantry Essentials",
    subtitle: "Everything you need to complete your culinary masterpieces."
  }
};

export default function CategoryPage() {
  const { categoryName } = useParams();
  
  // Filter products
  const categoryProducts = products.filter(
    p => p.category.toLowerCase() === (categoryName || '').toLowerCase()
  );

  // Fallback data if category isn't defined in our object
  const headerData = categoryData[categoryName?.toLowerCase()] || {
    bgImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80",
    title: `${categoryName} Products`,
    subtitle: `Browse our premium selection of ${categoryName}.`
  };

  // --- Framer Motion Animation Variants ---
  
  // Controls the staggering of the grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each card delays by 0.1s creating a wave effect
      }
    }
  };

  // Controls the animation of individual product cards
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Dynamic Hero Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-16">
        {/* Background Image with Parallax-esque slight scale */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={headerData.bgImage} 
            alt={headerData.title}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight capitalize drop-shadow-lg"
          >
            {headerData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-200 font-medium drop-shadow-md"
          >
            {headerData.subtitle}
          </motion.p>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="mt-6 inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-semibold tracking-wider uppercase"
          >
            {categoryProducts.length} items found
          </motion.div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categoryProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100"
          >
            <p className="text-gray-500 text-xl font-medium">No products found in this category yet.</p>
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {categoryProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}