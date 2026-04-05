import { useState } from 'react';
import { Search, MapPin, Clock, Star, TrendingUp } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Pizza', emoji: '🍕' },
  { id: 2, name: 'Burger', emoji: '🍔' },
  { id: 3, name: 'Healthy', emoji: '🥗' },
  { id: 4, name: 'Sushi', emoji: '🍣' },
];

const allRestaurants = [
  { id: 1, name: 'Tomato Pizzeria', categories: [1], rating: 4.8, time: '20-30 min', price: '₹₹', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80' },
  { id: 2, name: 'Green Bowl', categories: [3], rating: 4.5, time: '15-25 min', price: '₹₹₹', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80' },
  { id: 3, name: 'Burger Joint', categories: [2], rating: 4.6, time: '10-20 min', price: '₹', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
  { id: 4, name: 'Sushi Zen', categories: [4], rating: 4.9, time: '30-45 min', price: '₹₹₹₹', img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&q=80' },
];

const Home = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<number>(1);
  const featured = allRestaurants.filter(r => r.categories.includes(activeCategory));

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--color-background)', position: 'relative' }} className="fade-in">
      {/* Header */}
      <div style={{ padding: 'var(--space-5)', backgroundColor: 'white', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', paddingBottom: '30px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
              <MapPin size={14} color="var(--color-primary)"/> Delivering to
            </p>
            <h3 style={{ fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              Home - 123 Main St <span style={{ fontSize: '10px' }}>▼</span>
            </h3>
          </div>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-background)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Search */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: 'var(--color-background)', 
          padding: '14px 16px', 
          borderRadius: 'var(--radius-md)',
          gap: '12px',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
        }}>
          <Search size={20} color="var(--color-text-light)" />
          <input 
            type="text" 
            placeholder="What are you craving?" 
            style={{ border: 'none', background: 'transparent', flex: 1, fontSize: '15px' }} 
          />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-4)', paddingBottom: '90px' }} className="hide-scrollbar">
        
        {/* Categories */}
        <h2 style={{ fontSize: '18px', marginBottom: '16px', marginTop: '4px' }}>Categories</h2>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '12px' }} className="hide-scrollbar">
          {categories.map(cat => (
            <div key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px', cursor: 'pointer', transition: 'transform 0.2s', opacity: activeCategory === cat.id ? 1 : 0.6 }}>
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '20px', 
                backgroundColor: activeCategory === cat.id ? 'var(--color-primary)' : 'white',
                color: activeCategory === cat.id ? 'white' : 'inherit',
                display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '28px',
                boxShadow: 'var(--shadow-sm)', marginBottom: '10px'
              }}>
                {cat.emoji}
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>{cat.name}</span>
            </div>
          ))}
        </div>

        {/* AI Recommendations */}
        <div style={{ 
          marginTop: '20px', 
          background: 'var(--color-primary-gradient)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '24px', 
          color: 'white', 
          position: 'relative', 
          overflow: 'hidden',
          boxShadow: 'var(--shadow-primary)'
        }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ 
              fontSize: '11px', fontWeight: 700, padding: '4px 10px', 
              backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 'var(--radius-full)', 
              display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '12px',
              textTransform: 'uppercase', letterSpacing: '0.5px'
            }}>
              <TrendingUp size={12} /> AI Pick For You
            </span>
            <h3 style={{ fontSize: '24px', marginBottom: '6px', fontWeight: 700, lineHeight: 1.1 }}>Spicy Pepperoni</h3>
            <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '20px' }}>Based on your love for Pizza</p>
            <button style={{ 
              backgroundColor: 'white', color: 'var(--color-primary)', padding: '10px 20px', 
              borderRadius: 'var(--radius-full)', fontSize: '14px', fontWeight: 700,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              Order Now
            </button>
          </div>
          <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', fontSize: '140px', opacity: 0.2, zIndex: 1, transform: 'rotate(-15deg)' }}>🍕</div>
        </div>

        {/* Featured */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px' }}>Featured Restaurants</h2>
          <span style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>See All</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {featured.length > 0 ? featured.map(rest => (
            <div key={rest.id} onClick={() => navigate(`/restaurant/${rest.id}`)} style={{ 
              backgroundColor: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', 
              boxShadow: 'var(--shadow-sm)', cursor: 'pointer',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{ height: '160px', backgroundImage: `url(${rest.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'white', padding: '4px 8px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, boxShadow: 'var(--shadow-sm)' }}>
                  <Star size={12} color="var(--color-warning)" fill="var(--color-warning)" /> {rest.rating}
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600 }}>{rest.name}</h3>
                </div>
                <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-light)', fontSize: '13px', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {rest.time}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>•</span>
                  <span>{rest.price}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>•</span>
                  <span style={{ color: 'var(--color-success)' }}>Free Delivery</span>
                </div>
              </div>
            </div>
          )) : (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-light)', backgroundColor: 'white', borderRadius: 'var(--radius-md)' }}>
              No featured {categories.find(c => c.id === activeCategory)?.name} restaurants available nearby yet.
            </div>
          )}
        </div>

      </div>

      <BottomNavigation />
    </div>
  );
};

export default Home;
