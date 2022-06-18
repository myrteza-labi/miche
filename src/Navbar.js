import './Navbar.css';
import logo from './images/logo.jpg'; 

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logoContainer"><img src={logo} alt="logo Miché" className="logoImg" /></div>
      <a href="/" className="navbarItem">Live</a>
      <a href="/" className="navbarItem">Fil d'actualité</a>
    </nav>
  );
}

export default Navbar;
