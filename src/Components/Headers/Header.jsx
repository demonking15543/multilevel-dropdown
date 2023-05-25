import Navbar from './Navbar';


const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/" className="logo">
          Logo
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;