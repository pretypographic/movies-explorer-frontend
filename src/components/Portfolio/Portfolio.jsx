function Portfolio() {
  return (
    <>
      <h1 className="aboutme__portfolio-title">Портфолио</h1>
      <ol className="aboutme__portfolio">
        <li className="aboutme__portfolio-work">
          <a
            href="https://wecto.nomoredomainsicu.ru"
            className="aboutme__link aboutme__link_portfolio"
            title="Место"
            target="_blank"
            rel="noreferrer">Одностраничное приложение
            <span className="aboutme__link aboutme__link_icon">↗</span></a>
        </li>
        <li className="aboutme__portfolio-work">
          <a
            href="https://pretypographic.github.io/russian-travel/"
            className="aboutme__link aboutme__link_portfolio"
            title="Путешествие по России"
            target="_blank"
            rel="noreferrer">Адаптивный сайт
            <span className="aboutme__link aboutme__link_icon">↗</span></a>
        </li>
        <li className="aboutme__portfolio-work">
          <a
            href="https://pretypographic.github.io/how-to-learn/"
            className="aboutme__link aboutme__link_portfolio"
            title="Научиться учиться"
            target="_blank"
            rel="noreferrer">Статичный сайт
            <span className="aboutme__link aboutme__link_icon">↗</span></a>
        </li>
      </ol>
    </>
  )
}

export default Portfolio;