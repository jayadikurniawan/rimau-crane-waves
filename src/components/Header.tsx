
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Fleet & Equipment', href: '/fleet' },
    { name: 'Operational Coverage', href: '/coverage' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    
    // Trigger Google Translate
    if (newLanguage === 'zh') {
      // Add Google Translate script if not already present
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);
        
        // Initialize Google Translate
        (window as any).googleTranslateElementInit = function() {
          new (window as any).google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'zh-CN',
            autoDisplay: false
          }, 'google_translate_element');
          
          // Auto-trigger translation to Chinese
          setTimeout(() => {
            const selectElement = document.querySelector('#google_translate_element select') as HTMLSelectElement;
            if (selectElement) {
              selectElement.value = 'zh-CN';
              selectElement.dispatchEvent(new Event('change'));
            }
          }, 1000);
        };
        
        // Add hidden Google Translate element
        if (!document.getElementById('google_translate_element')) {
          const translateDiv = document.createElement('div');
          translateDiv.id = 'google_translate_element';
          translateDiv.style.display = 'none';
          document.body.appendChild(translateDiv);
        }
      } else {
        // If script already exists, just trigger translation
        const selectElement = document.querySelector('#google_translate_element select') as HTMLSelectElement;
        if (selectElement) {
          selectElement.value = 'zh-CN';
          selectElement.dispatchEvent(new Event('change'));
        }
      }
    } else {
      // Reset to English
      const selectElement = document.querySelector('#google_translate_element select') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = '';
        selectElement.dispatchEvent(new Event('change'));
      }
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="PT Rimau Trisukses Perkasa" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="ml-4 flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'EN' : '中文'}</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md transition-colors duration-200"
            >
              <Globe size={14} />
              <span>{language === 'en' ? 'EN' : '中文'}</span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <nav className="py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
