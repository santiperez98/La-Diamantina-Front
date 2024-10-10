import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next'; // Importar useTranslation

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Inicializar useTranslation
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-[#f7ebcc] p-4 text-[#96765e]">
      <div className="flex justify-between items-center">
        <Link to="/" className="block">
          <img src={logo} alt="La Diamantina" className="h-16 w-auto" />
        </Link>

        <button className="text-black block md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <div className="hidden md:flex space-x-4">
          <Link to="/products" className="hover:text-blue-400">{t('Productos')}</Link>
          <Link to="/mina" className="hover:text-blue-400">{t('La mina')}</Link>
          <Link to="/empresa" className="hover:text-blue-400">{t('La empresa')}</Link>
          <Link to="/contacto" className="hover:text-blue-400">{t('Contacto')}</Link>

          {/* Selector de idiomas */}
          <select onChange={(e) => changeLanguage(e.target.value)} className="border p-1 rounded">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="pt">Português</option>
            <option value="it">Italiano</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <Link to="/products" className="block px-2 py-1 hover:bg-gray-700 rounded">{t('Productos')}</Link>
        <Link to="/mina" className="block px-2 py-1 hover:bg-gray-700 rounded">{t('La mina')}</Link>
        <Link to="/empresa" className="block px-2 py-1 hover:bg-gray-700 rounded">{t('La empresa')}</Link>
        <Link to="/contacto" className="block px-2 py-1 hover:bg-gray-700 rounded">{t('Contacto')}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
