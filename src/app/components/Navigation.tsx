import { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (id: string) => {
    navigate(id === 'hero' ? '/' : `/${id}`);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Leadership', id: 'leadership' },
  ];

  const isActive = (id: string) =>
    id === 'hero' ? location.pathname === '/' : location.pathname === `/${id}`;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl">
      <div
        className={`flex items-center justify-between gap-2 rounded-full border border-black/10 bg-white/90 backdrop-blur-md px-2 py-2 shadow-sm transition-shadow ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <button
          onClick={() => goTo('hero')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${
            isActive('hero') ? 'bg-black text-white' : 'text-black hover:bg-black/5'
          }`}
        >
          <Home size={16} />
          <span className="hidden sm:inline">Home</span>
        </button>

        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                isActive(item.id) ? 'bg-black text-white' : 'text-black/80 hover:bg-black/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-full text-black hover:bg-black/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-3xl border border-black/10 bg-white shadow-lg p-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-2xl text-sm transition-colors ${
                isActive(item.id) ? 'bg-black text-white' : 'text-black/80 hover:bg-black/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
