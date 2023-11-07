function Portfolio() {
  return (
    <>
      <h1 className="about-me__portfolio-title">Портфолио</h1>
      <ul className="about-me__portfolio">
        <li className="about-me__portfolio-work">
          <a
            href="https://pretypographic.github.io/how-to-learn/"
            className="about-me__link about-me__link_type_text"
            title="Научиться учиться"
            target="_blank"
            rel="noreferrer">Статичный сайт
            <span className="about-me__link about-me__link_type_icon">↗</span></a>
        </li>
        <li className="about-me__portfolio-work">
          <a
            href="https://pretypographic.github.io/russian-travel/"
            className="about-me__link about-me__link_type_text"
            title="Путешествие по России"
            target="_blank"
            rel="noreferrer">Адаптивный сайт
            <span className="about-me__link about-me__link_type_icon">↗</span></a>
        </li>
        <li className="about-me__portfolio-work">
          <a
            href="https://wecto.nomoredomainsicu.ru"
            className="about-me__link about-me__link_type_text"
            title="Место"
            target="_blank"
            rel="noreferrer">Одностраничное приложение
            <span className="about-me__link about-me__link_type_icon">↗</span></a>
        </li>
      </ul>
    </>
  )
}

export default Portfolio;