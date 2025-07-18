import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
useEffect(() => {
  AOS.init({ duration: 1000 });
  
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <>
      <header className="navbar">
        <h1 className="logo">Shreyas Shirke</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#gaming">BGMI</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="navbar-spacer"></div> 

      <section className="hero" data-aos="fade-up">
        <h2>Hello, I'm Shreyas 👋</h2>
        <p>A passionate Fullstack Python Developer intern</p>
      </section>

      <section id="about" className="section" data-aos="fade-right">
        <h2>About Me</h2>
        <p>
          I’m currently doing industrial training in Fullstack Python Development.
          I enjoy building websites and gaming in my free time.
        </p>
      </section>

      <section id="skills" className="section" data-aos="fade-left">
        <h2>Skills</h2>
        <ul>
          <li>Python & Django</li>
          <li>HTML, CSS, JS</li>
          <li>React & Bootstrap</li>
          <li>Firebase & Git</li>
        </ul>
      </section>

      <section id="projects" className="section" data-aos="zoom-in">
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">
            <h3>Midgods Store</h3>
            <p>Gaming eCommerce site with Bootstrap, CSS animations, and product grid.</p>
          </div>
          <div className="card">
            <h3>Django Blog</h3>
            <p>Basic blog app with views, templates, and static files.</p>
          </div>
        </div>
      </section>

      <section id="gaming" className="section" data-aos="flip-up">
        <h2>BGMI / Gaming</h2>
        <p>
          I play BGMI in my free time and follow esports tournaments. My favorite weapon is M416 with 6x!
        </p>
        <p>
          My dream is to build a gaming community and maybe a custom BGMI tracker app one day.
        </p>
      </section>

      <section id="contact" className="section" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:shreyashshirke8@gmail.com">shreyashshirke8@gmail.com</a></p>
      </section>

      <footer>
        <p>© 2025 Shreyas Shirke. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
