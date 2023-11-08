function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__sources">
        <p className="footer__author">© 2023</p>
        <a
          className="footer__company"
          href="https://practicum.yandex.ru/"
          title="Яндекс.Практикум"
          target="_blank"
          rel="noreferrer">Яндекс.Практикум</a>
        <a
          className="footer__company"
          href="https://github.com/"
          title="Github"
          target="_blank"
          rel="noreferrer">Github</a>
      </div>
    </footer>
  )
}

export default Footer;