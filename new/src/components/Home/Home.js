import s from "./home.module.css";

export const Home = () => {
  return (
    <>
      <section className={s.homeContainer}>
        <div className={s.container}>
          {" "}
          <div className={s.homeCard}>
            <div className={s.homeTitle}>
              <h1>Орган по валидации и верификации парниковых газов</h1>
            </div>
            <h2 className={s.homeDescr}>ООО «Углеметан Групп»</h2>
            {/* <div className={s.heroWrap}>
                    <button className={s.heroBtn}>FREE 30&nbsp;DAY TRIAL</button>
                    <span className={s.heroSequre}>SSL secured connection</span>
                  </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
