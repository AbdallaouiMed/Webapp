import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaTachometerAlt, FaBook, FaBriefcase, FaRobot, FaBuilding, FaUpload, FaLongArrowAltDown, FaAccessibleIcon, FaAcquisitionsIncorporated, FaUniversalAccess } from 'react-icons/fa';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } h-screen bg-gray-100 text-gray-800 fixed transition-width duration-300`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <div className={`${isCollapsed ? 'hidden' : 'block'} text-xl font-bold`}>
          Menu
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          {isCollapsed ? <FaBars size={20} /> : <FaTimes size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 p-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 ${
              isActive ? 'bg-gray-300 font-bold' : ''
            }`
          }
        >
          <FaTachometerAlt className="text-lg" />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
        </NavLink>
        <NavLink
          to="/training"
          className={({ isActive }) =>
            `flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 ${
              isActive ? 'bg-gray-300 font-bold' : ''
            }`
          }
        >
          <FaBook className="text-lg" />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Programmation</span>
        </NavLink>
        <NavLink
          to="/cabinet"
          className={({ isActive }) =>
            `flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 ${
              isActive ? 'bg-gray-300 font-bold' : ''
            }`
          }
        >
          <FaBriefcase className="text-lg" />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Cabinet</span>
        </NavLink>
        <NavLink
          to="/company-registration"
          className={({ isActive }) =>
            `flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 ${
              isActive ? 'bg-gray-300 font-bold' : ''
            }`
          }
        >
          <FaBuilding className="text-lg" />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Page inscription </span>
        </NavLink>
        <NavLink
          to="/Upload"
          className={({ isActive }) =>
            `flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 ${
              isActive ? 'bg-gray-300 font-bold' : ''
            }`
          }
        >
          <FaUpload className="text-lg" />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Upload formation </span>
        </NavLink>
        <NavLink
          to="/Compte"
          className={({ isActive }) =>
            `flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 ${
              isActive ? 'bg-gray-300 font-bold' : ''
            }`
          }
        >
          <FaUniversalAccess className="text-lg" />
          <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Compte salarié </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
