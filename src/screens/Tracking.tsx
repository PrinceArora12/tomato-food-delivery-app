import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Phone, MessageCircle, MapPin } from 'lucide-react';

const Tracking = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  // Simulate progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => Math.min(p + 1, 100));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--color-surface)' }} className="fade-in">
      {/* Map Header */}
      <div style={{ position: 'relative', height: '40vh', backgroundColor: '#e5e5e5', backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: 'max(var(--space-4), env(safe-area-inset-top))', display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => navigate('/home')} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <ChevronLeft size={24} />
          </button>
        </div>
        
        {/* Mock Map Element */}
        <div style={{ position: 'absolute', top: '50%', left: '40%', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 0 10px rgba(255,75,58,0.2)' }}>
          <span style={{ fontSize: '20px' }}>🛵</span>
        </div>
        <div style={{ position: 'absolute', top: '30%', left: '60%', color: 'var(--color-primary)' }}>
          <MapPin size={32} fill="currentColor" color="white" />
        </div>
        
        {/* Map overlay gradient */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to top, white, transparent)' }}></div>
      </div>

      <div style={{ flex: 1, padding: 'var(--space-5)', backgroundColor: 'white', marginTop: '-24px', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', position: 'relative', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Arriving in 15 min</h2>
          <p style={{ color: 'var(--color-text-light)', fontSize: '14px' }}>Your order from Tomato Pizzeria is on the way</p>
        </div>

        {/* Progress Bar */}
        <div style={{ height: '6px', backgroundColor: 'var(--color-background)', borderRadius: '3px', marginBottom: '32px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: 'var(--color-primary)', transition: 'width 0.1s linear' }}></div>
        </div>

        {/* Status Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', opacity: 0.5 }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ fontSize: '15px', fontWeight: 500 }}>Order Confirmed</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', opacity: 0.5 }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ fontSize: '15px', fontWeight: 500 }}>Preparing Food</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '3px solid var(--color-primary)', backgroundColor: 'white' }}></div>
            <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-primary)' }}>Out for Delivery</span>
          </div>
        </div>

        {/* Driver Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#CCC', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" alt="Driver" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Alex Johnson</h4>
            <p style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>Honda PCX • NY 4321</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <MessageCircle size={20} color="var(--color-primary)" />
            </button>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <Phone size={20} color="white" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tracking;
