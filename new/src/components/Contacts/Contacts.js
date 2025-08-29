import s from "./contacts.module.css";

export const Contacts = () => {
  return (
    <>
      <section id="contacts" className={s.contacts}>
        <div className={s.container}>
          <div className={s.contactsTitle}>
            <h2>Контакты и адрес:</h2>
          </div>
          <p className={s.contactsDescr}></p>
        </div>
      </section>
    </>
  );
};
