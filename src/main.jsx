
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Skills from './sections/Skills/Skills.jsx';
import Contact from './sections/Contact/Contact.jsx';
import Footer from './sections/Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <ThemeProvider>
      <App />
      <Hero />
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
  
);
