import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, MapPin, CreditCard, ChevronRight } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [address] = useState('Home - 123 Main St');

  // Load from state if navigated from FoodItem, otherwise use default
  const cartItem = location.state || {
    id: 2,
    name: 'Pepperoni Pizza',
    size: 'Medium',
    quantity: 1,
    price: 14.99,
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&q=80'
  };

  const subtotal = cartItem.price * cartItem.quantity;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--color-surface)', position: 'relative' }} className="fade-in">
      <div style={{ padding: 'max(var(--space-4), env(safe-area-inset-top)) var(--space-4) var(--space-4)', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--color-border)' }}>
        <button onClick={() => navigate(-1)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <ChevronLeft size={24} />
        </button>
        <h1 style={{ fontSize: '20px' }}>Your Cart</h1>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-4)', paddingBottom: '120px' }} className="hide-scrollbar">
        {/* Order Items */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '16px', backgroundImage: `url(${cartItem.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>{cartItem.name}</h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-light)', marginBottom: '8px' }}>{cartItem.size} • Hand-tossed</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', fontWeight: 600 }}>₹{cartItem.price.toFixed(2)}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-full)', padding: '2px 8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>{cartItem.quantity}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Delivery Address</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255, 75, 58, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--color-primary)' }}>
            <MapPin size={20} />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>{address}</h4>
            <p style={{ fontSize: '12px', color: 'var(--color-text-light)' }}>Apt 4B, NY 10001</p>
          </div>
          <ChevronRight size={20} color="var(--color-text-light)" />
        </div>

        {/* Payment */}
        <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Payment Method</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#1A1A1A', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <CreditCard size={20} />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>Apple Pay</h4>
          </div>
          <ChevronRight size={20} color="var(--color-text-light)" />
        </div>

        {/* Summary */}
        <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>Order Summary</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--color-text-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Subtotal</span>
            <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>₹{subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Delivery Fee</span>
            <span style={{ color: 'var(--color-success)', fontWeight: 500 }}>Free</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Tax</span>
            <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>₹{tax.toFixed(2)}</span>
          </div>
          <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '4px 0' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', color: 'var(--color-text)', fontWeight: 700 }}>
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', backgroundColor: 'white', borderTop: '1px solid var(--color-border)', zIndex: 20 }}>
        <button className="btn-primary" onClick={() => navigate('/tracking')}>
          Checkout • ₹{total.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Cart;
