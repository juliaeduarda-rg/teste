import "./App.css";
import headerMarcio from "./img/marcio deitado png.png";
import tablet from "./img/Tablet PNG.png";
import lozango from "./img/elemento lozango.png";
import triangle from "./img/elemento triangle.png";
import trianglePreenchido from "./img/elemento trianglePreenchido.png";
import string from "./img/elemento string.png";
import MEI from "./img/mei.png";
import register from "./img/register.png";
import permitted from "./img/permitted.png";
import advantage from "./img/advantage.png";
import cash from "./img/cash.png";
import nfs from "./img/nfs.png";
import obligation from "./img/obligation.png";
import archievement from "./img/achievement.png";
import blankImg from "./img/blank-img.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,600;0,900;1,300&display=swap');
      </style>

      <header className="App-header">
        <section>
          <img id="header-marcio" src={headerMarcio}></img>
          <h1 className="header-title1">MEI</h1>
          <h3 className="header-title2">O guia completo para</h3>
          <h3 className="header-title3">Formalização do seu negócio</h3>
        </section>
      </header>

      <div className="mobile-header1">
        <p></p>
      </div>

      <div className="mobile-header2">
        <p></p>
      </div>

      <div className="header-bottom">
        <p></p>
      </div>

      <body className="App-body">
        <div className="video-div">
          <iframe
            width="250"
            height="500"
            className="main-video"
            src="https://www.youtube.com/embed/10fJRAj6gi4"
          ></iframe>

          <iframe
            width="380"
            height="250"
            className="mobile-main-video"
            src="https://www.youtube.com/embed/10fJRAj6gi4"
          ></iframe>

          <p id="title" className="video-title">
            Torne-se um MEI de sucesso
          </p>
          <a
            href="https://pay.hotmart.com/V84065811W?checkoutMode=10"
            className="buying-button1"
          >
            Adquira já!
          </a>
        </div>

        <section className="home-swiper-section">
          <div className="lozango1Div">
            <img src={lozango} className="lozango1"></img>
          </div>

          <div>
            <img src={trianglePreenchido} className="trianglePreenchido1"></img>
          </div>

          <Swiper
            className="home-swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide id="swiperText">
              <p className="swiperText1">
                Se você é um(a) empreendedor(a) que busca informações claras e
              </p>
              <p className="swiperText1">
                objetivas sobre como formalizar seu negócio, este guia é para
                você!
              </p>
            </SwiperSlide>

            <SwiperSlide id="swiperText">
              <p className="swiperText2">
                Este ebook é o guia mais completo disponível atualmente
              </p>
              <p className="swiperText2">
                para quem deseja formalizar seu negócio como MEI.
              </p>
            </SwiperSlide>

            <SwiperSlide id="swiperText">
              <p className="swiperText3">
                Ele abrange todos os aspectos necessários para que você
              </p>
              <p className="swiperText3">
                possa iniciar seu negócio de forma legal, com segurança e
                tranquilidade.
              </p>
            </SwiperSlide>

            <SwiperSlide id="swiperText">
              <p>
                Com linguagem clara e objetiva, este ebook vai te ajudar a
                entender os benefícios da formalização,
              </p>
              <p>
                o passo a passo para se registrar como MEI, as obrigações e
                direitos, as vantagens de se formalizar e muito mais.
              </p>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="card1">
          <div>
            <img src={triangle} className="triangle1"></img>
          </div>

          <div>
            <img src={string} className="string1"></img>
          </div>
          <div id="card">
            <p className="cardTitle">Conteúdo</p>

            <Swiper
              className="content-list"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="contentSwiperSlide1">
                <img id="contentImg" className="content-img1" src={MEI}></img>

                <p id="swiperText">O que é MEI</p>
              </SwiperSlide>

              <SwiperSlide className="SwiperSlide1">
                <img
                  id="contentImg"
                  className="content-img2"
                  src={register}
                ></img>

                <p id="swiperText">
                  Como se cadastrar no portal do empreendedor e se tornar um MEI
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  id="contentImg"
                  className="content-img2"
                  src={permitted}
                ></img>

                <p id="swiperText">
                  Quais são as atividades permitidas para MEI?
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  id="contentImg"
                  className="content-img3"
                  src={advantage}
                ></img>

                <p id="swiperText">Quais são as vantagens de ser MEI?</p>
              </SwiperSlide>

              <SwiperSlide>
                <img id="contentImg" className="content-img4" src={cash}></img>

                <p id="swiperText">Como funciona a tributação do MEI?</p>
              </SwiperSlide>

              <SwiperSlide>
                <img id="contentImg" className="content-img5" src={nfs}></img>

                <p id="swiperText">Como emitir nota fiscal sendo MEI?</p>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  id="contentImg"
                  className="content-img6"
                  src={obligation}
                ></img>

                <p id="swiperText">quais são as obrigações do MEI? </p>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  id="contentImg"
                  className="content-img7"
                  src={archievement}
                ></img>

                <p id="swiperText">
                  conquiste o sucesso como MEI: 7 dicas infalíveis!
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="mobile-content-swiper">
          <Swiper
            className="content-list"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="contentSwiperSlide1">
              <img id="contentImg" className="content-img1" src={MEI}></img>

              <p id="swiperText">O que é MEI</p>
            </SwiperSlide>

            <SwiperSlide className="SwiperSlide1">
              <img
                id="contentImg"
                className="content-img2"
                src={register}
              ></img>

              <p id="swiperText">
                Como se cadastrar no portal do empreendedor e se tornar um MEI
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img
                id="contentImg"
                className="content-img2"
                src={permitted}
              ></img>

              <p id="swiperText">
                Quais são as atividades permitidas para MEI?
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img
                id="contentImg"
                className="content-img3"
                src={advantage}
              ></img>

              <p id="swiperText">Quais são as vantagens de ser MEI?</p>
            </SwiperSlide>

            <SwiperSlide>
              <img id="contentImg" className="content-img4" src={cash}></img>

              <p id="swiperText">Como funciona a tributação do MEI?</p>
            </SwiperSlide>

            <SwiperSlide>
              <img id="contentImg" className="content-img5" src={nfs}></img>

              <p id="swiperText">Como emitir nota fiscal sendo MEI?</p>
            </SwiperSlide>

            <SwiperSlide>
              <img
                id="contentImg"
                className="content-img6"
                src={obligation}
              ></img>

              <p id="swiperText">quais são as obrigações do MEI? </p>
            </SwiperSlide>

            <SwiperSlide>
              <img
                id="contentImg"
                className="content-img7"
                src={archievement}
              ></img>

              <p id="swiperText">
                conquiste o sucesso como MEI: 7 dicas infalíveis!
              </p>
            </SwiperSlide>
          </Swiper>
        </section>

        <br />

        <section className="subtitle1">
          <div id="subtitle">
            <p className="sub1">
              Este guia foi escrito por um contador com anos de experiência
            </p>
            <p className="sub2">
              em assessoria contábil para MEIs. Com uma linguagem simples e
            </p>
            <p className="sub3">
              acessível, sem jargões técnicos, para garantir que todas as
            </p>
            <p className="sub4">informações sejam facilmente compreendidas.</p>
          </div>
        </section>
        <br />
        <section id="card" className="buying-section">
          <div className="buying-div">
            <div className="lozango1Div">
              <img src={lozango} className="lozango2"></img>
            </div>

            <div>
              <img
                src={trianglePreenchido}
                className="trianglePreenchido2"
              ></img>
            </div>

            <img src={tablet} className="tablet-image"></img>

            <div className="buying-price-div">
              <p className="buying-text">Compre já por apenas</p>
              <h4 className="old-price">
                <s>R$57,50</s>
              </h4>
              <h1 className="buying-price">R$37,50</h1>
              <a
                href="https://pay.hotmart.com/V84065811W?checkoutMode=10"
                className="buying-button"
              >
                Adquirir
              </a>
            </div>
          </div>
        </section>

        <section id="card" className="mobile-buying-section">
          <div className="mobile-buying-price-div">
            <p className="buying-text">Compre já por apenas</p>
            <h4 className="old-price">
              <s>R$57,50</s>
            </h4>
            <h1 className="buying-price">R$37,50</h1>
            <a
              href="https://pay.hotmart.com/V84065811W?checkoutMode=10"
              className="buying-button"
            >
              Adquirir
            </a>
          </div>

          <img src={tablet} className="mobile-tablet-image"></img>
        </section>
      </body>

      <footer className="App-footer">
        <div className="social-media">
          <h1 id="socialMedia" className="social-media-title">
            nos siga nas redes sociais!
          </h1>

          <a
            className="insta-logo"
            href="https://www.instagram.com/goncalvesassessorias/"
            target="_blank"
          >
            <BsInstagram />
          </a>

          <a className="face-logo">
            <BsFacebook />
          </a>
        </div>
      </footer>

      <div className="mobile-footer">
        <p>.</p>
      </div>
    </div>
  );
}

export default App;
