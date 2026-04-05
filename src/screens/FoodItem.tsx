import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Minus, Plus } from 'lucide-react';

const menuData = [
  // Tomato Pizzeria
  { id: 1, name: 'Margherita Pizza', basePrice: 12.99, desc: 'Classic cheese and tomato', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80' },
  { id: 2, name: 'Pepperoni Pizza', basePrice: 14.99, desc: 'Classic tomato sauce, fresh mozzarella cheese, and double pepperoni, baked to perfection in our wood-fired oven.', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80' },
  { id: 3, name: 'Garlic Bread', basePrice: 5.99, desc: 'Fresh baked with garlic butter', img: '/garlic_bread.png' },
  { id: 4, name: 'Cola', basePrice: 2.99, desc: 'Ice cold soda', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80' },
  { id: 5, name: 'Chocolate Cake', basePrice: 6.99, desc: 'Rich chocolate fudge cake', img: 'https://images.unsplash.com/photo-1578985545062-69928b1ea381?w=600&q=80' },
  
  // Burger Joint
  { id: 6, name: 'Classic Burger', basePrice: 8.99, desc: 'Beef patty with lettuce and tomato', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80' },
  { id: 7, name: 'Cheeseburger', basePrice: 9.99, desc: 'With double cheddar cheese', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80' },
  { id: 8, name: 'French Fries', basePrice: 4.99, desc: 'Crispy golden potato fries', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80' },
  
  // Sushi Zen
  { id: 9, name: 'Spicy Tuna Roll', basePrice: 14.99, desc: 'Fresh tuna with spicy mayo', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80' },
  { id: 10, name: 'Salmon Sashimi', basePrice: 18.99, desc: '5 pieces of fresh raw salmon', img: 'https://images.unsplash.com/photo-1534482421-64566f103b44?w=600&q=80' },
  
  // Green Bowl
  { id: 11, name: 'Caesar Salad', basePrice: 10.99, desc: 'Romaine lettuce, croutons, parmesan', img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80' },
  { id: 12, name: 'Quinoa Bowl', basePrice: 12.99, desc: 'Healthy bowl with quinoa and avocado', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80' }
];

const FoodItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Medium');

  const item = menuData.find(m => m.id === Number(id)) || menuData[1];

  let priceMultiplier = 1;
  if (size === 'Small') priceMultiplier = 0.8;
  if (size === 'Large') priceMultiplier = 1.2;

  const currentPrice = item.basePrice * priceMultiplier;
  const totalPrice = currentPrice * quantity;

  const handleAddToCart = () => {
    navigate('/cart', {
      state: {
        id: item.id,
        name: item.name,
        size,
        quantity,
        price: currentPrice,
        img: item.img
      }
    });
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--color-surface)' }} className="slide-up">
      {/* Header */}
      <div style={{ position: 'relative', height: '300px', backgroundColor: '#F8F8F8', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: 'var(--space-4)', display: 'flex', justifyContent: 'space-between', zIndex: 10 }}>
          <button onClick={() => navigate(-1)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <ChevronLeft size={24} />
          </button>
        </div>
        <img src={item.img} alt={item.name} style={{ width: '80%', height: '80%', objectFit: 'contain', animation: 'fadeIn 0.5s ease' }} />
      </div>

      <div style={{ flex: 1, padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', position: 'relative', marginTop: '-20px', backgroundColor: 'white', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h1 style={{ fontSize: '24px' }}>{item.name}</h1>
        </div>
        <p style={{ fontSize: '14px', color: 'var(--color-text-light)', marginBottom: '24px', lineHeight: 1.6 }}>
          {item.desc}
        </p>

        {/* Customization */}
        <h3 style={{ fontSize: '16px', marginBottom: '16px' }}>Size</h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
          {['Small', 'Medium', 'Large'].map(s => (
            <button 
              key={s}
              onClick={() => setSize(s)}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                border: `2px solid ${size === s ? 'var(--color-primary)' : 'var(--color-border)'}`,
                backgroundColor: size === s ? 'var(--color-primary-light)' : 'white',
                color: size === s ? 'white' : 'var(--color-text)',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.2s ease'
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Quantity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: 'auto' }}>
          <h3 style={{ fontSize: '16px' }}>Quantity</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-full)', padding: '4px 12px' }}>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '8px' }}>
              <Minus size={16} />
            </button>
            <span style={{ fontSize: '16px', fontWeight: 600, width: '20px', textAlign: 'center' }}>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '8px' }}>
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Add to Cart Footer */}
        <div style={{ marginTop: '32px', paddingTop: '16px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-text-light)' }}>Total Price</span>
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-text)' }}>₹{totalPrice.toFixed(2)}</span>
          </div>
          <button className="btn-primary" style={{ flex: 1 }} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
