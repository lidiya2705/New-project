import s from "./aboutOrgan.module.css";

export const AboutOrgan = () => {
  return (
    <>
      <section id="aboutOrgan" className={s.aboutOrgan}>
        <div className={s.container}>
          <div className={s.aboutOrganTitle}>
            <h2>Об органе:</h2>
          </div>
          <p className={s.aboutOrganDescr}>- Описание процесса верификации</p>
          <p className={s.aboutOrganDescr}>- Обеспечение беспристрастности </p>
          <p className={s.aboutOrganDescr}>- Обеспечение конфиденциальности </p>
          <p className={s.aboutOrganDescr}>- Апелляции и жалобы </p>
          <p className={s.aboutOrganDescr}>- Сотрудники органа </p>
          <p className={s.aboutOrganDescr}>
            - Перечень документов, используемых при выполнении работ
          </p>
          <p className={s.aboutOrganDescr}>- Стоимость работ </p>
        </div>
      </section>
    </>
  );
};
