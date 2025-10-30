import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../../public/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Contact Us', href: '#contact' }
  ]
  
  return (
    <header className="fixed w-full top-0 z-50 mt-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
              <img 
                src={logo} 
                alt="PlanBuddy Logo" 
                className="w-auto h-20 "
              />
            </div>
            <a href='#'><span className="text-3xl font-bold text-black planbuddy-text">PlanBuddy</span></a>
          </div>
          
          {/* Desktop  */}
          <div className="hidden md:flex items-center gap-10 ml-auto">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-stone-800 hover:text-purple-600 font-medium transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="block py-3 text-neutral-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header