import { Github, Twitter, MessageCircle } from "lucide-react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Links */}
        <div className="footer-links">

          <div className="footer-column">
            <h4>Documentación</h4>
            <Link to="/docs/introduction">
              Introducción
            </Link>
            <Link to="/docs/getting-started">
              Empezando
            </Link>
            <Link to="/docs/routing">
              Enrutamiento
            </Link>
            <Link to="/docs/middlewares">
              Middleware
            </Link>
          </div>

          <div className="footer-column">
            <h4>Proyecto</h4>

            <a href="https://github.com/Pipe930/Skyguard-js" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://github.com/Pipe930/Skyguard-js/issues" target="_blank" rel="noreferrer">
              Issues
            </a>

            <a href="https://github.com/Pipe930/Skyguard-js/blob/main/LICENSE" target="_blank" rel="noreferrer">
              Licencia
            </a>
          </div>

          <div className="footer-column">
            <h4>Comunidad</h4>

            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              Discord
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>

        </div>

        {/* Bottom section */}
        <div className="footer-bottom">

          <p>
            © {year} Skyguard JS — Creado por <strong>ElPipex</strong>
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/Pipe930"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>

            <a
              href="https://discord.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <MessageCircle size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;