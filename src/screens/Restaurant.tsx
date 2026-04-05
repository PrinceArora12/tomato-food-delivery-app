import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Star, Clock, Info, Heart } from 'lucide-react';

const allRestaurantMenus = [
  {
    id: 1, // Tomato Pizzeria
    name: 'Tomato Pizzeria',
    img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80',
    menu: [
      { id: 1, name: 'Margherita Pizza', category: 'Pizzas', price: '₹12.99', desc: 'Classic cheese and tomato', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&q=80' },
      { id: 2, name: 'Pepperoni Pizza', category: 'Pizzas', price: '₹14.99', desc: 'Double pepperoni, extra cheese', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&q=80' },
      { id: 3, name: 'Garlic Bread', category: 'Sides', price: '₹5.99', desc: 'Fresh baked with garlic butter', img: '/garlic_bread.png' },
      { id: 4, name: 'Cola', category: 'Drinks', price: '₹2.99', desc: 'Ice cold soda', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&q=80' },
      { id: 5, name: 'Chocolate Cake', category: 'Desserts', price: '₹6.99', desc: 'Rich chocolate fudge cake', img: 'https://images.unsplash.com/photo-1578985545062-69928b1ea381?w=200&q=80' }
    ]
  },
  {
    id: 3, // Burger Joint
    name: 'Burger Joint',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    menu: [
      { id: 6, name: 'Classic Burger', category: 'Burgers', price: '₹8.99', desc: 'Beef patty with lettuce and tomato', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80' },
      { id: 7, name: 'Cheeseburger', category: 'Burgers', price: '₹9.99', desc: 'With double cheddar cheese', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&q=80' },
      { id: 8, name: 'French Fries', category: 'Sides', price: '₹4.99', desc: 'Crispy golden potato fries', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=200&q=80' }
    ]
  },
  {
    id: 4, // Sushi Zen
    name: 'Sushi Zen',
    img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80',
    menu: [
      { id: 9, name: 'Spicy Tuna Roll', category: 'Sushi', price: '₹14.99', desc: 'Fresh tuna with spicy mayo', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=200&q=80' },
      { id: 10, name: 'Salmon Sashimi', category: 'Sushi', price: '₹18.99', desc: '5 pieces of fresh raw salmon', img: 'https://images.unsplash.com/photo-1534482421-64566f103b44?w=200&q=80' }
    ]
  },
  {
    id: 2, // Green Bowl
    name: 'Green Bowl',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    menu: [
      { id: 11, name: 'Caesar Salad', category: 'Salads', price: '₹10.99', desc: 'Romaine lettuce, croutons, parmesan', img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=200&q=80' },
      { id: 12, name: 'Quinoa Bowl', category: 'Salads', price: '₹12.99', desc: 'Healthy bowl with quinoa and avocado', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80' }
    ]
  }
];

const Restaurant = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeFilter, setActiveFilter] = useState('Popular');

  const restaurant = allRestaurantMenus.find(r => r.id === Number(id)) || allRestaurantMenus[0];
  
  // Extract unique categories from the restaurant's menu
  const menuCategories = ['Popular', ...Array.from(new Set(restaurant.menu.map(item => item.category)))];

  const displayMenu = activeFilter === 'Popular' 
    ? restaurant.menu 
    : restaurant.menu.filter(m => m.category === activeFilter);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--color-surface)' }} className="slide-up">
      {/* Header Image */}
      <div style={{ position: 'relative', height: '220px', backgroundImage: `url(${restaurant.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: 'var(--space-4)', display: 'flex', justifyContent: 'space-between', paddingTop: 'max(var(--space-4), env(safe-area-inset-top))', background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)' }}>
          <button onClick={() => navigate(-1)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ChevronLeft size={24} />
          </button>
          <button style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Heart size={20} color="var(--color-primary)" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: 'var(--space-5)', backgroundColor: 'white', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', marginTop: '-24px', position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>{restaurant.name}</h1>
        
        <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-light)', fontSize: '14px', marginBottom: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text)' }}><Star size={16} color="var(--color-warning)" fill="var(--color-warning)" /> <span style={{fontWeight:600}}>4.8</span> (1.2k+ reviews)</span>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: 'var(--color-text)', paddingBottom: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} color="var(--color-primary)" /> 20-30 min</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Info size={16} color="var(--color-primary)" /> More info</span>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', overflowX: 'auto', paddingBottom: '8px' }} className="hide-scrollbar">
          {menuCategories.map((filter) => (
            <div key={filter} onClick={() => setActiveFilter(filter)} style={{ 
              padding: '8px 16px', 
              backgroundColor: activeFilter === filter ? 'var(--color-primary)' : 'var(--color-background)',
              color: activeFilter === filter ? 'white' : 'var(--color-text)',
              borderRadius: 'var(--radius-full)',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}>
              {filter}
            </div>
          ))}
        </div>
      </div>

      {/* Menu List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 var(--space-5)', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
          {displayMenu.map((item) => (
            <div key={item.id} onClick={() => navigate(`/item/${item.id}`)} style={{ display: 'flex', gap: '16px', cursor: 'pointer', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>{item.name}</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-light)', marginBottom: '8px' }}>{item.desc}</p>
                <span style={{ fontSize: '15px', fontWeight: 600 }}>{item.price}</span>
              </div>
              <div style={{ width: '100px', height: '100px', borderRadius: '16px', backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-sm)' }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
