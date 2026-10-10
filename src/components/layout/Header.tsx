import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Building2,
  ChevronDown,
  FileCheck2,
  GraduationCap,
  Home,
  Images,
  Info,
  Menu,
  Palette,
  Phone,
  PhoneCall,
  School,
  X,
} from 'lucide-react';
import { schoolInfo, navigation } from '../../content/common';
import { Button } from '../shared/Button';
import { getCurrentPath, getRoutePath, navigateTo } from '../../utils/navigation';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
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

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleNavClick = (path: string) => {
    navigateTo(path);
    setIsOpen(false);
    setIsAboutOpen(false);
  };

  const aboutLinks = [
    { label: 'About Our School', path: '/about' },
    { label: 'Mandatory Disclosure', path: '/mandatory-documents' },
  ];

  const getMobileIcon = (path: string) => {
    switch (path) {
      case '/': return Home;
      case '/about': return Info;
      case '/curriculum': return BookOpen;
      case '/facilities': return Building2;
      case '/activities': return Palette;
      case '/academics': return GraduationCap;
      case '/gallery': return Images;
      case '/contact': return PhoneCall;
      default: return School;
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6"
      >
        <div className="mx-auto max-w-[1400px]">
          <div
            className={`flex h-16 items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4 lg:px-5 ${
              isScrolled
                ? 'border-white/90 bg-gradient-to-br from-white/95 via-white/90 to-slate-100/90 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_12px_40px_rgba(15,35,71,0.16)] backdrop-blur-xl'
                : 'border-white/20 bg-gradient-to-br from-navy-light/90 via-navy/90 to-navy-dark/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            }`}
          >
            <motion.a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick('/');
              }}
              className="flex min-w-0 items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                  isScrolled
                    ? 'border-maroon/10 bg-maroon/[0.04] shadow-sm'
                    : 'border-white/20 bg-white/10 shadow-sm'
                }`}
              >
                <img
                  src="/LIS.png"
                  alt={`${schoolInfo.name} logo`}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div className="min-w-0">
                <h1
                  className={`truncate font-playfair text-base font-bold sm:text-lg ${
                    isScrolled ? 'text-navy' : 'text-white'
                  }`}
                >
                  {schoolInfo.name}
                </h1>
                <p
                  className={`block truncate font-poppins text-[9px] tracking-wide min-[380px]:text-[10px] sm:text-xs ${
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
<nav className="hidden xl:flex items-center gap-1 rounded-full border border-white/10 bg-black/[0.04] p-1">
  {navigation.primary.map((item) => {
    const isActive = currentPath === getRoutePath(item.path);

    if (item.path === '/about') {
      const isAboutActive = currentPath === '/about' || currentPath === '/mandatory-documents';

      return (
        <div
          key={item.path}
          className="relative"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsAboutOpen((open) => !open)}
            className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-all ${
              isScrolled
                ? isAboutActive
                  ? 'bg-maroon text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                : isAboutActive
                ? 'bg-white/15 text-white shadow-sm'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
            aria-expanded={isAboutOpen}
            aria-haspopup="true"
          >
            {item.label}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {isAboutOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.16 }}
                className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-100/80 bg-white/95 p-2 shadow-2xl backdrop-blur-xl">
                  {aboutLinks.map((link) => (
                    <button
                      key={link.path}
                      type="button"
                      onClick={() => handleNavClick(link.path)}
                      className={`block w-full rounded-lg px-4 py-3 text-left font-poppins text-sm font-medium transition-colors ${
                        currentPath === link.path
                          ? 'bg-maroon text-white'
                          : 'text-slate-700 hover:bg-maroon/10 hover:text-maroon'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <a
        key={item.path}
        href={item.path}
        onClick={(event) => {
          event.preventDefault();
          handleNavClick(item.path);
        }}
        className={`whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-all ${
          isScrolled
            ? isActive
              ? 'bg-maroon text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            : isActive
            ? 'bg-white/15 text-white shadow-sm'
            : 'text-white/80 hover:bg-white/10 hover:text-white'
        }`}
      >
        {item.label}
      </a>
    );
  })}
</nav>
            <div className="hidden 2xl:flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                icon={Phone}
                href={`tel:${schoolInfo.contact.phones[0]}`}
                className="rounded-full px-5 shadow-md"
              >
                Call Us
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-xl border p-2.5 transition-colors xl:hidden ${
                isScrolled
                  ? 'border-slate-200 bg-slate-100 text-navy hover:bg-slate-200'
                  : 'border-white/15 bg-white/10 text-white hover:bg-white/15'
              }`}
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-20 z-[45] bg-navy/50 backdrop-blur-sm xl:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="h-full w-full overflow-y-auto bg-gradient-to-b from-maroon via-[#561a43] to-navy shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              aria-label="Main navigation"
            >
            <div className="flex min-h-full flex-col px-5 py-6 sm:px-7">
              <div className="mb-5 border-b border-white/15 pb-4">
                <p className="font-poppins text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                  Explore
                </p>
                <p className="mt-1 font-inter text-sm text-white/65">The Lighthouse School</p>
              </div>

              <nav className="space-y-1.5">
              {navigation.primary.map((item, index) => {
                const Icon = getMobileIcon(item.path);

                if (item.path === '/about') {
                  const isAboutActive = currentPath === '/about' || currentPath === '/mandatory-documents';

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="w-full"
                    >
                      <button
                        type="button"
                        onClick={() => setIsMobileAboutOpen((open) => !open)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left font-poppins text-base font-semibold transition-colors ${
                          isAboutActive
                            ? 'bg-white/15 text-white'
                            : 'text-white/85 hover:bg-white/10 hover:text-white'
                        }`}
                        aria-expanded={isMobileAboutOpen}
                      >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          isAboutActive ? 'bg-gold text-navy' : 'bg-white/10 text-white'
                        }`}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="flex-1">About Us</span>
                        <ChevronDown
                          className={`h-4 w-4 text-white/70 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isMobileAboutOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-6 mt-1.5 space-y-1 border-l border-white/20 py-1 pl-6">
                              {aboutLinks.map((link) => {
                                const SubIcon = link.path === '/mandatory-documents' ? FileCheck2 : School;

                                return (
                                  <button
                                    key={link.path}
                                    type="button"
                                    onClick={() => handleNavClick(link.path)}
                                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-poppins text-sm font-medium transition-colors ${
                                      currentPath === link.path
                                        ? 'bg-white text-maroon shadow-sm'
                                        : 'text-white/75 hover:bg-white/10 hover:text-white'
                                    }`}
                                  >
                                    <SubIcon className="h-4 w-4 shrink-0" />
                                    {link.label}
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.a
                    key={item.path}
                    href={item.path}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(item.path);
                    }}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 font-poppins text-base font-semibold transition-colors ${
                      currentPath === item.path
                        ? 'bg-white text-maroon shadow-md'
                        : 'text-white/85 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      currentPath === item.path ? 'bg-maroon/10 text-maroon' : 'bg-white/10 text-white'
                    }`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{item.label}</span>
                  </motion.a>
                );
              })}
              </nav>

              <div className="mt-auto border-t border-white/15 pb-2 pt-6">
                <Button
                  variant="outline"
                  icon={Phone}
                  href={`tel:${schoolInfo.contact.phones[0]}`}
                  className="w-full border-white/60 bg-white/10 px-3 text-white hover:bg-white hover:text-maroon"
                >
                  Call Us
                </Button>
              </div>
            </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
