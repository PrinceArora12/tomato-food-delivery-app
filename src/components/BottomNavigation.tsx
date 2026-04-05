import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingBag, User } from 'lucide-react';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/search', icon: Search, label: 'Browse' },
    { path: '/cart', icon: ShoppingBag, label: 'Cart' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '16px 0',
      boxShadow: '0 -4px 12px rgba(0,0,0,0.05)',
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
      zIndex: 10
    }}>
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <div 
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: location.pathname === item.path ? 'var(--color-primary)' : 'var(--color-text-light)',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
          >
            <Icon size={24} strokeWidth={location.pathname === item.path ? 2.5 : 2} />
            <span style={{ fontSize: '11px', fontWeight: location.pathname === item.path ? 600 : 500 }}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
