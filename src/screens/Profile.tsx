import { Settings, CreditCard, Heart, Clock, ChevronRight } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

const Profile = () => {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--color-background)', position: 'relative' }} className="fade-in">
      
      <div style={{ padding: 'max(var(--space-4), env(safe-area-inset-top)) var(--space-5) var(--space-5)', backgroundColor: 'white', boxShadow: 'var(--shadow-sm)', zIndex: 1, borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '24px' }}>Profile</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '4px' }}>John Doe</h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-light)' }}>john.doe@example.com</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, padding: 'var(--space-4)', marginTop: '8px' }}>
        
        <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          {[
            { icon: Clock, label: 'Order History', color: '#4CAF50' },
            { icon: Heart, label: 'Saved Restaurants', color: '#E91E63' },
            { icon: CreditCard, label: 'Payment Methods', color: '#2196F3' },
            { icon: Settings, label: 'Settings', color: '#9E9E9E' }
          ].map((item, index) => (
            <div key={item.label} style={{ 
              display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', 
              borderBottom: index < 3 ? '1px solid var(--color-border)' : 'none',
              cursor: 'pointer'
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: `${item.color}15`, display: 'flex', justifyContent: 'center', alignItems: 'center', color: item.color }}>
                <item.icon size={18} />
              </div>
              <span style={{ flex: 1, fontSize: '15px', fontWeight: 500 }}>{item.label}</span>
              <ChevronRight size={20} color="var(--color-text-light)" />
            </div>
          ))}
        </div>

      </div>

      <BottomNavigation />
    </div>
  );
};

export default Profile;
