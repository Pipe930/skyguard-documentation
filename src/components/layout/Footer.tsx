import { Github, Twitter, MessageCircle } from "lucide-react";
import "../../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Links */}
        <div className="footer-links">

          <div className="footer-column">
            <h4>Documentation</h4>

            <a href="/docs/introduction">Introduction</a>
            <a href="/docs/getting-started">Getting Started</a>
            <a href="/docs/routing">Routing</a>
            <a href="/docs/middleware">Middleware</a>
          </div>

          <div className="footer-column">
            <h4>Project</h4>

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              Issues
            </a>

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              License
            </a>
          </div>

          <div className="footer-column">
            <h4>Community</h4>

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
            © {year} Skyguard JS — Created by <strong>Felipe Sanchez</strong>
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/"
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