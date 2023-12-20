import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/images/fb.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/images/tw.png" alt="twitter" />
            </a>
          </li>
          <a href="instagram.com" target="_blank" rel="noreferrer">
            <img src="/images/ig.png" alt="instagram" />
          </a>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="logo" />
      </section>
      <section>
        <p>
            Desenvolvido por Luiz Felipe
        </p>
      </section>
    </footer>
  );
};

export default Footer;
