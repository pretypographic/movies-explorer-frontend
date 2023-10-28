function AboutProject() {
  return (
    <section className="aboutproject">
      <h2 className="aboutproject__title">О проекте</h2>
      <article className="aboutproject__article">
        <h2 className="aboutproject__subtitle">Дипломный проект включал 5 этапов</h2>
        <p className="aboutproject__text">Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.</p>
        <h2 className="aboutproject__subtitle">На выполнение диплома ушло 5 недель</h2>
        <p className="aboutproject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
          было соблюдать, чтобы успешно защититься.</p>
      </article>
      <div className="aboutproject__chart">
        <p className="aboutproject__chart-timing">1 неделя</p>
        <p className="aboutproject__chart-timing">4 недели</p>
        <p className="aboutproject__chart-work">Back-end</p>
        <p className="aboutproject__chart-work">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;