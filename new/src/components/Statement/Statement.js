import s from "./statement.module.css";

export const Statement = () => {
  return (
    <>
      <section id="statement" className={s.statement}>
        <div className={s.container}>
          <div className={s.statementTitle}>
            <h2>Подать заявку:</h2>
          </div>
          <p className={s.statementDescr}>
            - Заполните шаблон заявки и направьте на почту:{" "}
            <a href="mailto:mail@uglemetan.ru">mail@uglemetan.ru</a>
          </p>

          <p className={s.statementDescr}>- Права и обязанности заявителей </p>
        </div>
      </section>
    </>
  );
};
