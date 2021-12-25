// import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1 className="brand">irstudio.net</h1>

      <nav className="navigasi">
        <ul className="nav-list">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/blog" >Blog</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />}></Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div >
  );
}

export default App;
