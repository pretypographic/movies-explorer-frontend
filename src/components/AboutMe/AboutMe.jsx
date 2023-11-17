import photo from '../../images/photo_2023-10-04_23-39-43.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__article">
        <div className="about-me__experience">
        <h3 className="about-me__name">Песвианидзе Александр</h3>
          <h4 className="about-me__subtitle">web-разработчик, 30 лет</h4>
          <p className="about-me__text">Мой профессиональный путь начался
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
            className="about-me__link"
            title="github профиль"
            target="_blank"
            rel="noreferrer">Github</a>
        </div>
        <img className="about-me__photo" src={photo} alt='Портрет.' />
      </article>
      <Portfolio />
    </section>
  )
}

export default AboutMe;