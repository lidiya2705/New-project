import s from "./contacts.module.css";

export const Contacts = () => {
  return (
    <>
      <section id="contacts" className={s.contacts}>
        <div className={s.container}>
          <div className={s.contactsTitle}>
            <h2>Контакты и адрес:</h2>
          </div>
          <p className={s.contactsDescr}>
            Орган по валидации и верификации ООО «Углеметан Групп»
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2 className={s.contactsCaption}>Контакты</h2>
          </div>
          <div className={s.contactsLink}>
            <a href="tel:+7  (3842) 765-999">+7  (3842) 765-999</a>
            <a href="mailto:mail@uglemetan.ru">mail@uglemetan.ru</a>
          </div>
        </div>
      </section>
    </>
  );
};
