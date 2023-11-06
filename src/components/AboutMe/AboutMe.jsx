import photo from '../../images/photo_2023-10-04_23-39-43.jpg';
import Portfolio from '../Portfolio/Portfolio';

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
            в&nbsp;Школе дизайна Высшей школы экономики. Разнообразный опыт помогает
            мне креативно подходить к&nbsp;разработке приложений и&nbsp;создавать
            привлекательные и&nbsp;функциональные проекты.</p>
          <a
            href="https://github.com/pretypographic"
            className="aboutme__link"
            title="github профиль"
            target="_blank"
            rel="noreferrer">Github</a>
        </div>
        <img className="aboutme__photo" src={photo} alt='Фотография: я за работой.' />
      </article>
      <Portfolio />
    </section>
  )
}

export default AboutMe;