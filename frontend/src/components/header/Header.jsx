import React from 'react';
import proPic from '../../assets/profile/OIP.jpg'
import logo from '../../assets/profile/png-clipart-school-les-eucalyptus-avenue-des-eucalyptus-internet-radio-discrimination-hochzeit-white-culture.png'
const Header = () => {
  return (
    <header className="bg-black shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Matrimony"
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-2 text-xl font-bold text-white">Matrimony</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-white hover:text-white-900">
            Home
          </a>
          <a href="/matches" className="text-white hover:text-white-900">
            Matches
          </a>
          <a href="/activities" className="text-white hover:text-white-900">
            Activities
          </a>
          <a href="/notifications" className="text-white hover:text-white-900">
            Notifications
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <img
            src={proPic}
            alt="User Avatar"
            className="h-12 w-12 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
