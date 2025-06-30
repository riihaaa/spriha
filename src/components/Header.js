const Header = () => (
  <header className="flex justify-between items-center p-6 container mx-auto text-white">
    <h1 className="text-xl font-bold">#</h1>
    <nav className="space-x-6">
      <a href="#about" className="hover:underline">About</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </nav>
  </header>
);

export default Header;

