import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { schoolInfo, navigation } from '../../content/common';
import { Button } from '../shared/Button';
import { getCurrentPath, getRoutePath, navigateTo } from '../../utils/navigation';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleRouteChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const handleNavClick = (path: string) => {
    navigateTo(path);
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-navy/80 backdrop-blur-md shadow-lg shadow-navy/15'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            <motion.a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick('/');
              }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg border ${
                  isScrolled
                    ? 'border-maroon/15 bg-slate-100 shadow-sm'
                    : 'border-white/25 bg-navy/35 shadow-sm'
                }`}
              >
                <img
                  src="/LIS.png"
                  alt={`${schoolInfo.name} logo`}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h1
                  className={`font-playfair text-xl font-bold ${
                    isScrolled ? 'text-navy' : 'text-white'
                  }`}
                >
                  {schoolInfo.name}
                </h1>
                <p
                  className={`font-poppins text-xs ${
                    isScrolled ? 'text-gray-600' : 'text-white/90'
                  }`}
                >
                  {schoolInfo.tagline}
                </p>
              </div>
            </motion.a>

            {/* <nav className="hidden lg:flex items-center gap-8">
              {navigation.primary.map((item) => {
                const isActive = currentPath === item.path.replace('#', '');
                return (
                  <motion.a
                    key={item.path}
                    href={item.path}
                    className={`font-poppins font-medium transition-colors ${
                      isScrolled
                        ? isActive
                          ? 'text-maroon font-semibold'
                          : 'text-gray-700 hover:text-maroon'
                        : isActive
                        ? 'text-gold font-semibold'
                        : 'text-white hover:text-gold'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav> */}
<nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
  {navigation.primary.map((item) => {
    const isActive = currentPath === getRoutePath(item.path);

    return (
      <a
        key={item.path}
        href={item.path}
        onClick={(event) => {
          event.preventDefault();
          handleNavClick(item.path);
        }}
        className={`whitespace-nowrap text-[14px] font-medium transition-colors ${
          isScrolled
            ? isActive
              ? 'text-rose-700'
              : 'text-slate-700 hover:text-slate-900'
            : isActive
            ? 'text-white'
            : 'text-white/85 hover:text-white'
        }`}
      >
        {item.label}
      </a>
    );
  })}
</nav>
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                icon={Phone}
                href={`tel:${schoolInfo.contact.phones[0]}`}
              >
                Call Us
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleNavClick('/admissions')}
              >
                Apply Now
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 lg:hidden bg-gradient-to-br from-maroon to-navy"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
              {navigation.primary.map((item, index) => (
                <motion.a
                  key={item.path}
                  href={item.path}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(item.path);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-poppins text-2xl font-semibold text-white hover:text-gold transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="flex flex-col gap-4 mt-8">
                <Button
                  variant="outline"
                  icon={Phone}
                  href={`tel:${schoolInfo.contact.phones[0]}`}
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-maroon"
                >
                  Call Us
                </Button>
                <Button variant="primary" onClick={() => handleNavClick('/admissions')}>
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
