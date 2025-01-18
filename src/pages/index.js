import { useState, useEffect, useRef } from "react";
import MainLayout from "@/layout/layout";
import Emploeers from "@/components/cards/emploeers";
import style from "@/styles/Home.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import TextFieldBox from "@/components/textField/textField";

import Viewer from "viewerjs"; // Import Viewer library
import "viewerjs/dist/viewer.min.css"; // Import Viewer styles


export default function Home() {
  const viewerRef = useRef(null);
  const { t, i18n } = useTranslation("home");
  // Проверяем, инициализированы ли переводы
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    // После инициализации переводов ставим isLoaded в true
    if (i18n.isInitialized) {
      setIsLoaded(true);
    } else {
      i18n.on("initialized", () => setIsLoaded(true));
    }
  }, [i18n]);

  // Пока переводы не загружены, показываем индикатор загрузки
  if (!isLoaded) {
    return <div>Loading...</div>;
  }


  const cardsData = [
    {
      name: "Dmitrij",
      slag: "dmitrij",
      description: "Realizm",
      backgroundImage: "/img/portfolio/Dmitrij.png",
    },
    {
      name: "Ketto",
      slag: "ketto",
      description: "Od realistyki do stylu vipshading",
      backgroundImage: "/img/portfolio/Ketto.png",
    },
    {
      name: "Yoka",
      slag: "yoka",
      description: "Ma doświadczenie 11 lat",
      backgroundImage: "/img/portfolio/Yoka.png",
    },
  ];
  // Функция для генерации массива URL-адресов изображений
  const generateImageUrls = () => {
    let urls = [];
    for (let i = 1; i <= 10; i++) {
      urls.push(`img/test/${i}.png`);
    }

    return urls;
  };

  const imageUrls = generateImageUrls();
  const [openViewer, setOpenViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (openViewer && viewerRef.current) {
      const viewer = new Viewer(viewerRef.current, {
        scalable: true,
        backdrop: true,
        button: true,
        focus: false,
        fullscreen: true,
        loading: false,
        loop: false,
        keyboard: true,
        movable: false,
        navbar: false,
        rotatable: false,
        slideOnTouch: false,
        title: false,
        toggleOnDblclick: false,
        toolbar: false,
        tooltip: false,
        transition: true,
        zoomable: false,
        zoomOnTouch: false,
        zoomOnWheel: false,
      });

      return () => {
        viewer.destroy();
      };
    }
  }, [openViewer]);

  const handleOpenViewer = (index) => {
    setSelectedImageIndex(index);
    setOpenViewer(true);
  };

  const handleCloseViewer = () => {
    setOpenViewer(false);
  };

  

  useEffect(() => {
    
    const viewer = new Viewer(document.getElementById("images"), {
      scalable: true,
      backdrop: true,
      button: true,
      focus: false,
      fullscreen: true,
      loading: false,
      loop: false,
      keyboard: true,
      movable: false,
      navbar: false,
      rotatable: false,
      slideOnTouch: false,
      title: false,
      toggleOnDblclick: false,
      toolbar: false,
      tooltip: false,
      transition: true,
      zoomable: false,
      zoomOnTouch: false,
      zoomOnWheel: false,
    });

    return () => {
      
      viewer.destroy();
    };
  }, []); 

  return (
    <>
      <MainLayout>
        <div className={style.firstScreen}>
          <div className={style.greeting}>
            <h1>{t("firstScreen.title")}</h1>
            <p>{t("firstScreen.slogan")}</p>
            <a href="#contact">
            <Button
              className={style.button}
              sx={{
                "&.MuiButton-text": {
                  fontFamily: " 'Montserrat', sans-serif",
                  fontWeight: " 500",
                  fontSize: "24px",
                  textAlign: "center",
                  color: "#fff",
                  textTransform: "none",
                },
              }}
            >
              {t("buttonConsul")}
            </Button>
            </a>
          </div>
        </div>
        <div className={style.gridContainerM}>
          <div />
          <div className={style.mainContent}>
            <div className={style.aboutUs}>
              <h4 id="aboutUs" className={style.title}>
                {t("aboutUs.title")}
              </h4>
              <div className={style.textConteiner}>
                <p>
                  {t("aboutUs.text.fm1")}
                  <span className={style.highlight}> Dizzy Tattoo </span>
                  {t("aboutUs.text.fm2")}
                  <br />
                  {t("aboutUs.text.fm3")}
                  <br />
                  {t("aboutUs.text.fm4")}
                  <br />
                  <br />
                  {t("aboutUs.text.fm5")}
                  <br />
                  <br />
                  {t("aboutUs.text.fm6")}
                  <span className={style.highlight}> Dizzy Tattoo </span>
                  {t("aboutUs.text.fm7")}
                  <br />
                  <br />
                  {t("aboutUs.text.fm8")}
                  <br />
                  <br />
                  {t("aboutUs.text.fm9")}
                </p>
              </div>
            </div>
            <div id="ourGroup" className={style.ourGroup}>
              <span className={style.backgroundTitle}>
                {t("ourGroup.title")}
              </span>
              <h4 className={style.title}>{t("ourGroup.title")}</h4>
              <Emploeers cards={cardsData} style={style} />
            </div>
            <span className={style.backgroundTitle}>{t("offers.title")}</span>
            <div id="offers" className={style.offers}>
              <h4 className={style.title}>{t("offers.title")}</h4>
              <Link href={"#"} className={style.textConteiner}>
                <div className={style.topBlock}>
                  <h5>
                    {t("offers.firstOffer.title.fm1")}
                    <br />
                    {t("offers.firstOffer.title.fm2")}
                  </h5>
                  <div className={style.border}>
                    <p>{t("offers.tag")}</p>
                  </div>
                </div>
                <p>{t("offers.firstOffer.text")}</p>
                <div className={style.bottomBlock}>
                  <svg
                    width="74"
                    height="16"
                    viewBox="0 0 74 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM73.7071 8.7071C74.0976 8.31658 74.0976 7.68341 73.7071 7.29289L67.3431 0.928926C66.9526 0.538402 66.3195 0.538402 65.9289 0.928927C65.5384 1.31945 65.5384 1.95262 65.9289 2.34314L71.5858 7.99999L65.9289 13.6568C65.5384 14.0474 65.5384 14.6805 65.9289 15.0711C66.3195 15.4616 66.9526 15.4616 67.3431 15.0711L73.7071 8.7071ZM1 9L73 8.99999L73 6.99999L1 7L1 9Z"
                      fill="#00F3BC"
                    />
                  </svg>
                </div>
              </Link>

              <Link href={"#"} className={style.textConteiner}>
                <div className={style.topBlock}>
                  <h5>
                    {t("offers.secondOffer.title.fm1")}
                    <br />
                    {t("offers.secondOffer.title.fm2")}
                  </h5>
                  <div className={style.border}>
                    <p>{t("offers.tag")}</p>
                  </div>
                </div>
                <p>{t("offers.secondOffer.text")}</p>
                <div className={style.bottomBlock}>
                  <svg
                    width="74"
                    height="16"
                    viewBox="0 0 74 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM73.7071 8.7071C74.0976 8.31658 74.0976 7.68341 73.7071 7.29289L67.3431 0.928926C66.9526 0.538402 66.3195 0.538402 65.9289 0.928927C65.5384 1.31945 65.5384 1.95262 65.9289 2.34314L71.5858 7.99999L65.9289 13.6568C65.5384 14.0474 65.5384 14.6805 65.9289 15.0711C66.3195 15.4616 66.9526 15.4616 67.3431 15.0711L73.7071 8.7071ZM1 9L73 8.99999L73 6.99999L1 7L1 9Z"
                      fill="#00F3BC"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <span className={style.backgroundTitle}>
              {t("portfolio.tittle")}
            </span>
            <div id="portfolio" className={style.portfolio}>
              <h4 className={style.title}>{t("portfolio.tittle")}</h4>
              <div>
              <div id="images" className={style.cardsFlex}> 
            {imageUrls.map((url, index) => (
              <img
                className={style.img}
                key={index}
                src={url}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
                <a href="#contact">
                <Button
                  className={style.button}
                  sx={{
                    "&.MuiButton-text": {
                      fontFamily: " 'Montserrat', sans-serif",
                      fontWeight: " 500",
                      fontSize: "24px",
                      textAlign: "center",
                      color: "#fff",
                      textTransform: "none",
                      Width: "250px",
                    },
                  }}
                >
                  {t("buttonSeeMore")}
                </Button>
                </a>
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className={style.slogan}>
          <span className={style.backgroundTitle}>{t("slogan.title")}</span>
        </div>
        <div className={style.gridContainerM}>
          <div />
          <div className={style.mainContent}>
            <div className={style.analitics}>
              <h2 className={style.bottomtTitle}>{t("slogan.title")}</h2>
              <div className={style.statsConteiner}>
                <div>
                  <span className={style.count}>33327</span>
                  <p className={style.s}>{t("analitics.doneTattoo")}</p>
                </div>
                <div>
                  <span className={style.count}>99945</span>
                  <p className={style.s}>{t("analitics.workTime")}</p>
                </div>
                <div>
                  <span className={style.count}>54677</span>
                  <p className={style.s}>{t("analitics.satisfiedClients")}</p>
                </div>
              </div>
            </div>
            <span className={style.backgroundTitle}>{t("contact.title")}</span>
            <h2 className={style.title}>{t("contact.title")}</h2>
            <div className={style.contactFrame}>
              <div>
                <div className={style.contactInfo}>
                  <div id={'contact'} className={style.contact}>
                    <h5>{t("contact.title")}</h5>
                    <p>
                      <a href="tel:+12345567890">+12 345 567 890</a>
                      <br />
                      <br />
                      <a href="mailto:someone@example.com">
                        someone@example.com
                      </a>
                      <br />
                      <br />
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/dir//Jurajska+4%2Flokal+U4,+02-699+Warszawa/@52.1248941,16.327123,7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x471932fcd1b0174f:0x5b72f1f9b281bd43!2m2!1d20.9943556!2d52.1624886?authuser=0&entry=ttu"
                      >
                        {t("contact.address")}
                      </a>
                    </p>
                  </div>
                  <div className={style.schedule}>
                    <h5>{t("contact.schedule.title")}</h5>
                    <p>
                      {t("contact.schedule.text.fr1")}
                      <br />
                      10 - 20
                      <br />
                      <br />
                      {t("contact.schedule.text.fr2")}
                      <br />
                      10 - 16
                    </p>
                  </div>
                </div>
                <div className={style.formBox}>
                  <div>
                    <h5>
                      {t("contact.form.text.fr1")}
                      <br />
                      {t("contact.form.text.fr2")}
                    </h5>
                    <div className={style.form}>
                      <TextFieldBox />
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
      </MainLayout>
      
    </>
  );
}
