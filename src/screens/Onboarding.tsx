import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, UtensilsCrossed } from 'lucide-react';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<string[]>([]);

  const togglePreference = (pref: string) => {
    if (preferences.includes(pref)) {
      setPreferences(preferences.filter(p => p !== pref));
    } else {
      setPreferences([...preferences, pref]);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="onboarding-container fade-in" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%', 
      flex: 1,
      backgroundColor: 'var(--color-primary)', 
      color: 'white',
      padding: 'var(--space-6) var(--space-5)'
    }}>
      {step === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div style={{ marginTop: '20vh', textAlign: 'center' }} className="slide-up">
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: 'white', 
              borderRadius: '50%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              margin: '0 auto var(--space-5) auto'
            }}>
              <UtensilsCrossed size={40} color="var(--color-primary)" />
            </div>
            <h1 style={{ color: 'white', fontSize: '36px', marginBottom: 'var(--space-3)' }}>Tomato</h1>
            <p style={{ fontSize: '18px', opacity: 0.9 }}>Fresh food, delivered fast.</p>
          </div>
          <button 
            className="btn-secondary slide-up" 
            style={{ animationDelay: '0.2s', marginTop: 'auto' }}
            onClick={handleNext}
          >
            Get Started
            <ChevronRight size={20} />
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }} className="fade-in">
          <div>
            <h2 style={{ color: 'white', fontSize: '28px', marginBottom: 'var(--space-2)' }}>What do you love?</h2>
            <p style={{ opacity: 0.9, marginBottom: 'var(--space-5)' }}>Select your preferences for AI recommendations</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
              {['Pizza', 'Healthy', 'Burgers', 'Vegan', 'Sushi', 'Desserts', 'Spicy', 'Fast Food'].map(pref => (
                <button 
                  key={pref}
                  onClick={() => togglePreference(pref)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    backgroundColor: preferences.includes(pref) ? 'white' : 'transparent',
                    color: preferences.includes(pref) ? 'var(--color-primary)' : 'white',
                    fontWeight: 600,
                    fontSize: '15px'
                  }}
                >
                  {pref}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            className="btn-secondary" 
            style={{ marginTop: 'auto' }}
            onClick={handleNext}
          >
            Find Food
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
