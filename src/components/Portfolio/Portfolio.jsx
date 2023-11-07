function Portfolio() {
  return (
    <article className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://pretypographic.github.io/how-to-learn/"
            className="portfolio__link"
            title="Научиться учиться"
            target="_blank"
            rel="noreferrer">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://pretypographic.github.io/russian-travel/"
            className="portfolio__link about-me__link_type_text"
            title="Путешествие по России"
            target="_blank"
            rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://wecto.nomoredomainsicu.ru"
            className="portfolio__link about-me__link_type_text"
            title="Место"
            target="_blank"
            rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </article>
  )
}

export default Portfolio;