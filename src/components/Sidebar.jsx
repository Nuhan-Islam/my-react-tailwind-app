import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="bg-gray-50 w-64 min-h-screen p-4 border-r border-gray-200 hidden md:block">
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Guides</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block p-2 rounded-lg text-gray-700 ${isActive ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`
                }
              >
                Introduction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quickstart"
                className={({ isActive }) =>
                  `block p-2 rounded-lg text-gray-700 ${isActive ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`
                }
              >
                Quickstart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sdks"
                className={({ isActive }) =>
                  `block p-2 rounded-lg text-gray-700 ${isActive ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`
                }
              >
                SDKs
              </NavLink>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Authentication
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Basic Authentication
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                OAuth2 with bearer token
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Using an SDK
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Pagination
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Errors
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Webhooks
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Resources</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Conversations
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Messages
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Groups
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;