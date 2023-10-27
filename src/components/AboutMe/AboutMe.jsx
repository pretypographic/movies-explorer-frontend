import photo from '../../images/photo_2023-10-04_23-39-43.jpg';

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <article className="aboutme__article">
        <div className="aboutme__experience">
          <h3 className="aboutme__subtitle">Песвианидзе Александр</h3>
          <h4 className="aboutme__subtitle aboutme__subtitle_specialty">web-разработчик, 30 лет</h4>
          <p className="aboutme__text">Мой профессиональный путь начался в области
            кинорежиссуры, но со временем я переключился на разработку настольных
            игр. Мой опыт также охватывает администрирование театральной деятельности,
            работу в студии дубляжа и участие в художественных и арт-проектах. Мое
            образование включает в себя курсы веб-разработки в Yandex Practicum и
            курсы разработки игр в Школе дизайна Высшей школы экономики. Разнообразный
            опыт помогает креативно подходить к разработке приложений и
            создавать привлекательные и функциональные проекты.</p>
          <a
            href="https://github.com/pretypographic"
            className="aboutme__link"
            target="_blank"
            rel="noreferrer">Github</a>
        </div>
        <img className="aboutme__photo" src={photo} alt='Фотография: я за работой.' />
      </article>
      <h4 className="aboutme__subtitle aboutme__subtitle_portfolio">Портфолио</h4>
      <ol className="aboutme__portfolio">
        <li className="aboutme__portfolio-work">
          <a
            href="https://wecto.nomoredomainsicu.ru"
            className="aboutme__link aboutme__link_portfolio"
            title="Место"
            target="_blank"
            rel="noreferrer">Одностраничное приложение
            <span className="aboutme__link aboutme__link_icon" /></a>
        </li>
        <li className="aboutme__portfolio-work">
          <a
            href="https://pretypographic.github.io/russian-travel/"
            className="aboutme__link aboutme__link_portfolio"
            title="Путешествие по России"
            target="_blank"
            rel="noreferrer">Адаптивный сайт
            <span className="aboutme__link aboutme__link_icon" /></a>
        </li>
        <li className="aboutme__portfolio-work">
          <a
            href="https://pretypographic.github.io/how-to-learn/"
            className="aboutme__link aboutme__link_portfolio"
            title="Научиться учиться"
            target="_blank"
            rel="noreferrer">Статичный сайт
            <span className="aboutme__link aboutme__link_icon" /></a>
        </li>
      </ol>
    </section>
  )
}

export default AboutMe;