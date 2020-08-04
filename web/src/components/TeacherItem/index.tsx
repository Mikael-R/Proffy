import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://instagram.fjdo5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/83603394_533858587481839_7330428620629868544_n.jpg?_nc_ht=instagram.fjdo5-1.fna.fbcdn.net&_nc_ohc=ShuSvRiakOIAX8y75nW&oh=267807a4d9769d6172f5809741dde0bb&oe=5F50E446"
          alt="Mikael Rolim"
        />
        <div>
          <strong>Mikael Rolim</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Programador com apenas 14 anos.
        <br /><br />
        Fanático pelas tecnologias web e apaixonado por resolver problemas.<br />
        Back-end é o meu foco, mas de vez em quando faço uma gambiarra na estilização
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
