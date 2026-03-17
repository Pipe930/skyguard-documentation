import { Github, Twitter, MessageCircle } from "lucide-react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Links */}
        <div className="footer-links">

          <div className="footer-column">
            <h4>{t("footer.docs.title")}</h4>
            <Link to="/docs/introduction">
              {t("footer.docs.introduction")}
            </Link>
            <Link to="/docs/getting-started">
              {t("footer.docs.gettingStarted")}
            </Link>
            <Link to="/docs/routing">
              {t("footer.docs.routing")}
            </Link>
            <Link to="/docs/middlewares">
              {t("footer.docs.middlewares")}
            </Link>
          </div>

          <div className="footer-column">
            <h4>{t("footer.project.title")}</h4>

            <a href="https://github.com/Pipe930/Skyguard-js" target="_blank" rel="noreferrer">
              {t("footer.project.github")}
            </a>

            <a href="https://github.com/Pipe930/Skyguard-js/issues" target="_blank" rel="noreferrer">
              {t("footer.project.issues")}
            </a>

            <a href="https://github.com/Pipe930/Skyguard-js/blob/main/LICENSE" target="_blank" rel="noreferrer">
              {t("footer.project.license")}
            </a>
          </div>

          <div className="footer-column">
            <h4>{t("footer.community.title")}</h4>

            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              {t("footer.community.discord")}
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              {t("footer.community.twitter")}
            </a>
          </div>

        </div>

        {/* Bottom section */}
        <div className="footer-bottom">

          <p>
            © {year} Skyguard JS - {t("footer.bottom.createdBy")} <strong>ElPipex</strong>
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/Pipe930"
              target="_blank"
              rel="noreferrer"
              aria-label={t("footer.social.github")}
            >
              <Github size={18} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label={t("footer.social.twitter")}
            >
              <Twitter size={18} />
            </a>

            <a
              href="https://discord.com/"
              target="_blank"
              rel="noreferrer"
              aria-label={t("footer.social.discord")}
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
