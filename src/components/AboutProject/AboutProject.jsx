function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <article className="about-project__article">
        <h2 className="about-project__subtitle">Дипломный проект включал 5 этапов</h2>
        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.</p>
        <h2 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h2>
        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
          было соблюдать, чтобы успешно защититься.</p>
      </article>
      <div className="about-project__chart">
        <p className="about-project__chart-timing">1 неделя</p>
        <p className="about-project__chart-timing">4 недели</p>
        <p className="about-project__chart-work">Back-end</p>
        <p className="about-project__chart-work">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;