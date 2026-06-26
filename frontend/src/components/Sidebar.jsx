import React from 'react';
import './Sidebar.css';
import { LayoutDashboard, Radio, Settings } from 'lucide-react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </li>
        <li className="menu-item">
          <Radio size={20} />
          <span>Devices</span>
        </li>
        <li className="menu-item">
          <Settings size={20} />
          <span>Settings</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
