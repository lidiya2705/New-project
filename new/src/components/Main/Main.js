import { Button, Layout } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import s from "./main.module.css";
import { Home } from "../Home/Home";
import { Services } from "../Services/Services";
import { Contacts } from "../Contacts/Contacts";
import logo from "../Home/ico.png";
import logo2 from "../Home/logo.jpg";
import { AboutOrgan } from "../AboutOrgan/AboutOrgan";
import { Statement } from "../Statement/Statement";

export const Main = () => {
  return (
    <>
      <header className={s.wrap}>
        <div
          className={s.container}
          style={{ display: "flex", textAlign: "center", alignItems: "center" }}
        >
          <a href="" className={s.headerLogo}>
            <img src={logo} alt="" className={s.headerImg} />
            <img src={logo2} alt="" />
          </a>
          <nav className={s.headerNav}>
            <ul className={s.headerList}>
              <li>
                <a href="#" className={s.headerLink}>
                  Главная
                </a>
              </li>
              <li>
                <a href="#services" className={s.headerLink}>
                  Услуги
                </a>
              </li>
              <li>
                <a href="#aboutOrgan" className={s.headerLink}>
                  Об органе
                </a>
              </li>
              <li>
                <a href="#statement" className={s.headerLink}>
                  Подать заявку
                </a>
              </li>

              <li>
                <a href="#contacts" className={s.headerLink}>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Layout.Content>
        <Home />
        <Services />
        <AboutOrgan />
        <Statement />
        <Contacts />
      </Layout.Content>

      <div className={s.container}>
        <a href="#">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <Button
              shape="circle"
              icon={<ArrowUpOutlined style={{ color: "#8892b5" }} />}
              style={{
                fontSize: "40px",
                height: "65px",
                width: "65px",
                background: "#EEF1F8",
                marginBottom: "10px",
              }}
            ></Button>
            <span className={s.span}>Вернуться наверх</span>
          </div>
        </a>
      </div>
    </>
  );
};
