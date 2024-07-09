import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-200 via-green-200 to-green-100 flex flex-col justify-center items-start gap-2.5" style={{ height: '100px', padding: '0 200px 0 120px' }}>
      <ul className="flex space-x-10">
        <li><a href="#home" className="text-black font-semibold">Home</a></li>
        <li><a href="#project" className="text-black font-semibold">Project</a></li>
        <li><a href="#recommend" className="text-black font-semibold">Recommend</a></li>
        <li><a href="#contact" className="text-black font-semibold">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
