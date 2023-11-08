// import photo from '../../images/photo_2023-10-04_23-39-43.jpg';
import photo from '../../images/pic__COLOR_pic.png'
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__article">
        <div className="about-me__experience">
          <h3 className="about-me__name">Виталий</h3>
          <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__text">Я родился и живу в Саратове, закончил 
          факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, 
          а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в 
          компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
          начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
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