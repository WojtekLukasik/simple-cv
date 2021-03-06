import "./App.css";
import pdf from "./cv-download/CV-PL.pdf";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <span>Wojciech Łukasik</span>
        <span>CV</span>
      </header>
      <section className="section-info">
        <header>KONTAKT</header>
        <span>
          E-mail:
          <a href="mailto: wojtek.lukasik@yahoo.pl"> wojtek.lukasik@yahoo.pl</a>
        </span>

        <span>
          Nr telefonu:
          <a href="tel:+48881 777 922"> 881 777 922 </a>
        </span>
        <span>
          Github:
          <a
            href="https://github.com/WojtekLukasik"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://github.com/WojtekLukasik{" "}
          </a>{" "}
        </span>
        <span>
          <a href={pdf} target="_blank" rel="noreferrer">
            CV w wersji PDF
          </a>
        </span>
      </section>
      <section className="section-info">
        <header> PROFIL</header>
        <span>
          Moim celem jest rozpoczęcie pracy w branży IT przed zakończeniem
          studiów inżynierskich. Nie posiadam komercyjnego doświadczenia jako
          programista, ale jestem zdeterminowany do nauki i rozwoju. Dodatkowo
          praca w branży gastronomicznej nauczyła mnie koordynacji w
          wieloosobowych i wielojęzycznych zespołach. <br />
          <br />
          Najbardziej interesuję się tworzeniem aplikacji oraz stron
          internetowych. Piszę w JavaScript( wraz z frameworkiem React), HTML i
          CSS. Znam również relacyjne bazy danych, język SQL oraz Pythona.
        </span>
      </section>
      <section className="section-info">
        <header>HISTORIA ZATRUDNIENIA</header>
        <span className="span-bold"> Luty 2019 – Wrzesień 2020 </span>
        <span className="span-bold">
          {" "}
          Barman: Dubliner Irish Pub, Centrum rozrywki Gravitacja, Rodizio de
          Brazil, Poznań{" "}
        </span>
        <span>
          Byłem odpowiedzialny za typowe zadania barmańskie. Pracowałem w
          zespołach składających się z pracowników z centralnej i wschodniej
          Europy. Praca na tym stanowisku wymagała ode mnie dużej ilości
          komunikacji zarówno w języku polskim jak i angielskim.
        </span>
      </section>
      <section className="section-info">
        <header>EDUKACJA</header>
        <span className="span-bold">Październik 2018 – aktualnie </span>
        <span className="span-bold">
          Studia inżynierskie na wydziale Matematyki i Informatyki Uniwersytetu
          im. Adama Mickiewicza w Poznaniu.{" "}
        </span>
        <span>
          {" "}
          Po zdaniu matury, ze względu na moje zainteresowanie naukami ścisłymi
          oraz współczesną technologią, postanowiłem rozpocząć studia na
          kierunku Informatyka Wydziału Matematyki i Informatyki Uniwersytetu
          im. Adama Mickiewicza w Poznaniu.{" "}
        </span>
      </section>
      <section className="section-info">
        <header>JĘZYKI </header>
        <span className="span-bold">
          Certificate in Advanced English, Grudzień 2017{" "}
        </span>
        <span>Certyfikat Cambridge, poziom C1. </span>

        <span className="span-bold">
          First Certificate in English, Czerwiec 2016{" "}
        </span>
        <span>Certyfikat Cambridge, poziom B2. </span>
      </section>
      <section className="section-info">
        <header>WYBRANE PROJEKTY Z MOJEGO GITHUBA</header>
        <span className="span-bold-big">Pizza store</span>
        <span>
          {" "}
          Projekt zaliczeniowy z przedmiotu Nowoczesne Frameworki Webowe.
          <br /> Aplikacja internetowa imitująca pizzerię. Interfejs umożliwia
          wybieranie oraz modyfikacje produktów z listy oraz zarządzanie
          zamówieniem. <br />
          Dane związane z produktami są pobierane z backendu stworzonego przez
          prowadzących: Michała Dzika oraz Dawida Kędzierskiego
        </span>
        <span>
          Wykorzystane technologie: HTML, CSS, JavaScript, React, React Redux
        </span>
        <span className="span-bold">
          <a
            href="https://github.com/WojtekLukasik/pizza-store"
            target="_blank"
            rel="noreferrer"
          >
            Kod projektu
          </a>
        </span>
        <span className="span-bold">
          <a
            href="https://github.com/DzixxxVizlib/UAM-WMI-NFW"
            target="_blank"
            rel="noreferrer"
          >
            Kod backendu
          </a>
        </span>
        <br />
        <br />
        <span className="span-bold-big">To Do App</span>
        <span>
          {" "}
          Prosta aplikacja służąca do obsługi listy zadań. Pozwala tworzyć
          zadania, ustalać deadline, dodawać opisy oraz zarządzać stworzonymi
          zadaniami.
        </span>
        <span>Wykorzystane technologie: HTML, CSS, JavaScript, React</span>
        <span className="span-bold">
          <a
            href="https://github.com/WojtekLukasik/to-do-app"
            target="_blank"
            rel="noreferrer"
          >
            Kod projektu
          </a>
        </span>
        <span className="span-bold">
          <a
            href="https://wojteklukasik.github.io/to-do-app/"
            target="_blank"
            rel="noreferrer"
          >
            Wersja live
          </a>
        </span>
        <br />
        <br />
        <span className="span-bold-big">Protected notepads</span>
        <span>
          {" "}
          Dwie wersje aplikacji na urządzenia mobilne pozwalające zapisywać i
          odczytywać notatki. Pierwsza zabezpiecza notatkę hasłem, druga
          wykorzystuje odcisk palca.
        </span>
        <span>Wykorzystane technologie: React Native</span>
        <span className="span-bold">
          <a
            href="https://github.com/WojtekLukasik/password-protected-notepad"
            target="_blank"
            rel="noreferrer"
          >
            Kod wersji z hasłem
          </a>
        </span>
        <span className="span-bold">
          <a
            href="https://github.com/WojtekLukasik/fingerprint-protected-notepad"
            target="_blank"
            rel="noreferrer"
          >
            Kod wersji z odciskiem palca
          </a>
        </span>
      </section>
      <footer>
        <span>
          Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
          niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem
          Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
          r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (RODO).{" "}
        </span>
      </footer>
    </div>
  );
};

export default App;
