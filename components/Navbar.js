import Link from 'next/link';

export default function Navbar({ setActiveSection }) {
  return (
    <nav className="flex justify-center bg-gray-800 p-4">
      <ul className="flex space-x-6 text-white">
        <li>
          <button onClick={() => setActiveSection('about')} className="hover:underline">
            About Me
          </button>
        </li>
        <li>
          <button onClick={() => setActiveSection('experiences')} className="hover:underline">
            Experiences
          </button>
        </li>
        <li>
          <button onClick={() => setActiveSection('recommended')} className="hover:underline">
            Recommended
          </button>
        </li>
      </ul>
    </nav>
  );
}
