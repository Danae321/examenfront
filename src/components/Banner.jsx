import { useState, useEffect } from "react";
import headerImg from "../assets/img/header-img.svg";
import bannerBg from "../assets/img/banner-bg.jpg";
import profileImg from "../assets/img/xd.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../styles/Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [showPdf, setShowPdf] = useState(false);

  const toRotate = ["U.A.T.F Ingenieria Informática"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  // Manejar clics fuera del PDF
  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.querySelector(".pdf-popup");
      if (popup && !popup.contains(event.target)) {
        setShowPdf(false);
      }
    };

    if (showPdf) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPdf]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="banner"
      id="home"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="banner-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="banner-text w-full md:w-3/5 xl:w-3/5 text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`${isVisible ? "banner-fadeIn" : ""}`}>
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="rounded-full w-24 h-24 mx-auto mt-8 border-4 border-purple-400"
                  />
                  <span
                    className="tagline"
                    onMouseEnter={() => setShowPdf(true)}
                  >
                    Bienvenido a mi portafolio
                  </span>
                  {showPdf && (
                    <div className="pdf-popup" onClick={(e) => e.stopPropagation()}>
                      <iframe
                        src="/archivo.pdf"
                        title="PDF"
                        className="pdf-frame"
                      ></iframe>
                    </div>
                  )}
                  <h1 className="banner-heading">
                    Hola, Soy Danae Katherin Largo Bobarin
                    <span
                      className="txt-rotate text-violet-400"
                      data-period="1000"
                      data-rotate='[ "Ing.Informática" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="banner-text-description">
                    Hola, mi nombre es Danae, y soy estudiante de Ingeniería
                    Informática en la Universidad. Desde pequeña, siempre he
                    tenido una fascinación por la tecnología y las computadoras.
                    Esta pasión me llevó a elegir una carrera en la que puedo
                    combinar mi amor por la resolución de problemas con el
                    desarrollo de soluciones tecnológicas innovadoras.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </div>

          <div className="w-full md:w-1/2 xl:w-5/12 mt-8 md:mt-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`${isVisible ? "banner-image-zoom" : ""}`}>
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="banner-image animate-bounce"
                  />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
