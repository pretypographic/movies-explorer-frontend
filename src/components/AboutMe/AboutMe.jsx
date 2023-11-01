import photo from '../../images/photo_2023-10-04_23-39-43.jpg';

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <article className="aboutme__article">
        <div className="aboutme__experience">
          <h3 className="aboutme__name">Песвианидзе Александр</h3>
          <h4 className="aboutme__subtitle">web-разработчик, 30 лет</h4>
          <p className="aboutme__text">Мой профессиональный путь начался 
          в&nbsp;области кинорежиссуры, но&nbsp;со&nbsp;временем 
          я&nbsp;переключился на&nbsp;разработку настольных игр. Мой опыт также 
          охватывает администрирование театральной деятельности, работу 
          в&nbsp;студии дубляжа и&nbsp;участие в&nbsp;художественных 
          и&nbsp;арт&minus;проектах. Мое образование включает в&nbsp;себя курсы 
          веб&minus;разработки в&nbsp;Yandex Practicum и&nbsp;курсы разработки игр 
          в&nbsp;Школе дизайна Высшей школы экономики. Разнообразный опыт помогает мне 
          креативно подходить к&nbsp;разработке приложений и&nbsp;создавать 
          привлекательные и&nbsp;функциональные проекты.</p>
          <a
            href="https://github.com/pretypographic"
            className="aboutme__link"
            target="_blank"
            rel="noreferrer">Github</a>
        </div>
        <img className="aboutme__photo" src={photo} alt='Фотография: я за работой.' />
      </article>
      <h4 className="aboutme__portfolio-title">Портфолио</h4>
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
    </section>
  )
}

export default AboutMe;