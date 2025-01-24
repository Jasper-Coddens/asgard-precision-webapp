import Link from 'next/link';

const Navbar = () => {
  return (
<nav>
  <div className="flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/image/asgard_logo.png" className="ml-12 h-20" alt="Asgard Precision Logo" />
    </a>
    <div className="hidden w-full md:block md:w-auto">
      <ul className="text-xl font-medium flex flex-col p-4 md:p-0 mt-4 mr-12 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <a href="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 transition duration-300">HOME</a>
        </li>
        <li>
          <a href="/event" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition duration-300">EVENT</a>
        </li>
        <li>
          <a href="/contact" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition duration-300">CONTACT</a>
        </li>
        <li>
          <a href="/legal" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 transition duration-300">LEGAL</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;

