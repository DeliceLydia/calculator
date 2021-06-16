import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Calculator</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/app">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
